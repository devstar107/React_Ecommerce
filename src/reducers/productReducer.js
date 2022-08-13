import {
  SET_PRODUCT_DETAILS,
  SET_PRODUCTS,
} from './../actions/product.actions';

const initialState = {
  items: [],
  categories: [],
  product: null,
  itemsLoaded: false,
};

export const productRenducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return { ...state, items: action.payload, itemsLoaded: true };
    }
    case SET_PRODUCT_DETAILS: {
      return { ...state, product: action.payload };
    }
    default:
      return { ...state };
  }
};
