import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expensesFixture';

let addExpense, history, wrapper;

// Before each test case is executed set these variables 
beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

// RENDER ADD EXPENSE PAGE TEST CASE
test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// HANDLE ONSUBMIT TEST CASE
test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});