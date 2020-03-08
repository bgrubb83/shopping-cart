export function findById(id: string, collection: any): any {
    return collection.find((item: any) => {
        return item.id === id;
    })
}

export function findProductTitle(productId: string, products: any): any {
    const product = findById(productId, products);
    return product.title;
}

export function findProductSkus(productId: string, products: any, cartProduct: object[]): any {
    const product = findById(productId, products);
    return product.skus.filter((sku) => {
        return cartProduct[sku.id];
    });
}

export function addProductSkuToCart(productId: string, skuId: string, cart: any): any {
    const productInCart = cart[productId];
    let qtyInCart: number;
    if (productInCart && productInCart[skuId]) {
        qtyInCart = productInCart[skuId];
    } else {
        qtyInCart = 0;
    }
    const updatedProduct = { ...productInCart }
    updatedProduct[skuId] = qtyInCart + 1;
    const newCart = { ...cart }
    newCart[productId] = updatedProduct;
    return newCart;
}

export function removeProductSkufromCart(productId: string, skuId: string, cart: any): any {
    const productInCart = cart[productId];
    let qtyInCart: number;
    if (productInCart && productInCart[skuId]) {
        qtyInCart = productInCart[skuId];
    } else {
        qtyInCart = 0;
    }
    const updatedProduct = { ...productInCart }
    let newCart;
    if (updatedProduct[skuId] > 1) {
        updatedProduct[skuId] = qtyInCart - 1;
        newCart = { ...cart }
        newCart[productId] = updatedProduct;
    } else {
        newCart = { ...cart }
        delete newCart[productId][skuId];
        if (Object.keys(newCart[productId]).length === 0) {
            delete newCart[productId];
        }
    }
    return newCart;
}

export function calculatePrice(price: number, quantity: number): number {
    return price * quantity;
}