import React from 'react';
import Button from './Button';
import { sku } from '../Interfaces/interfaces';


const ProductSku = (props: sku) => {
    // console.log(props);
    const { description, id, price, stock } = props;

    const disabled: boolean = stock < 1;

    return (
        <section className={disabled ? "product-sku disabled-text" : "product-sku"}>
            <p>{description}</p>
            <p>qty {stock}</p>
            <p>£{price}</p>
            <Button
                label="Add to cart"
                onClick={() => { console.log('clicked') }}
                disabled={disabled}
            />
        </section>
    )
}

export default ProductSku;