import React from 'react';
import ProductContainer from '../components/ProductContainer';

import { ShopfrontProps, ShopfrontState, Product } from '../Interfaces/interfaces';

class Shopfront extends React.Component<ShopfrontProps, ShopfrontState> {

    render() {
        return (
            <div>
                <h2>Shopfront</h2>
                {this.props.appState.products.length > 0 ?
                    this.props.appState.products.map((product: Product) => {
                        const { id, title, image, brand, skus } = product;
                        return <ProductContainer
                            key={id}    
                            title={title}
                            id={id}
                            image={image}
                            brand={brand}
                            skus={skus}
                        />
                    })
                    : null}
            </div>
        );
    }
}

export default Shopfront;