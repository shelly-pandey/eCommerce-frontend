import { Dispatch } from 'redux'
import { Product } from './types'


type GetProducts = {
    type: "GET_PRODUCTS",
    payload: {
        products: Product[]
    }
}

export function getProducts(products: Product[]): ProductActions {
    return {
        type: "GET_PRODUCTS",
        payload: { products }
    }
}


export function fetchProducts() {
    return (dispatch: Dispatch) => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => dispatch(getProducts(data)));
    };
}

type FilteredProductsAction = {
    type: "GET_FILTERED_PRODUCTS",
    payload: {
        keyword: string
    }
}

export function getFilteredProducts(keyword: any): FilteredProductsAction {

    return {
        type: "GET_FILTERED_PRODUCTS",
        payload: {
            keyword
        }
    };
}

type AddToCartAction = {
    type: "ADD_TO_CART",
    payload: { product: Product }
}

export function addToCart(product: Product): AddToCartAction {
    return {
        type: "ADD_TO_CART",
        payload: {
            product,

        }
    }
}

type UpdatePriceAction = {
    type: "UPDATE_PRICE",
    payload: { product: Product, quantity: string }
}

export function updatePrice(product: Product, quantity: string): UpdatePriceAction {
    return {
        type: "UPDATE_PRICE",
        payload: {
            product,
            quantity
        }
    }
}

type DeleteFromCartAction = {
    type: "DELETE_FROM_CART",
    payload: { product: Product }
}


export function deleteFromCart(product: Product): DeleteFromCartAction {
    return {
        type: "DELETE_FROM_CART",
        payload: { product }
    }
}

type DeleteAllFromCart = {
    type: "DELETE_ALL_FROM_CART",
}


export function deleteAllFromCart(): DeleteAllFromCart {
    return {
        type: "DELETE_ALL_FROM_CART",
    }
}

type NavigateFromCartAction = {
    type: "NAVIGATE_FROM_CART",
    payload: { product: Product }
}

export function Navigate(product: Product): NavigateFromCartAction {
    return {
        type: "NAVIGATE_FROM_CART",
        payload: { product }
    }
}

type changeThemeAction = {
    type: "THEME_CHANGE",
    payload: { darktheme: boolean }
}

export function changeTheme(darktheme: boolean): changeThemeAction {
    return {
        type: "THEME_CHANGE",
        payload: { darktheme }
    }
}

type IncreaseQuantityAction = {
    type: "INCREASE_QUANTITY",
    payload: { product: Product }
}

export function updateQuantity(product: Product): IncreaseQuantityAction {
    return {
        type: "INCREASE_QUANTITY",
        payload: { product }
    }
}

type ProductByCategoryAction = {
    type: "PRODUCT_BY_CATEGORY",
    payload: { category: string }
}

export function productByCategory(category: string): ProductByCategoryAction {
    console.log('category ' + category);
    return {
        type: "PRODUCT_BY_CATEGORY",
        payload: { category }
    }
}


export type ProductActions = GetProducts | FilteredProductsAction | DeleteAllFromCart | DeleteFromCartAction | AddToCartAction
    | NavigateFromCartAction | IncreaseQuantityAction | changeThemeAction | ProductByCategoryAction | UpdatePriceAction