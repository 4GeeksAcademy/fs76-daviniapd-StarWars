const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            favoriteItem: [],
        },
        actions: {
            loadCharacters: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/people/');
                    const data = await response.json();
                    const results = data.results;

                    const characters = [];
                    for (const result of results) {
                        const characterId = result.uid;
                        const characterResponse = await fetch(`https://www.swapi.tech/api/people/${characterId}`);
                        const characterData = await characterResponse.json();
                        characters.push(characterData.result);
                    }
                    setStore({ characters });
                } catch (error) {
                    console.error("Error fetching characters:", error);
                }
            },

            favoriteList: (name) => {
                const store = getStore();
                const favoriteItem = store.favoriteItem.includes(name)
                    ? store.favoriteItem.filter((item) => item !== name)
                    : [...store.favoriteItem, name];
                setStore({ favoriteItem });
            }
        }
    };
};

export default getState;
