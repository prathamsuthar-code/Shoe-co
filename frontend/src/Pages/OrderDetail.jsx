import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const OrderDetails = () => {

  const { id } = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {

    const fetchOrder = async () => {

      try {

        const res = await axios.get(
          `http://localhost:8000/api/orders/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        );

        setOrder(res.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchOrder();

  }, [id]);

  if (!order) return <p>Loading...</p>;

  return (

    <div style={{ padding: "40px" }}>

      <h2>Order Details</h2>

      <p><strong>Order ID:</strong> {order._id}</p>

      <p><strong>Status:</strong> {order.status}</p>

      <p><strong>Total:</strong> ${order.totalAmount}</p>

      <h3>Products</h3>

      {order.items.map(item => (

        <div key={item._id}>

          <p>{item.product.name}</p>
          <p>Qty: {item.quantity}</p>
          <p>Price: ${item.price}</p>

        </div>

      ))}

    </div>

  );

};

export default OrderDetails;