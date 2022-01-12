import React, { useContext, useEffect, useState } from 'react';
import { getOrders, Order } from '../../api';
import Navbar from '../../components/Navbar';
import { GlobalContext } from '../../contexts/GlobalContext';
import './style.less';

const YourOrders: React.FC = () => {
  const { apiUrl, user } = useContext(GlobalContext);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (user) {
      getOrders(apiUrl, user.uuid).then((data) => setOrders(data));
    }
  }, []);
  return (
    <>
      <Navbar title="Your Orders" />
      <div className="yourOrders">
        <table>
          <thead>
            <tr>
              <th>order id</th>
              <th>item name</th>
              <th>item price</th>
              <th>ordered at</th>
            </tr>
          </thead>
          {orders.map((order) => (
            <tbody>
              <tr>
                <td>{order.uuid}</td>
                <td>{order.item.name}</td>
                <td>{order.item.price}</td>
                <td>{order.createdAt}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default YourOrders;
