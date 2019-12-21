import React from 'react';
import { Button, ListGroupItem } from 'reactstrap';

const Item = props => (
  <ListGroupItem className='item'>
    <p className='item__text'>
      {props.count}. {props.itemText}
    </p>
    <Button
      outline
      color='danger'
      onClick={e => {
        props.handleDeleteItem(props.itemText);
      }}
    >
      Remove
    </Button>
  </ListGroupItem>
);

export default Item;
