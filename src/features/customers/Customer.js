import { useSelector } from "react-redux";

function Customer() {
  const fullName = useSelector((state) => state.customer.fullName);
  console.log(fullName);
  return <h2>👋 Welcome, %NAME%</h2>;
}

export default Customer;
