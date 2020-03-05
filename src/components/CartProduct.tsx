import React from 'react';
// import { ButtonProps } from '../Interfaces/interfaces';

interface CartProductProps {
    title: string,
}

const CartProduct = (props: CartProductProps) => {
    const { title } = props;

return <section>{title}</section>
}

export default CartProduct;