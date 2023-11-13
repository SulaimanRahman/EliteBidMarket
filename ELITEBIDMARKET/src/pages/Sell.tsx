import React from "react";
import { InputText, MessageInput, Button } from "../components";
import { post_auction_image } from "../assets";
const Sell = () => {
  // @ts-ignore
  return (
    <div className="bg-primary w-full h-[100vh] flex justify-between">
      {/* Left Section */}
      <div className="flex flex-col w-full h-full text-selltext lg:p-20 p-10">
        <div className="font-bold text-selltext mb-5 md:hidden flex justify-center">
          Post an Auction
        </div>
        <div className="font-bold w-selltextwidth flex flex-col">
          Turn Your Items into Opportunities
          <span className="text-white">List Your Auction Today!</span>
        </div>
        <div className="flex w-full gap-5 mt-5">
          <div className="text-white font-normal w-full">
            <InputText placeholder="Item Name" />
          </div>
          <div className="text-white font-normal w-full">
            <InputText placeholder="Min Bid" />
          </div>
        </div>
        <div className="text-white font-normal w-full mt-5">
          <InputText placeholder="End Date and TIme" />
        </div>
        <div className="text-white font-normal w-full mt-5">
          <MessageInput placeholder="Item Features" rows={3} />
        </div>
        <div className="text-white font-normal w-full mt-5">
          <MessageInput placeholder="Item Description" rows={3} />
        </div>
        <div className="flex justify-end">
          <div className="w-sendbutton mt-10">
            <Button title="Post" />
          </div>
        </div>
      </div>

      {/* right Section */}
      <div className="font-bold md:flex hidden lg:p-20 p-10 h-full w-full flex-col items-center">
        <div className="flex justify-center text-selltext">Post an Auction</div>

        <div className="flex justify-center w-sellimage">
          <img
            src={post_auction_image}
            className="object-contain"
            alt="sell page image"
          />
        </div>
        <div className="w-selltextwidth font-semibold text-selltext">
          <div className="text-center">
            Unleash Your Items' Potential <br />
            <span className="text-white">Begin Your Auction Journey!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
