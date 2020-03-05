export function addProductSkuToCart(productId: string, skuId: string, cart: any) {
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