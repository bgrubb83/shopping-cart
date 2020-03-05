import React from 'react';
import ProductImage from './ProductImage';
import ProductSku from './ProductSku';
import { Product, ProductContainerState } from '../Interfaces/interfaces';

class ProductContainer extends React.Component<Product, ProductContainerState> {

    render() {
        return (
            <section className="product-container">
                <section className="product-container-image">
                    <ProductImage
                        image={this.props.image}
                        alt={this.props.title}
                    />
                </section>
                <section className="product-container-content">
                    <h2>{this.props.title}</h2>
                    {this.props.skus?.map((sku) => {
                        const { description, id, price, stock } = sku;
                        return <ProductSku
                            description={description}
                            productId={this.props.id}
                            id={id}
                            price={price}
                            stock={stock}
                            key={id}
                            addToCart={this.props.addToCart}
                        />
                    })}
                </section>
            </section>
        )

    }

}

export default ProductContainer;