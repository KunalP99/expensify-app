// Expenses Reducer
const expensesReducerDefaultState = [];

// The state param is the old state 
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id); 
    case 'EDIT_EXPENSE':
      return state.map((expense) => { // Removes id if the state id (expense) = action id
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default: 
      return state;
  }
};