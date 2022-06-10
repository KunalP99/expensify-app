import moment from 'moment';
import { 
  setStartDate, 
  setEndDate, 
  sortByDate, 
  sortByAmount, 
  setTextFilter 
} from "../../actions/filtersAction";

// START DATE TEST CASE
test('should generate set start date object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

// END DATE TEST CASE
test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

// SORT BY DATE TEST CASE
test('should generate sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

// SORT BY AMOUNT TEST CASE
test('should generate sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

// SET TEXT FILTER TEST CASE
test('should generate set text filter action object with text value', () => {
  const text = 'date';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: text
  });
});

// SET TEXT FILTER WITH NO VALUE TEST CASE
test('should generate set text filter action object with no value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
}); 