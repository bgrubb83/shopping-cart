import React from 'react';
import ProductContainer from '../components/ProductContainer';
import { fetchProducts } from '../utilities/dataHelpers';

import { ShopfrontProps, ShopfrontState, Product } from '../Interfaces/interfaces';

class Shopfront extends React.Component<ShopfrontProps, ShopfrontState> {
    state: ShopfrontState = {
        products: [],
    };

    componentDidMount() {
        const products: object[] = fetchProducts();
        this.setState({ products: products });

    }

    componentDidUpdate() {
        console.log(this.state.products);
    }

    render() {
        return (
            <div>
                <h2>Shopfront</h2>
                {this.state.products.length > 0 ?
                    this.state.products.map((product: Product) => {
                        // console.log(product);
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