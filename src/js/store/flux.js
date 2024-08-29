const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: []
		},
		actions: {
			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			loadCharacters: () => {
				fetch('https://www.swapi.tech/api/people/')
				  .then(response => response.json())
				  .then((data) => {
					const results = data.results;
					results.forEach((result) => {
					  const charactersId = result.uid; 
					  fetch(`https://www.swapi.tech/api/people/${charactersId}`)
						.then(response => response.json())
						.then((characterData) => {
						  const character = characterData.result.properties; 
						  setStore({ characters: [...getStore().characters, character] }); 
						})
						.catch((error) => {
						  console.error("Error fetching character:", error);
						});
					});
				  })
				  .catch((error) => {
					console.error("Error fetching characters:", error);
				  });
			  }

			//   loadCharacters: (uid) => {
			// 	const url = `https://www.swapi.tech/api/people/${uid}`;
			// 	fetch(url)
			// 	  .then(response => response.json())
			// 	  .then(data => {
			// 		const character = data.result.properties;
			// 		setStore({ character });
			// 	  });
			//   }
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

				//reset the global store
				// setStore({ demo: demo });
			}
		}
	};


export default getState;
