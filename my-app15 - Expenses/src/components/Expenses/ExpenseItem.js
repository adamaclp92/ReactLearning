import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title)

  const DeleteItemById = () => {
      const deletingItemId = {
        id: props.id
      }
     props.onDeleteItemById(deletingItemId)
  }


  return (
    <li>
      <Card className='expense-item container'>
        <div className='row'>
          <ExpenseDate date={props.date} />
          <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>{props.amount} Ft</div>
            <button className='expense-item__delete btn btn-danger'
                    onClick={DeleteItemById}>Törlés</button>
          </div>
        </div>
      </Card>
    </li>

  );
}

export default ExpenseItem;