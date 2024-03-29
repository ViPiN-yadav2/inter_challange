import React from "react";

const BaseballCard = ({ playerImage, gameInfo, date, location }) => {
  console.log("in baseballcard");
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={playerImage}
            alt="Baseball player"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {gameInfo}
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {date}
          </p>
          <p className="mt-2 text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default BaseballCard;
