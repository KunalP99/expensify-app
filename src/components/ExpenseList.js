import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/visibleExpenses';

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense}/>
        })
      )
    }
  </div>
);

// Higher Order Component
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

// connect(Define things we want to get from the store)(Define component we want to create the connected version of)
// End result is a new component which is our componenet WITH the props from the store
export default connect(mapStateToProps)(ExpenseList);