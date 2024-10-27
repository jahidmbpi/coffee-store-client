import { useContext } from "react";

import { AuthContext } from "./provider/Authprovider";
// import axios from "axios";

const SingUp = () => {
  const { createUser } = useContext(AuthContext);
  const handelRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confrimpassword.value;
    console.log(email, password);
    console.log(createUser);

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        fetch("http://localhost:3000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

        console.log("user create succesfully");
      })
      .catch((error) => {
        console.log("Error code:", error.code);
        console.log("Error message:", error.message);
      });
  };
  return (
    <div className=" w-full">
      <div className="w-[35%] m-auto p-4 mt-[100px] border rounded-lg bg-zinc-200 ">
        <h2 className="text-center text-3xl font-serif">Please Register</h2>
        <form onSubmit={handelRegister}>
          <div className=" justify-center  ">
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="email"
                placeholder="enter your email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className=" justify-center  ">
            <label className="label">
              <span className="label-text">password</span>
            </label>
            <label className="input-group">
              <input
                type="password"
                name="password"
                placeholder="enter your password"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className=" justify-center  ">
            <label className="label">
              <span className="label-text"> confrim password</span>
            </label>
            <label className="input-group">
              <input
                type="password"
                name="confrimpassword"
                placeholder="confrim password"
                className="input input-bordered w-full"
              />
            </label>
            <div className="mt-6">
              <button className="btn join-item w-full bg-green-600">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
