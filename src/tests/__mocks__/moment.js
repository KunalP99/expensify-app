// Creating a mock for ExpenseForm to use fake data (in this case, the date/time) to allow for the tests to run smoothly

const moment = jest.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};