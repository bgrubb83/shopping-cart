import product from '../data/product.json';

export function fetchProducts() {
    console.log('fetched these', product);
    return product;
}