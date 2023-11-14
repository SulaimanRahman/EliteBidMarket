import React from "react";
import { lamborghini, verified_icon } from "../assets";
import { formatNumber } from "../Helper";

interface ItemProps {
  image: string;
  auctioneerName: string;
  verified: boolean;
  title: string;
  currentBid: string;
  endTime: string;
}

const ListingSold = (props: ItemProps) => {
  const formatDate = (inputString: string): string => {
    const date = new Date(inputString);

    // Ensure the input is a valid date
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }

    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  };

  return (
    <div className="flex flex-col bg-white rounded-lg hover:border-yellow-500 hover:border-[0.5px] border-[0.5px] shadow-custom cursor-pointer">
      {/* Car Image */}
      <div className="flex  min-h-[250px] max-h-[250px]">
        <img
          src={props.image}
          alt="car image"
          className=" rounded-t-lg object-center"
        />
      </div>

      <div className="flex flex-col m-2">
        {/* User Name and Verified Image */}
        <div className="flex text-gray font-bold text-auctioneername pb-1 ">
          {props.auctioneerName}
          <img
            src={verified_icon}
            alt="Verfied Icon"
            className="ml-3 max-w-[20px] h-auto w-auto object-contain"
          />
        </div>

        {/* Car Title */}
        <div className="text-black font-bold text-auctiontitle text-ellipsis whitespace-nowrap overflow-hidden">
          {props.title}
        </div>

        {/* Line */}
        <div className="bg-gray h-[1px] lg:my-5 md:my-4 my-3"></div>

        <div className="flex lg:mb-5 md:mb-4 mb-3">
          {/* Current Bid */}
          <div className="flex flex-col flex-1">
            <div className="text-gray text-auctionsubtitle font-semibold pb-1">
              Sold
            </div>
            <div className="text-black font-bold text-auctioninfo">
              {formatNumber(props.currentBid)}
            </div>
          </div>

          {/* End Time */}
          <div className="flex flex-col flex-1">
            <div className="text-gray text-auctionsubtitle font-semibold pb-1">
              Ended On
            </div>
            <div className="text-black font-bold text-auctioninfo">
              {formatDate(props.endTime)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingSold;
