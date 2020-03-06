import React from 'react';
import { CartProductProps } from '../Interfaces/interfaces';
import CartSku from '../components/CartSku';

const CartProduct = (props: CartProductProps) => {
    const { title, skus, cartProduct, addToCart, productId } = props;

    return (
        <section className="cart-product">
            <h2>{title}</h2>
            {skus.map((sku: any) => {
                console.log(sku);
                return (
                    <CartSku
                    title={sku.description}
                    qty={cartProduct[sku.id]}
                    stock={sku.stock}
                    price={sku.price}
                    addToCart={addToCart}
                    productId={productId}
                    skuId={sku.id}
                    key={sku.id}
                />)
            })}
        </section>
    )
}

export default CartProduct;