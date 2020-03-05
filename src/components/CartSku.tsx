import React from 'react';
// import { CartSkuProps } from '../Interfaces/interfaces';

interface CartSkuProps {
    title?: string,
}

const CartSku = (props: CartSkuProps) => {
    const { title } = props;

return <section>{title}</section>
}

export default CartSku;