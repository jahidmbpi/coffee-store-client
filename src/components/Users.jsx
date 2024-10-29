import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);
  console.log(loadedUser);
  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaingUser = users.filter((user) => user._id !== id);
              setUsers(remaingUser);
              Swal.fire({
                title: "Deleted!",
                text: "User been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="flex m-auto items-center justify-center">
      <div className="w-full text-center ">
        <table className="table mx-auto">
          <thead>
            <tr className=" text-center">
              <th>email</th>
              <th>creation date</th>
              <th>id</th>
              <th>action</th>
            </tr>
          </thead>

          {users.map((user) => (
            <tbody key={user._id}>
              <tr className="text-center">
                <td className="justify-between">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td>{user.creationbDate}</td>
                <td>{user._id}</td>
                <td onClick={() => handelDelete(user._id)} className="btn">
                  X
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Users;
