import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from "../../components/ExpenseList";
import expenses from '../fixtures/expensesFixture';

// RENDER EXPENSE LIST WITH EXPENSES TEST CASE
test('should render ExpenseList with expenses', () => {
  // Rendered component
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  // Snapshot file created, where code will be compared to that file to see if they match
  expect(wrapper).toMatchSnapshot();
}); 

// RENDER EXPENSE LIST WITH EMPTY MESSAGE TEST CASE
test('should render ExpenseList with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});

