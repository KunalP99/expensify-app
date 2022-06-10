import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expensesFixture';

// RENDER EXPENSE LIST ITEM TEST CASE
test('should render expense list item correctly', () => {
  const expenseOne = { ...expenses[0] };
  const wrapper = shallow(<ExpenseListItem expenses={expenseOne} />);
  expect(wrapper).toMatchSnapshot();
});