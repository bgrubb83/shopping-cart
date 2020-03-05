import React from 'react';
import { CartProductProps } from '../Interfaces/interfaces';
import CartSku from '../components/CartSku';

const CartProduct = (props: CartProductProps) => {
    const { title, skus } = props;

    return (
        <section className="cart-product">
            <h2>{title}</h2>
            {skus.map((sku: any) => {
                console.log(sku);
                return (
                    <CartSku
                    title={sku.description}
                />)
            })}
        </section>
    )
}

export default CartProduct;