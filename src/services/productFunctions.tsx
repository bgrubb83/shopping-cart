export function findById(id: string, collection: any) {
    return collection.find((item: any) => {
        return item.id === id;
    })
}

export function findProductTitle(productId: string, products: any) {
    const product = findById(productId, products);
    return product.title;
}

export function findProductSkus(productId: string, products: any, cartProduct: object[]) {
    console.log(cartProduct);
    const product = findById(productId, products);
    return product.skus.filter((sku) => {
        console.log(sku);
        return cartProduct[sku.id];
    });
}