import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import Button from '../Button';
import './style.less';

interface ItemCardProps {
  name: string;
  price: number;
  description: string;
}
const ItemCard: React.FC<ItemCardProps> = ({ name, price, description }) => {
  const { loggedIn } = useContext(GlobalContext);

  return (
    <div className="itemCard">
      <div className="itemCard-header">
        <span className="itemCard-header-itemName">{name}</span>
        <span className="itemCard-header-price">
          {price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </span>
      </div>
      <p>{description}</p>

      <Button text="Order Item" onClick={() => {}} enabled={loggedIn} />
    </div>
  );
};

export default ItemCard;
