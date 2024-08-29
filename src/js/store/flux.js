const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: []
        },
        actions: {
            loadCharacters: () => {
                fetch('https://www.swapi.tech/api/people/')
                    .then(response => response.json())
                    .then(data => {
                        const results = data.results;
                        const characterPromises = results.map(result => {
                            const characterId = result.uid;
                            return fetch(`https://www.swapi.tech/api/people/${characterId}`)
                                .then(response => response.json())
                                .then(characterData => characterData.result);
                        });

                        Promise.all(characterPromises)
                            .then(characters => {
                                characters.sort((a, b) => a.uid - b.uid);
                                setStore({ characters });
                            })
                            .catch(error => {
                                console.error("Error fetching characters:", error);
                            });
                    })
                    .catch(error => {
                        console.error("Error fetching characters:", error);
                    });
            }
        }
    };
};

export default getState;
