import React, { useState, useEffect, useRef } from "react";
import {
  hero_section,
  trending_auctions,
  contact_us_section,
} from "../constants/home_page_data.ts";
import {
  Listing,
  ListingSold,
  Testimonial,
  InputText,
  MessageInput,
  Button,
  Footer,
} from "../components";
import { lamborghini, contact_us_icon } from "../assets";
import "./home.css";

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

const Home = () => {
  const [trendingCars, setTrendingCars] = useState<Car[]>([]);
  const [recentlySoldCars, setRecentlySoldCars] = useState<Car[]>([]);

  useEffect(() => {
    const ALL_CARS = import.meta.env.VITE_ALL_CARS;
    fetch(ALL_CARS)
      .then((response) => response.json())
      .then((cars) => {
        console.log("API was called");
        //separate sold item max 10
        const soldcars: Car[] = [];
        cars.map((car: Car) => {
          if (isCarSold(car.endTime) == true) {
            soldcars.push(car);
          }
        });
        setRecentlySoldCars(soldcars.slice(0, 10));

        //separate trending list max 10

        //removing sold cars
        const updatedAllCars = cars.filter(
          (car: Car) => !soldcars.some((soldCar) => soldCar.id === car.id)
        );

        const sortedCars = updatedAllCars.sort((a: Car, b: Car) => {
          const bidsA = parseInt(a.num_of_bids);
          const bidsB = parseInt(b.num_of_bids);

          return bidsB - bidsA;
        });

        const topTenCars = sortedCars.slice(0, 10);
        setTrendingCars(topTenCars);
      });
  }, []);

  const isCarSold = (dateString: string): boolean => {
    const date = new Date(dateString);
    const now = new Date();

    return date.getTime() < now.getTime();
  };

  // useEffect(() => {
  //   console.log("api called");

  //   // //separate sold item max 10
  //   // const soldcars: Car[] = [];
  //   // cars.map((car) => {
  //   //   if (isCarSold(car.endTime) == true) {
  //   //     soldcars.push(car);
  //   //   }
  //   // });
  //   // setRecentlySoldCars(soldcars.slice(0, 10));

  //   // //separate trending list max 10

  //   // //removing sold cars
  //   // const updatedAllCars = cars.filter(
  //   //   (car) => !soldcars.some((soldCar) => soldCar.id === car.id)
  //   // );

  //   // const sortedCars = updatedAllCars.sort((a, b) => {
  //   //   const bidsA = parseInt(a.num_of_bids);
  //   //   const bidsB = parseInt(b.num_of_bids);

  //   //   return bidsB - bidsA;
  //   // });

  //   // const topTenCars = sortedCars.slice(0, 10);
  //   // setTrendingCars(topTenCars);
  // }, []);

  return (
    <div className="flex flex-col">
      {/* hero section */}
      <div className="hidden md:flex items-center justify-center bg-primary">
        <div className="flex flex-col p-10 w-2/4 items-center justify-center">
          <div className="font-bold text-title py-vertical max-w-[35rem]">
            {hero_section.title}
          </div>
          <div className="font-semibold py-vertical text-subtext max-w-[35rem]">
            {hero_section.subtext}
          </div>
          <div className="m-10 flex items-center py-vertical justify-center">
            <div className="text-buttontext font-bold md:px-button py-3 rounded-xl cursor-pointer bg-button hover:bg-buttonHover">
              {hero_section.button_text}
            </div>
          </div>
        </div>
        <div className="flex w-2/4 items-center justify-center">
          <img src={`${hero_section.hero_image}`} className="w-image" />
        </div>
      </div>

      {/* hero section Mobile Version */}
      <div className="flex md:hidden flex-col items-center justify-center bg-primary">
        <div className="flex flex-col px-vertical items-center justify-center">
          <div className="font-bold text-title pt-vertical max-w-[35rem]">
            {hero_section.title}
          </div>
          <div className="flex items-center justify-center">
            <img
              src={`${hero_section.hero_image}`}
              className="w-image px-vertical"
            />
          </div>
          <div className="font-semibold text-subtext max-w-[35rem]">
            {hero_section.subtext}
          </div>
          <div className="m-10 flex items-center justify-center">
            <div className="text-buttontext font-bold md:px-20 px-10 p-3 rounded-xl cursor-pointer bg-button hover:bg-buttonHover">
              {hero_section.button_text}
            </div>
          </div>
        </div>
      </div>

      {/* Trending Auctions */}
      <div className="flex flex-col bg-secondary pb-20 text-white">
        <div className="text-subtitle font-bold text-center py-vertical">
          Trending Auctions
        </div>
        <div className="flex overflow-x-scroll md:gap-10 gap-5">
          {trendingCars.map((car) => (
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
      </div>

      {/* Recently Sold */}
      <div className="flex flex-col bg-primary pb-20 text-white">
        <div className="text-subtitle font-bold text-center py-vertical">
          Recently Sold
        </div>
        <div className="flex overflow-x-scroll scroll-smooth md:gap-10 gap-5">
          {recentlySoldCars.map((car) => (
            <div
              key={car.id}
              className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg"
            >
              <ListingSold
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
      </div>

      {/* Testimonials */}
      <div className="flex flex-col bg-secondary pb-20 text-white">
        <div className="text-subtitle font-bold text-center py-vertical">
          Testimonials
        </div>
        <div className="flex justify-center mx-10">
          <Testimonial
            comment="I'm addicted to the excitement of winning auctions on this platform! The variety of items is incredible, and the bidding process is straightforward. I've scored some amazing deals here."
            name="Jane D. - Happy Bidder"
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-center mx-10">
            <Testimonial
              comment="I've been using this site for a while now, and it's become my go-to for unique finds. The support team is responsive, and I've never had any issues. Highly recommended!"
              name="Mike S. - Frequent User"
            />
          </div>
          <div className="flex justify-center mx-10">
            <Testimonial
              comment="As a seller, I've had a fantastic experience on this platform. It's easy to list items, and I've had great success with sales. Plus, the community is supportive and friendly."
              name="Emily R. - Successful Seller"
            />
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="flex justify-around bg-primary md:pb-20 pb-10">
        <div className="flex flex-col text-contactus font-bold md:my-10 my-5 md:mx-10 mx-5">
          <div className="flex md:hidden text-subtitle font-bold text-center justify-center pb-3">
            <div className="">Contact Us</div>
          </div>
          <div className="w-contactus">
            Get in <span className="text-white">touch with us</span> for more
            information
          </div>
          <div className="flex md:mt-20 mt-10">
            <div className="text-white font-normal">
              <InputText placeholder="First Name" />
            </div>
            <div className="text-white font-normal ml-5">
              <InputText placeholder="Last Name" />
            </div>
          </div>
          <div className="text-white font-normal mt-5">
            <InputText placeholder="Email" />
          </div>
          <div className="text-white font-normal mt-5">
            <MessageInput placeholder="Message" rows={4} />
          </div>

          <div className="flex justify-end md:mt-14 mt-10">
            <div className="w-sendbutton text-buttontext">
              <Button title="Send" />
            </div>
          </div>
        </div>
        <div className="md:flex flex-col hidden items-center justify-between md:my-10 md:mx-10 ">
          <div className="text-title font-bold">Contact US</div>
          <div className="flex w-2/4 items-center justify-center">
            <img
              src={`${contact_us_section.contact_us_icon}`}
              className="w-image"
            />
          </div>
          <div className="text-contactus font-bold w-contactus">
            Just <span className="text-white">one step away</span> from
            connecting
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
