// Private

interface brand {
    id: string,
    name: string,
    slug: string,
}

interface sku {
    description: string,
    is: string,
    price: number,
    stock: number,
}

// Public

export interface ShopfrontProps {
    message?: string;
};
export interface ShopfrontState {
    products: object[];
};

export interface Product {
    key?: string,
    title?: string,
    id?: string,
    image?: string,
    brand?: brand,
    skus?: sku[],
}