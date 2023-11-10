import React from "react";
import { InputText, MessageInput, Button } from "../components";

const Sell = () => {
  return (
    <div className="bg-primary flex justify-around p-10 text-subtext">
      {/* Left Section */}
      <div className="flex flex-col w-full h-full">
        <div className="font-bold w-[660px]">
          Turn Your Items into Opportunities{" "}
          <span className="text-white">List Your Auction Today!</span>
        </div>
        <div className="flex w-full gap-5">
          <div className="text-white w-full">
            <InputText placeholder="Item Name" />
          </div>
          <div className="text-white font-normal w-full">
            <InputText placeholder="Min Bid" />
          </div>
        </div>
        <div>
          <InputText placeholder="End Date and TIme" />
        </div>
        <div>
          <MessageInput placeholder="Item Features" rows={3} />
        </div>
        <div>
          <MessageInput placeholder="Item Description" rows={3} />
        </div>
        <div className="flex justify-end">
          <div className="w-sendbutton">
            <Button title="Post" />
          </div>
        </div>
      </div>

      {/* right Section */}
      <div className="flex w-full h-full">Post an action</div>
    </div>
  );
};

export default Sell;
