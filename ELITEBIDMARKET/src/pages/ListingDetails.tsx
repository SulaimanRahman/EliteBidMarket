import React from "react";
import { Listing, Footer, Filter } from "../components";
import {
  lamborghini,
  filter_icon,
  verified_icon,
  instagram_icon,
  twitter_icon,
  facebook_icon,
} from "../assets";

const ListingDetails = () => {
  const features: string =
    "Year: 2016\n\nMake: Lamborghini\nModel: Model:Huracán\nMileage: 29,000\nEngine: Engine: 5.2-liter V10\nTransmission: [Insert TransmissionType]\nExterior Color: Gray\nInterior Color: White\nTop Speed: 250 MPG\n0-60 MPH: 1.3s";

  const description =
    "This Lamborghini Huracán is a true work of art. Its sleek, aerodynamic design is paired with a roaring 5.2-liter V10 engine that produces exhilarating power. With advanced technology and precision craftsmanship, it's a statement of elegance and performance. Impeccably maintained, this car is in pristine condition and has been cherished by its owner. It's a head-turner wherever it goes, and it's ready to deliver an unforgettable driving experience.";
  return (
    <div className="bg-primary flex flex-col gap-5 h-full">
      <div className="flex md:flex-row flex-col w-full md:gap-5 md:p-10 p-5 md:mt-0 mt-2">
        {/* Top Left Section */}
        <div className="flex w-full rounded-lg">
          <img
            src={lamborghini}
            alt="car image"
            className="rounded-lg object-cover"
          />
        </div>

        {/* Top Right Section */}
        <div className="flex flex-col w-full md:m-0 mt-5 text-medium font-semibold">
          <div className="text-subtitle font-bold">
            2016 Lamborghini Huracán
          </div>
          <div className="flex text-medium text-gray font-semibold gap-2 items-center">
            <div>Thomas Jerry</div>
            <div>
              <img
                src={verified_icon}
                alt="verification icon"
                className="max-w-[30px] object-contain"
              />
            </div>
          </div>
          <div className="mt-5">Current Bid: $1,900,300</div>
          <div className="mt-1">Time Left: 01:29:35</div>
          <div className="mt-1">Min Next Bid: 1,900,400</div>
          <div className="my-10 flex items-center gap-3">
            <div>Enter your Bid: </div>
            <div className="w-detailInputText rounded-lg">
              <input
                placeholder="Enter Your bid"
                className="bg-white placeholder:text-placeholder rounded-lg h-[50px] md:placeholder:px-3 placeholder:px-1 w-full align-text-top"
              />
            </div>
          </div>
          <div className="font-normal">
            <span className="font-bold">You</span> are currently winning this
            bid
          </div>

          {/* Delete Button */}
          <div className="mt-10 w-deleteButton">
            <div className="bg-red text-white hover:bg-lightred text-center text-medium font-bold md:px-button py-3 rounded-xl cursor-pointer">
              Delete Post
            </div>
          </div>
        </div>
      </div>

      {/* Features and Description */}
      <div className="flex md:flex-row flex-col text-medium md:mt-0 mt-5 md:p-10 p-5 ">
        <div className="flex flex-col w-full">
          <div className="font-bold">Key Features:</div>
          <div className="font-semibold mt-5">{features}</div>
        </div>
        <div className="flex flex-col w-full md:mt-0 mt-5">
          <div className="font-bold">Description:</div>
          <div className="font-semibold mt-5">{description}</div>
        </div>
      </div>

      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
};

export default ListingDetails;
