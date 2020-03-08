import React from 'react';
import Button from './Button';
import { calculatePrice } from '../services/productFunctions';
import { CartSkuProps } from '../Interfaces/interfaces';

const CartSku = (props: CartSkuProps) => {
    const { title, price, qty, stock, addToCart, productId, skuId, removeFromCart } = props;

    return <section className="cart-sku">
        <p>{title}</p>
        <section className="cart-sku-qty-container">
            <Button
            className="margin-right"
            label="-"
            onClick={()=> {removeFromCart(productId, skuId)}}
            />
            <p>qty {qty}</p>
            <Button
            className="margin-left"
            label="+"
            onClick={() => {addToCart(productId, skuId)}}
            disabled={stock < 1}
            />
        </section>
        <p> x £{price}</p>
        <p> =£{calculatePrice(price, qty)}</p>
    </section>
}

export default CartSku;