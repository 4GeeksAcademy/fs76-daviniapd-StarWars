const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            favoriteItem: [],
            characterImages: {
                "Luke Skywalker": "https://static.wikia.nocookie.net/esstarwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest?cb=20071214134433",
                "C-3PO": "https://static.wikia.nocookie.net/esstarwars/images/5/51/C-3PO_EP3.png/revision/latest?cb=20161101011052",
                "R2-D2": "https://static.wikia.nocookie.net/esstarwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20150926172435https://static.wikia.nocookie.net/frstarwars/images/0/0c/R2-D2.png/revision/latest?cb=20161110201414",
                "Darth Vader": "https://im.ziffdavisinternational.com/ign_es/screenshot/d/darth-vader-en-el-episodio-vii-de-star-wars/darth-vader-en-el-episodio-vii-de-star-wars_faec.jpg",
                "Leia Organa": "https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg",
                "Owen Lars": "https://static.wikia.nocookie.net/esstarwars/images/e/eb/OwenCardTrader.png/revision/latest/scale-to-width-down/699?cb=20180105223041",
                "Beru Whitesun lars": "https://static.wikia.nocookie.net/esstarwars/images/7/76/Beru_headshot2.jpg/revision/latest?cb=20110903174509",
                "R5-D4": "https://static.wikia.nocookie.net/esstarwars/images/3/3f/R5D4-AG.png/revision/latest?cb=20240210190020",
                "Biggs Darklighter": "https://static.wikia.nocookie.net/doblaje/images/5/51/Biggs_Darklighter.png/revision/latest?cb=20230914200144&path-prefix=es",
                "Obi-Wan Kenobi": "https://i.ebayimg.com/images/g/-5UAAOSwnotiOl4F/s-l400.jpg"
            }
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
            },
            
            removeFavorite: (index) => {
                const store = getStore();
                const newFavorites = store.favoriteItem.filter((item, i) => i !== index);
                setStore({ favoriteItem: newFavorites });
            }
        }
    };
};

export default getState;
