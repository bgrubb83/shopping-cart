// Private

interface brand {
    id: string,
    name: string,
    slug: string,
}

// Public

export interface AppProps {

}

export interface AppState {
    cart?: any,
    products?: object[];
}

export interface sku {
    description: string,
    id: string,
    price: number,
    stock: number,
}

export interface ShopfrontProps {
    appState?: any,
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

export interface Image {
    image?: string,
    alt?: string,
    title?: string,
}

export interface ProductContainerState {
    
}

export interface ButtonProps {
    label: string,
    onClick: any,
    disabled: boolean,
}