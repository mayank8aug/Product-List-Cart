export const setProductList = productList => ({
  type: 'SET_PRODUCT_LIST',
  productList
});
export const setFilterQuery = query => ({
  type: 'SET_FILTER_QUERY',
  query
});
export const addProductToCart = product => ({
  type: 'ADD_TO_CART',
  product
});
export const removeProductFromCart = product => ({
  type: 'REMOVE_FROM_CART',
  product
});
