import moment from 'moment';
import visibleExpenses from "../../selectors/visibleExpenses";
import expenses from "../fixtures/expensesFixture";

// FILTER BY TEXT VALUE TEST CASE
test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = visibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

// FILTER BY START DATE TEST CASE
test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = visibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

// FILTER BY END DATE TEST CASE
test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  };
  const result = visibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

// SORT BY DATE TEST CASE 
test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = visibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

// SORT BY AMOUNT TEST CASE
test('should sorty by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount', 
    startDate: undefined,
    endDate: undefined
  };
  const result = visibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});