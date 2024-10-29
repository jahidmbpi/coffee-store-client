import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./provider/Authprovider";
import { useNavigate } from "react-router-dom";

const SingIn = () => {
  const { logIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const handeleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    console.log(logIn);

    logIn(email, password)
      .then((Result) => {
        const user = Result.user;
        console.log(user);
        console.log("user log in succesfully");
        Swal.fire({
          icon: "success",
          title: "Cool..",
          text: "logIn successfully",
        });

        navigate("/");
      })
      .catch((erro) => {
        const err = erro.message;
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Opps..",
          text: "Please try again",
        });
      });
  };
  return (
    <div className=" w-full">
      <div className="w-[35%] m-auto p-4 mt-[100px] border rounded-lg bg-zinc-200 ">
        <h2 className="text-center text-3xl font-serif">Please Singh In</h2>
        <form onSubmit={handeleLogIn}>
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

          <div className="mt-6">
            <button className="btn join-item w-full bg-green-600">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingIn;
