import React from 'react';
import ProductRow from '../components/ProductRow.js';


function OrderPage( {products}) {
    return (
        <div>

            <h2>Order Form</h2>
            
            <article>
                    <p>Please look at our products below. If you would like to make a purchase, select ONE.</p>
                    <table id="inventoryTable">
                        <caption>Available Inventory</caption>
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Product</th>
                                <th>Today's Price</th>
                                <th>Choice</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((customerOrder, main) =>
                                <ProductRow
                                    product={customerOrder}
                                    key={main}
                                />
                            )}
                        </tbody>
                    </table>
                
        </article>
        </div>
    );
}

export default OrderPage;