import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expensesFixture';

let wrapper, editExpense, removeExpense, history;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[1]} />);
});

// RENDER EDIT EXPENSE PAGE TEST CASE
test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// HANDLE EDIT EXPENSE TEST CASE
test('should handle EditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

// HANDLE REMOVE EXPENSE TEST CASE
test('should handle RemoveExpense' , () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({
    id: expenses[1].id
  });
});