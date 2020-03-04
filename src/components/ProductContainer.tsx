import React from 'react';
import ProductImage from './ProductImage';
import { Product } from '../Interfaces/interfaces';

const ProductContainer = (props: Product) => {
    const { id, title, image, brand, skus } = props;

    return <section className="product-container">
        <section className="product-container-image">
            <ProductImage
                image={image}
                alt={title}
            />
        </section>
        <section className="product-container-content">
            {props.title}
        </section>
    </section>;
}

export default ProductContainer;