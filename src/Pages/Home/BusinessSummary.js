import React from "react";
import { VscPerson } from "react-icons/vsc";
import { BsTools } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import HorizontalLine from "../Shared/HorizontalLine";

const BusinessSummary = () => {
  return (
    <div className="max-w-7xl mx-auto px-12 mt-20 md:mt-32">
        <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold">Business Summary</h1>
        <HorizontalLine></HorizontalLine>
      <div className="stats grid-flow-row md:grid-flow-col shadow w-full">
        <div className="stat text-center bg-primary">
        <span style={{fontSize: "90px"}} className="block mx-auto text-secondary pt-1"><BsCashCoin/></span>
          <h2 className="text-white text-2xl md:text-xl lg:text-3xl font-bold my-2">150M+ Annual revenue</h2>
          <p className="text-white font-semibold">We focus in quality</p>
        </div>

        <div className="stat text-center bg-secondary">
        <span style={{fontSize: "90px"}} className="block mx-auto text-primary mb-2 pt-1"><BsTools/></span>
          <h2 className="text-primary text-2xl md:text-xl lg:text-3xl font-bold my-2">100+ tools</h2>
          <p className="text-primary font-semibold">We focus in quality</p>
        </div>

        <div className="stat text-center bg-primary">
         <span style={{fontSize: "100px"}} className="block mx-auto text-secondary pt-1"><VscPerson/></span>
          <h2 className="text-white text-2xl md:text-xl lg:text-3xl font-bold my-2">200+ customers</h2>
          <p className="text-white font-semibold">We focus in quality</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
