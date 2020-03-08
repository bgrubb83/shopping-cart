import React from 'react';
import ProductContainer from '../components/ProductContainer';
import { ShopfrontProps, Product } from '../Interfaces/interfaces';

class Shopfront extends React.Component<ShopfrontProps> {
    render() {
        return (
            <div>
                {this.props.appState.products.length > 0 ?
                    this.props.appState.products.map((product: Product) => {
                        const { id, title, image, brand, skus } = product;
                        return <ProductContainer
                            key={id || String(Date.now())}    
                            title={title}
                            id={id}
                            image={image}
                            brand={brand}
                            skus={skus}
                            addToCart={this.props.addToCart}
                        />
                    })
                    : null}
            </div>
        );
    }
}

export default Shopfront;