import React, { useState, useEffect, useRef } from "react";
import { Listing, Footer, Filter, CountdownTimer } from "../components";
import {
  lamborghini,
  filter_icon,
  verified_icon,
  instagram_icon,
  twitter_icon,
  facebook_icon,
} from "../assets";
import { useParams } from "react-router-dom";

import { getCurrentDateTime, postBid, deletePost } from "../Helper";

interface Car {
  id: number;
  name: string;
  features: string;
  description: string;
  posted_by: string;
  imageURL: string;
  endTime: string;
  username: string;
  num_of_bids: string;
  last_bidder_name: string;
  last_bidding_amount: string;
  minBidPrice: string;
}

interface PostBidInterface {
  amount: Number;
  timestamp: string;
  carID: Number;
}

const ListingDetails = () => {
  const newBid = useRef<HTMLInputElement>(null);

  const { id } = useParams();
  const [car, setCar] = useState<Car>();
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [auctionExpired, setAuctionExpired] = useState(false);
  const [userIsTheOwner, setUserIsTheOwner] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user-token")) {
      console.log("User is logged in");
      setUserIsLoggedIn(true);
    }

    const ALL_CARS = import.meta.env.VITE_ALL_CARS;
    fetch(ALL_CARS)
      .then((response) => response.json())
      .then((auctions) => {
        console.log(auctions);

        const selectedCar: Car = auctions.find(
          (car: Car) => car.id === Number(id)
        );
        console.log("Printing the complete object:");
        console.log(selectedCar);
        console.log(selectedCar?.last_bidding_amount);
        setCar(selectedCar);

        if (selectedCar.username == localStorage.getItem("user-email")) {
          setUserIsTheOwner(true);
        }

        const now = new Date();
        const end = new Date(selectedCar.endTime);
        const timeDifference = end.getTime() - now.getTime();

        if (timeDifference <= 0) {
          setAuctionExpired(true);
        }
      });
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed");
      postBidFunction();
    }
  };

  const deleteCar = () => {
    deletePost(id?.toString());
  };
  const postBidFunction = () => {
    const currentTimestamp = getCurrentDateTime();

    const BidInfo: PostBidInterface = {
      amount: newBid?.current?.value ? Number(newBid.current.value) : 0,
      timestamp: currentTimestamp.toString(),
      carID: Number(id),
    };
    console.log("Printing Bid Info");
    console.log(BidInfo);
    console.log("---------------------");
    const response = postBid(BidInfo);
  };
  return (
    <div className="bg-primary flex flex-col gap-5 h-full">
      <div className="flex md:flex-row flex-col w-full md:gap-5 md:p-10 p-5 md:mt-0 mt-2">
        {/* Top Left Section */}
        <div className="flex w-full rounded-lg">
          <img
            src={car?.imageURL}
            alt="car image"
            className="rounded-lg object-cover"
          />
        </div>

        {/* Top Right Section */}
        <div className="flex flex-col w-full md:m-0 mt-5 text-medium font-semibold">
          <div className="text-subtitle font-bold">{car?.name}</div>
          <div className="flex text-medium text-gray font-semibold gap-2 items-center">
            <div>{car?.posted_by}</div>
            <div>
              <img
                src={verified_icon}
                alt="verification icon"
                className="max-w-[30px] object-contain"
              />
            </div>
          </div>
          <div className="mt-5">
            Current Bid: $
            {car?.last_bidding_amount
              ? car?.last_bidding_amount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : car?.minBidPrice}
          </div>
          <div className="mt-1 flex">
            Time Left:&nbsp;
            {car?.endTime && <CountdownTimer endTime={car.endTime} />}
          </div>
          <div className="mt-1">
            Min Next Bid:{" "}
            {car?.last_bidding_amount
              ? (Number(car?.last_bidding_amount) + 100)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : (Number(car?.minBidPrice) + 100)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
          <div className="my-10 flex items-center gap-3">
            <div>Enter your Bid: </div>
            <div className="w-detailInputText rounded-lg">
              <input
                onKeyDown={handleKeyPress}
                ref={newBid}
                disabled={!userIsLoggedIn || auctionExpired}
                placeholder="Enter Your bid"
                className="bg-white placeholder:text-placeholder rounded-lg h-[50px] md:placeholder:px-3 placeholder:px-1 w-full align-text-top"
              />
            </div>
          </div>
          <div className="font-normal">
            <span className="font-bold">
              {car?.last_bidder_name ? car?.last_bidder_name : "No one"}
            </span>{" "}
            is currently winning this bid
          </div>

          {/* Delete Button */}
          {userIsTheOwner ? (
            <div className="mt-10 w-deleteButton">
              <div
                className="bg-red text-white hover:bg-lightred text-center text-medium font-bold md:px-button py-3 rounded-xl cursor-pointer"
                onClick={deleteCar}
              >
                Delete Post
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* Features and Description */}
      <div className="flex md:flex-row flex-col text-medium md:mt-0 mt-5 md:p-10 p-5 ">
        <div className="flex flex-col w-full">
          <div className="font-bold">Key Features:</div>
          <div className="font-semibold mt-5">
            {car?.features.split("\n").map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full md:mt-0 mt-5">
          <div className="font-bold">Description:</div>
          <div className="font-semibold mt-5">{car?.description}</div>
        </div>
      </div>

      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
};

export default ListingDetails;
