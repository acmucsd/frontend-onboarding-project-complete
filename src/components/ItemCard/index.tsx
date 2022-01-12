import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { deleteItem, orderItem } from '../../api';
import { GlobalContext } from '../../contexts/GlobalContext';
import Button from '../Button';
import './style.less';

interface ItemCardProps {
  name: string;
  price: number;
  description: string;
  uuid: string;
}
const ItemCard: React.FC<ItemCardProps> = ({ name, price, description, uuid }) => {
  const { loggedIn, apiUrl, user } = useContext(GlobalContext);
  const history = useHistory();
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

      <p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className="button-link"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            deleteItem(apiUrl, uuid);
            history.go(0);
          }}
        >
          i don&apos;t like this, delete
        </a>
      </p>

      <Button
        text="Order Item"
        onClick={() => {
          if (user) {
            orderItem(apiUrl, user.uuid, uuid);
          }
        }}
        enabled={loggedIn}
      />
    </div>
  );
};

export default ItemCard;
