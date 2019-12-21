import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input } from 'reactstrap';

const AddItem = props => {
  const [error, setError] = useState(undefined);

  const handleAddItem = e => {
    e.preventDefault();
    console.log('testing');
    console.log(e.target.item.value.trim());
    const item = e.target.item.value.trim();
    const validation = props.handleAddItem(item);
    setError(validation);

    if (!error) {
      e.target.item.value = '';
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <Form onSubmit={handleAddItem}>
        <FormGroup className='form-input' row>
          <Col sm={10}>
            <Input type='text' name='item'></Input>
          </Col>
          <Button color='primary'>Add Item</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default AddItem;
