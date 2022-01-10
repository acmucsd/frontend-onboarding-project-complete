import React from 'react';
import ItemCard from '../../components/ItemCard';
import Navbar from '../../components/Navbar';
import './style.less';

const items = [
  {
    name: 'TShirt',
    uuid: 'slkdfjds-32492-dsf-132',
    price: 3.4,
    description: 'like its a tshirt. what description do you need?',
  },
  {
    name: 'TShirt',
    uuid: 'slkdfjds-32492-dsf-132',
    price: 3.4,
    description: 'like its a tshirt. what description do you need?',
  },
  {
    name: 'TShirt',
    uuid: 'slkdfjds-32492-dsf-132',
    price: 3.4,
    description: 'like its a tshirt. what description do you need?',
  },
  {
    name: 'TShirt',
    uuid: 'slkdfjds-32492-dsf-132',
    price: 3.4,
    description: 'like its a tshirt. what description do you need?',
  },
  {
    name: 'TShirt',
    uuid: 'slkdfjds-32492-dsf-132',
    price: 3.4,
    description: 'like its a tshirt. what description do you need?',
  },
];

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="items">
        {items.map((item) => (
          <ItemCard key={item.uuid} name={item.name} price={item.price} description={item.description} />
        ))}
      </div>
    </>
  );
};

export default Home;
