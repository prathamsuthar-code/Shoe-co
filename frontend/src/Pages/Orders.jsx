import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {

  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchOrders = async () => {

      try {

        const res = await axios.get(
          "http://localhost:8000/api/orders",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        );

        setOrders(res.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchOrders();

  }, []);

  return (

    <div style={{ padding: "40px" }}>

      <h2>My Orders</h2>

      {orders.map(order => (

        <div
          key={order._id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px"
          }}
        >

          <p><strong>Order ID:</strong> {order._id}</p>

          <p><strong>Total:</strong> ${order.totalAmount}</p>

          <p><strong>Status:</strong> {order.status}</p>

          <button
            onClick={() =>
              navigate(`/orders/${order._id}`)
            }
          >
            View Details
          </button>

        </div>

      ))}

    </div>

  );

};

export default MyOrders;