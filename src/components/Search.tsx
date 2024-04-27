import React from 'react'
import { useState } from 'react';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        highlightText(event.target.value);
    };

    const highlightText = (text) => {
        if (!text) {
            window.find(''); 
            return;
        }

        if (window.find(text)) {
            document.execCommand('hiliteColor', false, 'yellow');
        } else {
            window.alert('No matches found');
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search the page..."
            />
        </div>
    );
};
export default Search;