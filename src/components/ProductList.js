import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProductList } from '../actions';
import axios from 'axios';
import Products from './Products';

const ProductList = React.memo(() => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData(dispatch) {
      const result = await axios('http://www.mocky.io/v2/5b3de5ed310000db1f6de257');
      const { productList } = result.data.responseData;
      setProducts(productList);
      dispatch(setProductList(productList));
    }
    fetchData(dispatch);
  }, []);
  
  let filterQuery = useSelector(state => state.product.filterQuery);
  let filteredProducts;
  if (filterQuery) {
    filterQuery = filterQuery.toLowerCase();
    filteredProducts = products.filter(product => {
      return product.productName.toLowerCase().includes(filterQuery);
    });
  }

  return (
    <Products products={filterQuery ? filteredProducts : products} />
  );
});

export default ProductList;