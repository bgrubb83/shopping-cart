import React from 'react';
import ProductImage from './ProductImage';
import { Product, ProductContainerState } from '../Interfaces/interfaces';

class ProductContainer extends React.Component<Product, ProductContainerState> {
    // const { id, title, image, brand, skus } = props;
    state: ProductContainerState = {
        selectedSku: "",
    };

    componentDidMount() {
        console.log(this.props.skus![0] || null);
        if (this.props.skus!.length > 0) {
            this.setState({ selectedSku: this.props!.skus![0].id })
        }


    }

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
                    {this.props.title}
                </section>
            </section>
        )

    }

}

export default ProductContainer;