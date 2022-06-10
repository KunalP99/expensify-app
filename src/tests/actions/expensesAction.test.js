import { addExpense, editExpense, removeExpense } from "../../actions/expensesAction";

// REMOVE EXPENSE TEST CASE
test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  // Use toEqual when testing objects
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

// EDIT EXPENSE TEST CASE
test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' } );
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

// ADD EXPENSE TEST CASE
test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: '109500',
    createdAt: 1000,
    note: 'This was last months rent'
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String) // Will expect any string that is passed through 
    }
  });
});

// ADD EXPENSE DEFAULT VALUES TEST CASE
test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: ''
    }
  });
});