import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expensesAction';
import { setTextFilter } from './actions/filtersAction';
import getVisibleExpenses from './selectors/visibleExpenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

// Gives us access to functions like dispatch, subscribe, getState etc.
const store = configureStore();

// Provider allows all of the components to have access to the store
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
