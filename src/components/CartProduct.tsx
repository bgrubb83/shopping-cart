import React from 'react';
import CartSku from '../components/CartSku';
import { CartProductProps } from '../Interfaces/interfaces';

const CartProduct = (props: CartProductProps) => {
    const { title, skus, cartProduct, addToCart, productId, removeFromCart } = props;

    return (
        <section className="cart-product">
            <h2>{title}</h2>
            {skus.map((sku: any) => {
                return (
                    <CartSku
                        title={sku.description}
                        qty={cartProduct[sku.id]}
                        stock={sku.stock}
                        price={sku.price}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        productId={productId}
                        skuId={sku.id}
                        key={sku.id}
                    />)
            })}
        </section>
    )
}

export default CartProduct;