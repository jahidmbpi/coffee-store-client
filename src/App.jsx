import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeCard from "./components/CoffeCard";

import { useState } from "react";

function App() {
  const coffedata = useLoaderData();
  const [coffece, setCoffece] = useState(coffedata);
  console.log(coffece);
  return (
    <>
      <div></div>
      <div className=" grid md:grid-cols-2 gap-5 w-full ">
        {coffece.map((coffe) => (
          <CoffeCard
            coffe={coffe}
            key={coffe._id}
            coffece={coffece}
            setCoffece={setCoffece}
          ></CoffeCard>
        ))}
      </div>
    </>
  );
}

export default App;
