import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
  const newCoffe = useLoaderData();
  console.log(newCoffe);

  const { _id, name, photo, Category, Taste, supplier, Details, quantity } =
    newCoffe;
  console.log(name, _id);

  const handalUpdateCoffe = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const Taste = form.Taste.value;
    const Category = form.Category.value;
    const Details = form.Details.value;
    const photo = form.photo.value;
    const newCoffe = {
      name,
      quantity,
      supplier,
      Taste,
      Category,
      Details,
      photo,
    };
    console.log(newCoffe);
    fetch(`http://localhost:3000/coffe/${_id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffe),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Your coffee has been updated successfully.",
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "There was a problem adding the coffee.",
            icon: "error",
            confirmButtonText: "Try Again",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] px-24 py-10">
      <h2 className="font-extrabold text-3xl text-center text-[#374151]">
        Update Existing Coffee Details{" "}
      </h2>
      <p className="text-center font-bold text-[#1B1A1AB3] py-4">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at <br /> its layout. The point
        of using Lorem Ipsum is that it has a more-or-less normal distribution
        of letters, as <br /> opposed to using Content here.
      </p>
      <form onSubmit={handalUpdateCoffe}>
        <div className="md:flex gap-6 ">
          <div className="form-control md:w-1/2 mb-8">
            <label className="label">
              <span className="label-text">name</span>
            </label>
            <label className="input-group">
              <input
                name="name"
                type="text"
                defaultValue={name}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> avilable quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-6 ">
          <div className="form-control md:w-1/2 mb-8">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={supplier}
                name="supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mb-8">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="Taste"
                defaultValue={Taste}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex gap-6 ">
          <div className="form-control md:w-1/2 mb-8">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="Category"
                defaultValue={Category}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mb-8">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="Details"
                defaultValue={Details}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control md:w-full mb-8">
          <label className="label">
            <span className="label-text">photo</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <input
          type="submit"
          value="Update coffe "
          className="btn bg-black w-full text-white rounded-lg font-extrabold text-2xl text-center"
        />
      </form>
    </div>
  );
};

export default UpdateCoffe;
