import React from "react";
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

const Home = () => {
  const showTrendingAuction = () => {
    const divs: React.ReactElement[] = [];

    for (const item of trending_auctions) {
      console.log("{Title: " + item.title + "} {Seller: " + item.seller + "}");
    }

    return (
      <React.Fragment>
        <div>{divs}</div>
      </React.Fragment>
    );
  };

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
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <Listing
              image="https://www.chicagoautoshow.com/assets/1/23/VehicleRegularDimensionId/2022-Acura-NSX-11.jpg"
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <Listing
              image="https://media.ed.edmunds-media.com/land-rover/range-rover-sport/2021/oem/2021_land-rover_range-rover-sport_4dr-suv_svr-carbon-edition_fq_oem_1_815.jpg"
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <Listing
              image="https://news.dupontregistry.com/wp-content/uploads/2023/07/2023-aston-martin-dbs-superleggera-scaled.jpg"
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <Listing
              image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTxMJTtVExsNb7fJ1q4UGWo7rOh9ntQ0jQS_7frJURhKbwLKvRf"
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <Listing
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5TPVNyLUVJC-ZWGZ0aiTLDuDLH7H9J1vo8A2g7h-vNk9b-d2"
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

      {/* Recently Sold */}
      <div className="flex flex-col bg-primary pb-20 text-white">
        <div className="text-subtitle font-bold text-center py-vertical">
          Recently Sold
        </div>
        <div className="flex overflow-x-scroll md:gap-10 gap-5">
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <ListingSold
              image={lamborghini}
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <ListingSold
              image={lamborghini}
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <ListingSold
              image={lamborghini}
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <ListingSold
              image={lamborghini}
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <ListingSold
              image={lamborghini}
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <ListingSold
              image={lamborghini}
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <ListingSold
              image={lamborghini}
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <ListingSold
              image={lamborghini}
              auctioneerName="Thomas Jerry"
              verified={false}
              title="2016 Lamborghini Huracán"
              currentBid="$1.9 million"
              endTime="01:29:35"
            />
          </div>
          <div className="min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg">
            <ListingSold
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
