import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


// Export a stateless functional component 
// Render the description, amount and createdAt from expenses

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount / 100).format('$0,0.00')}
      - 
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

// Gives us access to dispatch props
export default ExpenseListItem;