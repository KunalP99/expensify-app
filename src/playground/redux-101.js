import { createStore } from 'redux';

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

// Grabbing decrementBy, defaulting to 1 if no number is passed
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
type: 'RESET'
});

// Reducers 
// 1. Reducers are pure functions (Output is only determined by the input)
// 2. Never change state or action

// Not a pure function as it uses global variable (outside of reducer scope)
// let a = 10;
// const add = (b) => {
//   return a + b;
// };

const countReducer = (state = { count: 0 }, action) => {
  // Swtich cases provide for easier readability then if statements
  switch (action.type) {
    case 'INCREMENT': 
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
      case 'SET':
        return {
          count: action.count
        }
    case 'RESET':
      return {
        count: 0
      }
    default: 
      return state;
  }
}

// Redux State Container
// 'state' is the default state object
const store = createStore(countReducer);

// This function, inside subscribe gets called every time the store changes
// The return value essentially stops the function whenever called
const unsubscribe = store.subscribe(() => {
  // Fetch the current state 'getState'
  console.log(store.getState());
}); 

// Actions - an object that gets sent to the store
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({ count: 101 }));