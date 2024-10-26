import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center ">
      <div className=" space-x-8 font-serif font-bold ">
        <Link to="/">Home</Link>
        <Link to="/addCoffe">Add coffe</Link>
        <Link>Login</Link>
        <Link>Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
