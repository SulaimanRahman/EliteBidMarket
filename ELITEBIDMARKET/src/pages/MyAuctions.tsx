import { useState, useEffect } from "react";
import { Filter, Footer, Listing, ListingSold } from "../components";
import { filter_icon } from "../assets";
// import axios from "axios";
import { getAuctions } from "../Helper";
import { LoadingSpinner } from "../components";

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

const MyAuctions = () => {
  const [myPosts, setmyPosts] = useState<Car[]>([]);
  const [myBids, setMyBids] = useState<BidCar[]>([]);

  const [myPostSortOption, setMyPostSortOption] = useState("");
  const [myBidsSortOption, setMyBidsSortOption] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem("user-token")) {
      console.log("User is logged in");
      getAuctions()
        .then((auctions) => {
          setmyPosts(auctions.my_cars);
          // setMyBids(auctions.my_biddings);
          const mybiddingsFiltered = new Set<BidCar>();
          auctions.my_biddings.filter((obj) => {
            // const key = obj.carID;
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
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Please sign in to view your auctions.");
      window.location.href = "/SignIn";
    }
  }, []);

  const handleMyPostSortChange = (selectedSort: string) => {
    setMyPostSortOption(selectedSort);
  };

  useEffect(() => {
    let sortedCars = [...myPosts];

    switch (myPostSortOption) {
      case "A-Z":
        sortedCars.sort((a, b) => {
          const nameA = a.name.trim().replace(/^\d+\s*/, ""); // Remove leading numbers
          const nameB = b.name.trim().replace(/^\d+\s*/, ""); // Remove leading numbers
          return nameA.localeCompare(nameB);
        });
        break;
      case "Z-A":
        sortedCars.sort((a, b) => {
          const nameA = a.name.trim().replace(/^\d+\s*/, ""); // Remove leading numbers
          const nameB = b.name.trim().replace(/^\d+\s*/, ""); // Remove leading numbers
          return nameB.localeCompare(nameA);
        });
        break;
      case "LowestPrice":
        sortedCars.sort(
          (a, b) =>
            parseFloat(a.last_bidding_amount) -
            parseFloat(b.last_bidding_amount)
        );
        break;
      case "HighestPrice":
        sortedCars.sort(
          (a, b) =>
            parseFloat(b.last_bidding_amount) -
            parseFloat(a.last_bidding_amount)
        );
        break;
      default:
        // No sorting
        break;
    }

    setmyPosts(sortedCars);
  }, [myPostSortOption, myPosts]);

  const handleMyBidsSortChange = (selectedSort: string) => {
    setMyBidsSortOption(selectedSort);
  };

  useEffect(() => {
    let sortedCars = [...myBids];

    switch (myBidsSortOption) {
      case "A-Z":
        sortedCars.sort((a, b) => {
          const nameA = a.car.name.trim().replace(/^\d+\s*/, ""); // Remove leading numbers
          const nameB = b.car.name.trim().replace(/^\d+\s*/, ""); // Remove leading numbers
          return nameA.localeCompare(nameB);
        });
        break;
      case "Z-A":
        sortedCars.sort((a, b) => {
          const nameA = a.car.name.trim().replace(/^\d+\s*/, ""); // Remove leading numbers
          const nameB = b.car.name.trim().replace(/^\d+\s*/, ""); // Remove leading numbers
          return nameB.localeCompare(nameA);
        });
        break;
      case "LowestPrice":
        sortedCars.sort((a, b) => {
          const priceA = String(a.car.last_bidding_amount);
          const priceB = String(b.car.last_bidding_amount);
          return parseFloat(priceA) - parseFloat(priceB);
        });
        break;
      case "HighestPrice":
        sortedCars.sort((a, b) => {
          const priceA = String(a.car.last_bidding_amount);
          const priceB = String(b.car.last_bidding_amount);
          return parseFloat(priceB) - parseFloat(priceA);
        });
        break;
      default:
        // No sorting
        break;
    }

    setMyBids(sortedCars);
  }, [myBidsSortOption, myBids]);

  const isCarSold = (dateString: string): boolean => {
    const date = new Date(dateString);
    const now = new Date();

    return date.getTime() < now.getTime();
  };

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {/* My Posts */}
      <div className="flex flex-col md:m-10 m-5">
        <div className="text-subtext font-bold">My Posts</div>
        <div className="flex mt-5 gap-2">
          <img
            src={filter_icon}
            alt="filter icon"
            className="w-[35px] object-contain"
          />
          <Filter onSortChange={handleMyPostSortChange} />
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
          <Filter onSortChange={handleMyBidsSortChange} />
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
