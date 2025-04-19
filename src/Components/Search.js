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
           /> 
        </div>
    )
}