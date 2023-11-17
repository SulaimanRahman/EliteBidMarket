import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Listing, Footer, Filter } from "../components"
import { lamborghini, filter_icon } from "../assets"

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
  const [sortOption, setSortOption] = useState("");

  const location = useLocation();

  useEffect(() => {
    const searchQuery =
      new URLSearchParams(window.location.search).get("search") || "";
    console.log("Search Query:", searchQuery);
    const ALL_CARS = import.meta.env.VITE_ALL_CARS;
    fetch(`${ALL_CARS}?search=${encodeURIComponent(searchQuery)}`)
      .then((response) => response.json())
      .then((cars) => {
        console.log("api called");
        console.log(cars);

        const filteredCars = searchQuery
          ? cars.filter((car: Car) =>
              car.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : cars;

        // Separate sold items (max 10)
        const soldCars: Car[] = filteredCars.filter((car: Car) =>
          isCarSold(car.endTime)
        );

        // Remove sold cars
        const updatedAllCars = filteredCars.filter(
          (car: Car) => !soldCars.some((soldCar) => soldCar.id === car.id)
        );

        setAllAvailableCars(updatedAllCars);
      });
  }, [location.search]);

  const isCarSold = (dateString: string): boolean => {
    const date = new Date(dateString);
    const now = new Date();

    return date.getTime() < now.getTime();
  };

  const handleSortChange = (selectedSort: string) => {
    setSortOption(selectedSort);
  };

  useEffect(() => {
    let sortedCars = [...allAvailableCars];

    switch (sortOption) {
      case "A-Z":
        sortedCars.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedCars.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "LowestPrice":
        sortedCars.sort((a, b) => parseFloat(a.last_bidding_amount) - parseFloat(b.last_bidding_amount));
        break;
      case "HighestPrice":
        sortedCars.sort((a, b) => parseFloat(b.last_bidding_amount) - parseFloat(a.last_bidding_amount));
        break;
      default:
        // No sorting
        break;
    }

    setAllAvailableCars(sortedCars);
  }, [sortOption, allAvailableCars]);

  return (
    <div>
      <div className="flex md:m-10 m-5 gap-2">
        <img
          src={filter_icon}
          alt="filter icon"
          className="w-[35px] object-contain"
        />
        <Filter onSortChange={handleSortChange} />
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
