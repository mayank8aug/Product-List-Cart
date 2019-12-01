const initialState = {
  filterQuery: '',
  productList: [],
  cartQty: 0,
  cartPrice: 0,
  cartProducts: []
};
let prevCartProducts;
const product = (prevState = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER_QUERY':
      return Object.assign({}, prevState, {
        filterQuery: action.query
      });
    case 'SET_PRODUCT_LIST':
      return Object.assign({}, prevState, {
        productList: action.productList
      });
    case 'ADD_TO_CART':
      const { mrp, skuCode } = action.product;
      prevCartProducts = prevState.cartProducts;
      if (prevCartProducts[skuCode]) {
        prevCartProducts[skuCode] += 1;
      } else {
        prevCartProducts[skuCode] = 1;
      }
      return Object.assign({}, prevState, {
        cartQty: prevState.cartQty + 1,
        cartPrice: prevState.cartPrice + mrp,
        cartProducts: { ...prevCartProducts }
      });
    case 'REMOVE_FROM_CART':
      prevCartProducts = prevState.cartProducts;
      prevCartProducts[action.product.skuCode] -= 1;
      return Object.assign({}, prevState, {
        cartQty: prevState.cartQty - 1,
        cartPrice: prevState.cartPrice - action.product.mrp,
        cartProducts: { ...prevCartProducts }
      });
    default:
      return prevState;
  }
}

export default product;