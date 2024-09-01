const getState = ({ getStore, getActions, setStore }) => {
    const storedCharacters = JSON.parse(localStorage.getItem('characters')) || [];
    const storedPlanets = JSON.parse(localStorage.getItem('planets')) || [];
    const storedVehicles = JSON.parse(localStorage.getItem('vehicles')) || [];

    return {
        store: {
            characters: storedCharacters,
            planets: storedPlanets,
            vehicles: storedVehicles,
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
                    localStorage.setItem('characters', JSON.stringify(characters)); 
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
                    localStorage.setItem('planets', JSON.stringify(planets)); 
                } catch (error) {
                    console.error("Error fetching planets:", error);
                }
            },

            loadVehicles: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/vehicles/');
                    const data = await response.json();
                    const results = data.results;

                    const vehicles = [];
                    for (const result of results) {
                        const vehicleId = result.uid;
                        const vehicleResponse = await fetch(`https://www.swapi.tech/api/vehicles/${vehicleId}`);
                        const vehicleData = await vehicleResponse.json();
                        vehicles.push(vehicleData.result);
                    }
                    setStore({ vehicles });
                    localStorage.setItem('vehicles', JSON.stringify(vehicles)); // Guardar en localStorage
                } catch (error) {
                    console.error("Error fetching vehicles:", error);
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
