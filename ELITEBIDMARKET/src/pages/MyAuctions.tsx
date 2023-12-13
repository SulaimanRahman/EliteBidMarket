import React, { useState, useEffect } from "react";
import { Filter, Footer, Listing, ListingSold } from "../components";
import { filter_icon, lamborghini } from "../assets";
import axios from "axios";
import { getAuctions, deletePost } from "../Helper";

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

interface BidCar {
  username: string;
  carID: number;
  name: string;
  posted_by: string;
  timeStamp: string;
  car: {
    last_bidding_amount: Number;
    name: string;
    posted_by: string;
    imageURL: string;
    endTime: string;
  };
}

interface BidCar {
  username: string;
  carID: number;
  name: string;
  posted_by: string;
  timeStamp: string;
  car: {
    last_bidding_amount: Number;
    name: string;
    posted_by: string;
    imageURL: string;
    endTime: string;
  };
}

interface getAuctionsResponseBody {
  my_biddings: Array<Car>;
  my_cars: Array<Car>;
}

const MyAuctions = () => {
  const [myPosts, setmyPosts] = useState<Car[]>([]);
  const [myBids, setMyBids] = useState<BidCar[]>([]);
  useEffect(() => {
    if (localStorage.getItem("user-token")) {
      console.log("User is logged in");
      getAuctions()
        .then((auctions) => {
          setmyPosts(auctions.my_cars);
          // setMyBids(auctions.my_biddings);
          const mybiddingsFiltered = new Set<BidCar>();
          auctions.my_biddings.filter((obj) => {
            const key = obj.carID;
            let duplicateFound = false;
            for (const seenObj of mybiddingsFiltered) {
              if (seenObj.carID === obj.carID) {
                duplicateFound = true;
                break;
              }
            }
            if (duplicateFound) {
              return false;
            }
            mybiddingsFiltered.add(obj);
            return true;
          });
          setMyBids([...mybiddingsFiltered]);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      window.location.href = "/SignIn";
    }
  }, []);

  const isCarSold = (dateString: string): boolean => {
    const date = new Date(dateString);
    const now = new Date();

    return date.getTime() < now.getTime();
  };

  return (
    <div>
      {/* My Posts */}
      <div className="flex flex-col md:m-10 m-5">
        <div className="text-subtext font-bold">My Posts</div>
        <div className="flex mt-5 gap-2">
          <img
            src={filter_icon}
            alt="filter icon"
            className="w-[35px] object-contain"
          />
          <Filter />
        </div>
        <div className="flex flex-wrap xs:justify-start justify-center my-10 gap-10">
          {myPosts.length ? (
            myPosts.map((car: Car) => {
              if (isCarSold(car.endTime) == true) {
                return (
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
                      currentBid={
                        car.last_bidding_amount
                          ? car.last_bidding_amount
                          : car.minBidPrice
                      }
                      endTime={car.endTime}
                    />
                  </div>
                );
              } else {
                return (
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
                      currentBid={
                        car.last_bidding_amount
                          ? car.last_bidding_amount
                          : car.minBidPrice
                      }
                      endTime={car.endTime}
                    />
                  </div>
                );
              }
            })
          ) : (
            <div className="font-bold text-medium flex w-full text-center justify-center">
              Your car posting adventure awaits! Share your dream car with the
              world and start earning from bids today.
            </div>
          )}
        </div>
      </div>

      {/* My Bids */}
      <div className="flex flex-col m-10">
        <div className="text-subtext font-bold">My Bids</div>
        <div className="flex mt-5 gap-2">
          <img
            src={filter_icon}
            alt="filter icon"
            className="w-[35px] object-contain"
          />
          <Filter />
        </div>
        <div className="flex flex-wrap xs:justify-start justify-center my-10 gap-10">
          {myBids.length ? (
            myBids.map((bidCar: BidCar) => {
              if (isCarSold(bidCar.car.endTime) == true) {
                return (
                  <div
                    key={bidCar.carID}
                    className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg"
                  >
                    <ListingSold
                      id={bidCar.carID}
                      image={bidCar.car.imageURL}
                      auctioneerName={bidCar.car.posted_by}
                      verified={false}
                      title={bidCar.car.name}
                      currentBid={bidCar.car.last_bidding_amount.toString()}
                      endTime={bidCar.car.endTime}
                    />
                  </div>
                );
              } else {
                return (
                  <div
                    key={bidCar.carID}
                    className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg"
                  >
                    <Listing
                      id={bidCar.carID}
                      image={bidCar.car.imageURL}
                      auctioneerName={bidCar.car.posted_by}
                      verified={false}
                      title={bidCar.car.name}
                      currentBid={bidCar.car.last_bidding_amount.toString()}
                      endTime={bidCar.car.endTime}
                    />
                  </div>
                );
              }
            })
          ) : (
            <div className="font-bold text-medium flex w-full text-center justify-center">
              Your bidding journey begins here. Explore our exciting car
              auctions and place your first bid today!
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyAuctions;
