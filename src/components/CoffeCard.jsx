/* eslint-disable react/prop-types */

import { BiSolidShow } from "react-icons/bi";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CoffeeCard = ({ coffe, coffece, setCoffece }) => {
  const { _id, name, photo, Category, Taste, supplier, Details } = coffe;
  console.log(coffe);
  console.log(coffece);
  console.log(photo);

  const handleDelete = (_id) => {
    console.log(_id);
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
        console.log(_id);
        fetch(`http://localhost:3000/coffe/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffece.filter((cof) => cof._id !== _id);
              setCoffece(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="bg-base-100 shadow-xl flex rounded-xl">
      <figure>
        <img className=" h-full" src={photo} alt="coffee" />
      </figure>
      <div className="card-body  flex">
        <h2 className="text-xl  text-[#5C5B5B] ">
          <span className="text-[#1B1A1A] font-bold">name:</span>
          {name}
        </h2>
        <h2 className="text-[20px] ">
          <span className="font-bold">Category</span>:{Category}
        </h2>
        <h2 className="text-[20px] ">
          <span className="font-normal">supplier:</span>
          {supplier}
        </h2>
        <h2 className="text-[20px] ">
          <span className="font-normal">Taste:</span>
          {Taste}
        </h2>
        <p className="text-xl ">
          <span className="font-normal">Details:</span>
          {Details}
        </p>
      </div>
      <div className="card-actions justify-center flex flex-col text-center ">
        <button className="bg-[#D2B48C] text-[#FFFFFF] border-none mx-8  rounded-lg">
          <BiSolidShow />
        </button>
        <Link to={`updatecoffe/${_id}`}>
          <button className="text-[#FFFFFF] bg-[#3C393B] border-none mx-8">
            <MdModeEditOutline />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="text-[#FFFFFF] bg-[#EA4744]  border-none mx-8"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
