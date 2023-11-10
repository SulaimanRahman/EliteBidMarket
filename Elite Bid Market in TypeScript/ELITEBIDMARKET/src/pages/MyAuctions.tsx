import React from "react";
import { Filter, Footer, Listing } from "../components";
import { filter_icon, lamborghini } from "../assets";

const MyAuctions = () => {
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
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <Listing
              image={lamborghini}
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <Listing
              image={lamborghini}
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <Listing
              image={lamborghini}
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <Listing
              image={lamborghini}
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <Listing
              image={lamborghini}
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <Listing
              image={lamborghini}
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
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
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <Listing
              image={lamborghini}
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <Listing
              image={lamborghini}
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <Listing
              image={lamborghini}
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <Listing
              image={lamborghini}
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyAuctions;
