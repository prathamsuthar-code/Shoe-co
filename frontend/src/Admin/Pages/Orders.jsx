import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Orders = () => {

  const [orders,setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{

    axios.get("http://localhost:8000/api/admin/orders")
      .then(res => setOrders(res.data));

  },[]);

  return (

    <div>

      <h2>Orders</h2>

      {orders.map(order => (

        <div key={order._id} style={{border:"1px solid #ccc",padding:"10px",marginBottom:"10px"}}>

          <p>{order._id}</p>

          <p>${order.totalAmount}</p>

          <button onClick={()=>navigate(`/admin/orders/${order._id}`)}>
            View
          </button>

        </div>

      ))}

    </div>
  );
};

export default Orders;