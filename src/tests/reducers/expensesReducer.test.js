import moment from 'moment';
import expensesReducer from '../../reducers/expensesReducer';
import expenses from '../fixtures/expensesFixture';

// SET DEFAULT STATE TEST CASE
test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

// REMOVE EXPENSE BY ID TEST CASE
test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

// ID NOT FOUND FOR REMOVE EXPENSE TEST CASE
test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// ADD EXPENSE TEST CASE
test('should add an expense', () => {
  const expense = {
    id: 4,
    description: 'Water bill',
    note: '',
    amount: 209800,
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

// EDIT EXPENSE TEST CASE
test('should edit an expense', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

// ID NOT FOUND FOR EDIT EXPENSE TEST CASE
test('should not edit expense if id not found', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses]);
});