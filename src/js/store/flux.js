const getState = ({ getStore, getActions, setStore }) => {
    // Recuperar datos de localStorage al inicializar la store
    const storedCharacters = JSON.parse(localStorage.getItem('characters')) || [];
    const storedPlanets = JSON.parse(localStorage.getItem('planets')) || [];
    const storedStarships = JSON.parse(localStorage.getItem('starships')) || [];

    return {
        store: {
            characters: storedCharacters,
            planets: storedPlanets,
            starships: storedStarships,
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
            },
            planetImages: {
                "Tatooine": "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357",
                "Alderaan": "https://starwars-visualguide.com/assets/img/planets/2.jpg",
                "Yavin IV": "https://starwars-visualguide.com/assets/img/planets/3.jpg",
                "Hoth": "https://starwars-visualguide.com/assets/img/planets/4.jpg",
                "Dagobah": "https://starwars-visualguide.com/assets/img/planets/5.jpg",
                "Bespin": "https://starwars-visualguide.com/assets/img/planets/6.jpg",
                "Endor": "https://starwars-visualguide.com/assets/img/planets/7.jpg",
                "Naboo": "https://starwars-visualguide.com/assets/img/planets/8.jpg",
                "Coruscant": "https://starwars-visualguide.com/assets/img/planets/9.jpg",
                "Kamino": "https://starwars-visualguide.com/assets/img/planets/10.jpg",
            },
            starshipImages: {
                "CR90 corvette": "https://static.wikia.nocookie.net/esstarwars/images/e/e3/Sundered-Heart.jpg/revision/latest?cb=20100602032039",
                "Star Destroyer": "https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=203%2C0%2C1200%2C900",
                "Sentinel-class landing craft": "https://starwars-visualguide.com/assets/img/starships/5.jpg",
                "Death Star": "https://static.wikia.nocookie.net/starwars/images/7/70/DSI-HDapproach.png/revision/latest?cb=20130221005853",
                "Y-wing": "https://starwars-visualguide.com/assets/img/starships/11.jpg",
                "Millennium Falcon": "https://starwars-visualguide.com/assets/img/starships/10.jpg",
                "TIE Advanced x1": "https://starwars-visualguide.com/assets/img/starships/13.jpg",
                "Executor": "https://starwars-visualguide.com/assets/img/starships/15.jpg",
                "X-wing": "https://starwars-visualguide.com/assets/img/starships/12.jpg",
                "Rebel transport": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFuU8a1SAbYGt_OcPa0KG5Vys6nalmiTVv1bDVD4YLicXfDa8_utaT29K2OFO6Uqg5itC3JyKn9LGPxBBXGpg247FErYMpNOe-HH17ynZ_vGH8E7Yi6amxrlcCawilj6drSPydWJExTh4/s1600/Rebel_transport_box_art.jpg"
            },
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
                    localStorage.setItem('characters', JSON.stringify(characters)); // Guardar en localStorage
                } catch (error) {
                    console.error("Error fetching characters:", error);
                }
            },

            loadPlanets: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/planets/');
                    const data = await response.json();
                    const results = data.results;

                    const planets = [];
                    for (const result of results) {
                        const planetId = result.uid;
                        const planetResponse = await fetch(`https://www.swapi.tech/api/planets/${planetId}`);
                        const planetData = await planetResponse.json();
                        planets.push(planetData.result);
                    }
                    setStore({ planets });
                    localStorage.setItem('planets', JSON.stringify(planets)); // Guardar en localStorage
                } catch (error) {
                    console.error("Error fetching planets:", error);
                }
            },

            loadStarships: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/starships/');
                    const data = await response.json();
                    const results = data.results;

                    const starships = [];
                    for (const result of results) {
                        const starshipId = result.uid;
                        const starshipResponse = await fetch(`https://www.swapi.tech/api/starships/${starshipId}`);
                        const starshipData = await starshipResponse.json();
                        starships.push(starshipData.result);
                    }
                    setStore({ starships });
                    localStorage.setItem('starships', JSON.stringify(starships)); // Guardar en localStorage
                } catch (error) {
                    console.error("Error fetching starships:", error);
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
