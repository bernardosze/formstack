import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import '../styles/App.css';

import Header from './Header';
import Items from './Items';
import AddItem from './AddItem';

function App() {
  const [items, setItems] = useState([]);

  const handleDeleteItems = () => {
    setItems([]);
  };

  const handleDeleteItem = itemToRemove => {
    setItems(items.filter(item => itemToRemove !== item));
  };

  const handleAddItem = item => {
    if (!item) {
      return 'Enter valid value to add item';
    } else if (items.indexOf(item) > -1) {
      return 'This item already exists';
    }
    setItems(prevState => [...prevState, item]);
  };

  useEffect(() => {
    try {
      const json = localStorage.getItem('items');
      const items = JSON.parse(json);

      if (items) {
        setItems(items);
      }
    } catch (error) {
      // Do NOTHING at all
    }
  }, []);

  useEffect(() => {
    if (items) {
      const json = JSON.stringify(items);
      localStorage.setItem('items', json);
    }
  }, [items]);

  return (
    <Container>
      <Header />
      <div className='widget'>
        <Items
          items={items}
          handleDeleteItems={handleDeleteItems}
          handleDeleteItem={handleDeleteItem}
        />
        <AddItem handleAddItem={handleAddItem} />
      </div>
    </Container>
  );
}

export default App;
