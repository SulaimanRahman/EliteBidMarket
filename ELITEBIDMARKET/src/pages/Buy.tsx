import React, { useEffect, useState } from "react";
import { Listing, Footer, Filter } from "../components";
import { lamborghini, filter_icon } from "../assets";

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

const Buy = () => {
  const [allAvailableCars, setAllAvailableCars] = useState<Car[]>([]);

  useEffect(() => {
    const ALL_CARS = import.meta.env.VITE_ALL_CARS;
    fetch(ALL_CARS)
      .then((response) => response.json())
      .then((cars) => {
        console.log("api called");
        console.log(cars);
        //separate sold item max 10
        const soldcars: Car[] = [];
        cars.map((car: Car) => {
          if (isCarSold(car.endTime) == true) {
            soldcars.push(car);
          }
        });

        //separate trending list max 10

        //removing sold cars
        const updatedAllCars = cars.filter(
          (car: Car) => !soldcars.some((soldCar) => soldCar.id === car.id)
        );
        setAllAvailableCars(updatedAllCars);
      });
  }, []);

  const isCarSold = (dateString: string): boolean => {
    const date = new Date(dateString);
    const now = new Date();

    return date.getTime() < now.getTime();
  };

  return (
    <div>
      <div className="flex md:m-10 m-5 gap-2">
        <img
          src={filter_icon}
          alt="filter icon"
          className="w-[35px] object-contain"
        />
        <Filter />
      </div>
      <div className="flex flex-wrap xs:justify-start justify-center md:my-10 my-5 md:mx-10 mx-5 gap-10">
        {allAvailableCars.map((car) => (
          <div
            key={car.id}
            className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg"
          >
            <Listing
              id={car.id}
              image={car.imageURL}
              auctioneerName={car.posted_by}
              verified={false}
              title={car.name}
              currentBid={car.last_bidding_amount}
              endTime={car.endTime}
            />
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Buy;
