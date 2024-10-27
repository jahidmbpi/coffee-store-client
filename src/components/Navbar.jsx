import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center ">
      <div className=" space-x-8 font-serif font-bold ">
        <Link to="/">Home</Link>
        <Link to="/addCoffe">Add coffe</Link>
        <Link to="/login">Login</Link>
        <Link to="/registation">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
