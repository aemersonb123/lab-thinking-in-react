import React from 'react';
import ProductRow from './ProductRow';
function ProductsTable({ products}) {

    return (
        <table className='products-table'>
            <tr className='products-table-name'>
            <th> Name</th>
            <th>Price</th>
            </tr>
            {products.map((product) => (
               <ProductRow product={product} />
            ))}
        </table>    
    
    );
}

export default ProductsTable;