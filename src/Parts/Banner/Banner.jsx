import React from "react";
import { BiPlus } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="flex items-center justify-center flex-col space-y-10 pb-10 border-b border-b-[#E9E9E9]">
      <div className="text-center space-y-4 flex items-center justify-center flex-col">
        <h1 className="text-3xl leading-tight sm:text-5xl font-bold text-[#1F2937]">
          Friends to keep close in your life
        </h1>
        <p className="max-w-2xl text-gray-500">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-green-900 text-white text-base mt-4">
          <BiPlus></BiPlus> Add a Friend
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-8 rounded-lg space-y-2 shadow-[0px_1px_6px_rgba(0,0,0,0.2)] text-center">
          <h2 className="text-3xl font-bold">10</h2>
          <h2>Total Friends</h2>
        </div>
        <div className="p-8 rounded-lg space-y-2 shadow-[0px_1px_6px_rgba(0,0,0,0.2)] text-center">
          <h2 className="text-3xl font-bold">3</h2>
          <h2>On Track</h2>
        </div>
        <div className="p-8 rounded-lg space-y-2 shadow-[0px_1px_6px_rgba(0,0,0,0.2)] text-center">
          <h2 className="text-3xl font-bold">6</h2>
          <h2>Need Attention</h2>
        </div>
        <div className="p-8 rounded-lg space-y-2 shadow-[0px_1px_6px_rgba(0,0,0,0.2)] text-center">
          <h2 className="text-3xl font-bold">12</h2>
          <h2>Interactions This Month</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
