import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import './style.css';

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Filter />
          <ProductList />
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
