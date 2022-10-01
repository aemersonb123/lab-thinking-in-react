import React, { useState, useEffect } from 'react';

function SearchBar({ onChange }) {
const [query, setQuery] = useState('');
const [onlyShowProducts, setOnlyShowProducts] = useState(false);

const handleChange = () => {
    onChange({
        query,
        onlyShowProducts,
    });
};

useEffect(() => {
    handleChange();
}, [query, onlyShowProducts]);

    return (
        <div className='search-bar-container'>
            <span className='search-bar-label'>Search</span>
            <input 
            value={query}
            onChange={(e) => {
                setQuery(e.target.value);
             }}
            type='text' 
            className='search-bar-input' 
            />

            <div className='search-bar-checkbox-container'>
                <input
             checked={onlyShowProducts}
             onChange={(e) => {
                setOnlyShowProducts(e.target.checked);
             }}
                 type="checkbox"/>
                Only show  products in stock
            </div>
        </div>
    );
}

export default SearchBar;