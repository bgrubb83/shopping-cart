import React from 'react';
// import { CartSkuProps } from '../Interfaces/interfaces';
import { calculatePrice } from '../services/productFunctions';
import Button from './Button';

interface CartSkuProps {
    title?: string,
    qty: number,
    price: number,
    stock: number,
    addToCart: any,
    productId: string,
    skuId: string,
}

const CartSku = (props: CartSkuProps) => {
    const { title, price, qty, stock, addToCart, productId, skuId } = props;

    return <section className="cart-sku">
        <p>{title}</p>
        <section className="cart-sku-qty-container">
            <Button
            className="margin-right"
            label="-"
            onClick={()=> {}}
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