import React, { useEffect, useState, useRef } from 'react';
import { Button, FormGroup, Input, Label, ListGroup } from 'reactstrap';

import Item from './Item';

const Items = props => {
  const [sort, setSort] = useState(false);
  let sortedList = props.items.reverse();

  const handleSortList = () => {
    setSort(!sort);
  };

  const handleRenderList = list =>
    list.map((item, index) => (
      <Item
        key={item}
        itemText={item}
        count={index + 1}
        handleDeleteItem={props.handleDeleteItem}
      >
        {item}
      </Item>
    ));
  useEffect(() => {
    // sortedList = props.items.reverse();
    console.log(sort);
    console.log(props.items);
  });

  return (
    <div className='items'>
      <div className='items-header'>
        <h3 className='items-header__title'>Items</h3>
        <FormGroup check>
          <Label check>
            <Input type='checkbox' name='sort' onChange={handleSortList} />
            Reverse sorting
          </Label>
        </FormGroup>
        <Button color='danger' onClick={props.handleDeleteItems}>
          Remove All
        </Button>
      </div>
      {props.items.length === 0 && (
        <p className='items__message'>Please add a item to get started</p>
      )}
      <ListGroup>
        {!sort ? handleRenderList(sortedList) : handleRenderList(props.items)}
      </ListGroup>
    </div>
  );
};

export default Items;
