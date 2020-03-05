import React from 'react';
import Button from './Button';
import { sku } from '../Interfaces/interfaces';


const ProductSku = (props: sku) => {
    const { description, id, price, stock, addToCart } = props;

    const disabled: boolean = stock < 1;

    return (
        <section className={disabled ? "product-sku disabled-text" : "product-sku"}>
            <p>{description}</p>
            <p>qty {stock}</p>
            <p>£{price}</p>
            <Button
                label="Add to cart"
                onClick={() => { addToCart(props.productId, id)} }
                disabled={disabled}
            />
        </section>
    )
}

export default ProductSku;