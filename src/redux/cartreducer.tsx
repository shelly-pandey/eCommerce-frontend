import { Product } from './types'
import { ProductActions } from './actions'

type InitialState = {
  product: Product[],
  cartProducts: Product[],
}

const initialState: InitialState = {
  product: [],
  cartProducts: []
};


export default function cartreducer(state = initialState, action: ProductActions): InitialState {

  switch (action.type) {
    case "ADD_TO_CART": {
      console.log('state.cartProducts ' + state.cartProducts)
      console.log('action.payload.movie.title ' + action.payload.product.title)
      let cartItems = state.cartProducts.map(product => product && product.title);
      action.payload.product.quantity = 1;

      return {
        ...state,
        cartProducts: cartItems.includes(action.payload.product.title) ? state.cartProducts : [...state.cartProducts, action.payload.product],
      }

    }

    case "UPDATE_PRICE": {
      let cartItems = state.cartProducts;

      for (const item of cartItems) {
        if (action.payload.product.id === item.id) {
          item.quantity = parseInt(action.payload.quantity)
          
        }
      }

      return {
        ...state,
        cartProducts: cartItems
      }

    }

    case "DELETE_ALL_FROM_CART": {
      return {
        ...state, cartProducts: [],
      };
    }

    case "DELETE_FROM_CART": {
      let cartItems = state.cartProducts.filter(product => product.title !== action.payload.product.title);

      return {
        ...state,
        cartProducts: cartItems
      }

    }
 

    default:
      return state;
  }
}