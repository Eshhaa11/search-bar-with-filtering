import { useState } from "react";
import "./Search.css";

function Search () {
    const[filter, setFilter] = useState("");

    const items = [
        'Moonshade Indigo',
        'Mango',
        'Blue',
        'Cherry',
        'Starlight Silver',
        'Avocado',
        'Brown',
        'Celestial Lavender',
        'Apple',
        'Orange',
        'Shadow Mint',
        'Grapes',
        'Cyan',
        'Dreamdust Purple',
        'Black',
        'Strawberry',
        'Red',
        'Pink',
        'Watermelon',
        'Tangerine',
        'Forest Ash Green',
    ];

    const filteredItems = items.filter(item => 
        item.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="search-cont">
           <input
            type="text"
            placeholder="Search colors or fruits"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="search-input"
           /> 

           <ul className="result-li">
           {filteredItems.length > 0 ? (
             filteredItems.map((item, index) => (
                <li key={index} className="result-item">{item}</li>
            ))
          ) : (
            <li className="no-results">No color or fruit like that available now.</li>
          )}
        </ul>
        </div>
    );
};

export default Search;