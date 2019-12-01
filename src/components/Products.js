import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../actions';
import './Products.css';

function addToCart(product, dispatch) {
  dispatch(addProductToCart(product));
}
function removeFromCart(product, dispatch) {
  dispatch(removeProductFromCart(product));
}
const Products = React.memo(props => {
  const { products } = props
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.product.cartProducts);
  let productAdded;
  return (
    <div className="product-list">
      {
        products.map(product => {
          const { skuCode, productName, mrp, productImages = [] } = product;
          productAdded = cartProducts[skuCode] > 0;
          return (
            <div className="product" key={skuCode}>
              {
                productImages[0] && productImages[0].name &&
                <div className="product-img">
                  <img src={productImages[0].name} alt="product" />
                </div>
              }
              <div className="product-name">{productName}</div>
              <div className="product-price">Rs. {mrp}</div>
              {
                productAdded ?
                  <div>
                    <button className="product-add" onClick={() => { removeFromCart(product, dispatch) }}>-</button>
                    {cartProducts[skuCode]}
                    <button className="product-remove" onClick={() => { addToCart(product, dispatch) }}>+</button>
                  </div> :
                  <button className="product-add" onClick={() => { addToCart(product, dispatch) }}>ADD</button>
              }
            </div>
          )
        })
      }
    </div>
  );
});

export default Products;
