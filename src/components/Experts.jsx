import React from "react";
import Computer from '../components/img/Computer.png'
const Experts = () => {
  return (
    
      <div className="max-w-[1050px] p-2  mt-[40px]   mx-auto md:grid grid-cols-2">
        <div className="  grid col-span-1 text-center md:w-[80%] mt-[50px]">
          <img className="" src={Computer} alt="" />
        </div>
        <div className="  col-span-1 flex flex-col justify-center">
            <h1 className="text-2xl text-[#00df9a] text-justify font-bold ">Learn From Experts</h1>
            <p className="mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita impedit atque non provident facere nobis nulla delectus, quo, amet aperiam quibusdam deserunt tempora quos. Delectus dolorem debitis ea officiis sint?</p>
            <button className="bg-black text-white w-[30%] p-2 mt-2  rounded">Get Started</button>
        </div>
        
      </div>
    
  );
};

export default Experts;
