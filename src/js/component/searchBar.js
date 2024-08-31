import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();
    const { store } = useContext(Context);

    useEffect(() => {
        if (query.length > 0) {
            const allItems = [...store.characters, ...store.planets, ...store.starships];
            const filteredSuggestions = allItems.filter(item => 
                item.properties.name.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    }, [query, store]);

    const handleSelect = (item) => {
        console.log("Selected item:", item);
        if (store.characters.some(character => character.properties.name === item.properties.name)) {
            console.log("Navigating to singleCharacter");
            navigate(`/singleCharacter/${item.uid}`);
        } else if (store.planets.some(planet => planet.properties.name === item.properties.name)) {
            console.log("Navigating to singlePlanet");
            navigate(`/singlePlanet/${item.uid}`);
        } else if (store.starships.some(starship => starship.properties.name === item.properties.name)) {
            console.log("Navigating to singleStarship");
            navigate(`/singleStarship/${item.uid}`);
        } else {
            console.log("Item not found in any category");
        }
    };

    return (
        <div>
            <div className="input-group my-3">
              <span className="input-group-text bg-primary text-light" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
              <input 
              type="text" 
                className="form-control me-3"
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search for characters, planets, or starships..."
            />
            </div>
            <ul>
                {suggestions.map((item, index) => (
                    <li key={index} onClick={() => handleSelect(item)}>
                        {item.properties.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;