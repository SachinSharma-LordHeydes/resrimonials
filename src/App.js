import React, { useState } from "react";
import reviews from "./data";
import Title from "./Components/Title";
import Cards from "./Components/Cards";

const App = () => {
  const [testo,setTesto]=useState(reviews[0]);


  return (
    <div  className="">
      <div className="bg-slate-300	 flex flex-col text-center items-center justify-center h-screen">
        <div><Title></Title></div>
        
        <div className="p-3 py-9 bg-white w-3/5 relative">
        <Cards review={reviews} testo={testo} setTesto={setTesto} ></Cards>
        </div>
      </div>
    </div>
  );
};

export default App;
