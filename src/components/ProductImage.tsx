import React from 'react';
import { Image } from '../Interfaces/interfaces';

const ProductImage = (props: Image) => {
    const { image, alt } = props;

    return <img
        src={image}
        alt={alt}
        title={alt}
        className="product-image"
    />
}

export default ProductImage;