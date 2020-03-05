import React from 'react';
import Button from './Button';
import { sku } from '../Interfaces/interfaces';


const ProductSku = (props: sku) => {
    // console.log(props);
    const { description, id, price, stock } = props;

    return (
        <section className="product-sku">
            <p>{description}</p>
            <p>qty {stock}</p>
            <p>£{price}</p>
            <Button
                label="Add to cart"
                onClick={() => { console.log('clicked') }}
                disabled={stock < 1}
            />
        </section>
    )
}

export default ProductSku;