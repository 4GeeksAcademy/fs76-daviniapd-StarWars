import React, { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../store/appContext';

export const DpdSearch = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();
    const { store } = useContext(Context);
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (query.length > 0) {
            const allItems = [...store.characters, ...store.planets, ...store.vehicles];
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
            navigate(`/singleCharacter/${item.uid}`);
        } else if (store.planets.some(planet => planet.properties.name === item.properties.name)) {
            navigate(`/singlePlanet/${item.uid}`);
        } else if (store.vehicles.some(vehicle => vehicle.properties.name === item.properties.name)) {
            navigate(`/singleVehicle/${item.uid}`);
        } else {
            console.log("Item not found in any category");
        }
    };

    const handleFocus = () => {
        const allItems = [...store.characters, ...store.planets, ...store.vehicles];
        setSuggestions(allItems);
    };

    const handleClickOutside = (event) => {
        if (
            inputRef.current && !inputRef.current.contains(event.target) &&
            dropdownRef.current && !dropdownRef.current.contains(event.target)
        ) {
            setSuggestions([]);
        }
    };

    const handleSearch = () => {
        const selectedItem = suggestions.find(item => item.properties.name.toLowerCase() === query.toLowerCase());
        if (selectedItem) {
            handleSelect(selectedItem);
        } else {
            console.log("No matching item found");
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className="input-group d-flex flex-row justify-content-end w-100">
                <div ref={dropdownRef}>
                    <input
                        type="text"
                        className="form-control rounded-start custom-input"
                        style={{ width: "350px" }}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={handleFocus}
                        onKeyDown={handleKeyDown}
                        placeholder="Search for characters, planets, or vehicles..."
                        aria-describedby="searchLoupa"
                        ref={inputRef}
                    />
                    {suggestions.length > 0 && (
                        <ul className={`dropdown-menu ${suggestions.length > 0 ? 'show' : ''}`}
                        style={{
                            maxHeight: '300px',
                            overflowY: 'auto',
                            right: 0,
                            left: 'auto'
                          }}>
                            {suggestions.map((item, index) => (
                                <li
                                    key={index}
                                    className="dropdown-item"
                                    onClick={() => handleSelect(item)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {item.properties.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <span type="button" className="input-group-text text-black rounded-end" style={{backgroundColor:"#ffe81f"}} id="searchLoupa" onClick={handleSearch}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
            </div>
        </div>
    );
};
