import React from 'react';
import { Link } from 'react-router-dom';

// Export a stateless functional component 
// Render the description, amount and createdAt from expenses

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
);

// Gives us access to dispatch props
export default ExpenseListItem;