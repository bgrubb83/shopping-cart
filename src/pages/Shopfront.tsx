import React from 'react';
import { fetchProducts } from '../utilities/dataHelpers';

interface ShopfrontProps {
    message?: string;
};
interface ShopfrontState {
    products: object[];
};
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
            </div>
        );
    }
}

export default Shopfront;