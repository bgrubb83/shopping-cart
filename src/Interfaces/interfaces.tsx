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
    cartQty: number,
    products?: object[];
}

export interface CartProps {
    appState?: any,
    emptyCart: any,
  };
  
  export interface CartState {
    temp?: any;
  };

export interface sku {
    description: string,
    productId?: string,
    id: string,
    price: number,
    stock: number,
    addToCart: any,
}

export interface ShopfrontProps {
    appState?: any,
    addToCart: any,
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
    addToCart: any,
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
    disabled?: boolean,
}

export interface BadgeProps {
    value?: number,
};

export interface CartProductProps {
    title: string,
    skus: any,
}