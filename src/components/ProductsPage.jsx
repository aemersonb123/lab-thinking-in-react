import { useState } from 'react';
import jsonData from '../data.json';
import ProductsTable from './ProductsTable';
import SearchBar from './SearchBar';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [query, setQuery] = useState("");
    const handleQueryChange = (state) => {
        setQuery(state.query.toLowerCase().trim())
      };

    return (
        <div className='products-page'>
            <h1 className='page-title'>IronStore</h1>
            <SearchBar onChange={handleQueryChange}/>
            <ProductsTable
             products={ query ? products.filter((product) =>
            product.name.toLowerCase().includes(query)
            )
            : products
            } />
        </div>
    );
}

export default ProductsPage;