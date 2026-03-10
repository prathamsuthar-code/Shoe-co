import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

const OrderDetails = () => {

  const {id} = useParams();

  const [order,setOrder] = useState(null);

  useEffect(()=>{

    axios.get(`http://localhost:8000/api/admin/orders/${id}`)
      .then(res => setOrder(res.data));

  },[id]);

  if(!order) return <p>Loading...</p>;

  return (

    <div>

      <h2>Order Details</h2>

      <p>ID: {order._id}</p>

      <p>Status: {order.status}</p>

      <p>Total: ${order.totalAmount}</p>

      <h3>Items</h3>

      {order.items.map(item => (

        <div key={item._id}>
          {item.product.name} - Qty {item.quantity}
        </div>

      ))}

    </div>
  );
};

export default OrderDetails;