export const SET_PRODUCT_DETAILS = 'Set product details';
export const SET_PRODUCTS = 'Set products';

const fetchData = async url => {
  const BASE_URL = 'http://localhost:4001';

  try {
    const result = await fetch(`${BASE_URL}${url}`);
    return await result.json();
  } catch (error) {
    throw error;
  }
};
export const fetchProducts = () => {
  return async dispatch => {
    try {
      const products = await fetchData('/products');
      if (products) return dispatch({ type: SET_PRODUCTS, payload: products });
    } catch (error) { }
  };
};

export const setProductDetails = productDetails => {
  return { type: SET_PRODUCT_DETAILS, payload: productDetails };
};

export const fetchProductDetails = id => {
  return async dispatch => {
    try {
      const productDetails = await fetchData(`/products/${id}`);
      if (productDetails) return dispatch(setProductDetails(productDetails));
    } catch (error) { }
  };
};

