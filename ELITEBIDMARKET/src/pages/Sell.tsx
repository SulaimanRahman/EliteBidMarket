import React, { useRef, useState } from "react";
import {
  InputText,
  MessageInput,
  Button,
  MuiDateTimePicker,
} from "../components";
import { post_auction_image } from "../assets";
// import datetime from "datetime";

import { format } from "date-fns";

import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { dateConverter } from "../Helper";
import BasicDatePicker from "../components/MuiDatepicker";

import { postCar } from "../Helper";

interface PostCarInterface {
  name: String;
  features: string;
  description: string;
  imageURL: string;
  minBidPrice: string;
  endTime: string;
}

const Sell = () => {
  const itemName = useRef<HTMLInputElement>(null);
  const minBid = useRef<HTMLInputElement>(null);
  // const endDateTime = useRef<HTMLInputElement>(null);
  const endDateTime = useRef<HTMLInputElement>(null);
  const imageURL = useRef<HTMLInputElement>(null);
  const itemFeatures = useRef<HTMLTextAreaElement>(null);
  const itemDescription = useRef<HTMLTextAreaElement>(null);

  const postAuction = () => {
    console.log("POst Auction CLicked");
    // const name: string = itemName?.current?.value ? "No Name" //newBid?.current?.value ? Number(newBid.current.value) : 0
    const name: string | undefined = itemName?.current?.value;
    const bidAmount: string | undefined = minBid?.current?.value;
    const date: string | undefined = endDateTime?.current?.value;
    let formatedDate: string = "";
    if (date) {
      const newDate: string = formatDate(date);
      formatedDate = newDate;
    }

    const url: string | undefined = imageURL?.current?.value;
    const features: string | undefined = itemFeatures?.current?.value;
    const description: string | undefined = itemDescription?.current?.value;

    if (
      name &&
      bidAmount &&
      formatedDate &&
      url &&
      features &&
      description != undefined
    ) {
      console.log(name);
      console.log(bidAmount);
      console.log(formatedDate);
      console.log(url);
      console.log(features);
      console.log(description);

      const CarInfo: PostCarInterface = {
        name: name,
        features: features,
        description: description,
        imageURL: url,
        minBidPrice: bidAmount,
        endTime: formatedDate,
      };
      console.log(CarInfo);
      postCar(CarInfo);
      if (
        itemName.current &&
        minBid.current &&
        imageURL.current &&
        itemFeatures.current &&
        itemDescription.current != null
      ) {
        itemName.current.value = "";
        minBid.current.value = "";
        imageURL.current.value = "";
        itemFeatures.current.value = "";
        itemDescription.current.value = "";
      }
    } else {
      console.log("Some values are undefined");
    }
  };

  const formatDate = (dateString: string) => {
    // const dt = datetime.datetime.strptime(dateString, "%Y-%m-%dT%H:%M"); // Utilize datetime for parsing
    // return dt.strftime("%Y-%m-%d %H:%M:%S"); // Maintain original hour
    // const dt = new Date(dateString);
    // return dt.toLocaleString("en-US", {
    //   year: "numeric",
    //   month: "numeric",
    //   day: "numeric",
    //   hour: "numeric",
    //   minute: "numeric",
    //   second: "numeric",
    // });
    const dt = new Date(dateString);
    return format(dt, "yyyy-MM-dd HH:mm:ss");
  };
  return (
    <div className="bg-primary w-full min-h-[100vh] flex justify-between">
      {/* Left Section */}
      <div className="flex flex-col w-full h-full text-selltext lg:p-20 p-10">
        <div className="font-bold text-selltext mb-5 md:hidden flex justify-center">
          Post an Auction
        </div>
        <div className="font-bold w-selltextwidth flex flex-col">
          Turn Your Items into Opportunities
          <span className="text-white">List Your Auction Today!</span>
        </div>
        <div className="flex w-full gap-5 mt-5">
          <div className="text-white font-normal w-full">
            <input
              ref={itemName}
              placeholder="Item Name"
              className="bg-primary md:border-b-2 border-b-[1px] border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 w-full align-text-top"
            />
          </div>
          <div className="text-white font-normal w-full">
            <input
              ref={minBid}
              placeholder="Min Bid"
              className="bg-primary md:border-b-2 border-b-[1px] border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 w-full align-text-top"
            />
          </div>
        </div>
        <div className="font-normal w-full mt-5">
          End Date and Time:
          <input
            ref={endDateTime}
            type="datetime-local"
            placeholder="End Date and Time"
            className="bg-primary text-white md:border-b-2 border-b-[1px] border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 w-full align-text-top"
          />
          {/* <MuiDateTimePicker /> */}
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
              <DateTimePicker
                label="End Date and"
                value={endDateTime}
                onChange={(newValue) => {
                  console.log("NEw Value: ");
                  console.log(newValue.$d);
                  const formatedDate = dateConverter(newValue.$d);
                  console.log(formatedDate);
                  console.log();
                  // setEndDateTime(newValue.$d);
                }}
              />
            </DemoContainer>
          </LocalizationProvider> */}
        </div>
        <div className="text-white font-normal w-full mt-5">
          <input
            ref={imageURL}
            placeholder="Image URL"
            className="bg-primary md:border-b-2 border-b-[1px] border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 w-full align-text-top"
          />
        </div>
        <div className="text-white font-normal w-full mt-5">
          <textarea
            ref={itemFeatures}
            className="bg-primary md:border-b-2 border-b-[1px] border-black placeholder:text-placeholder placeholder:px-3 w-full align-text-top"
            placeholder="Item Features"
            rows={3}
          ></textarea>
        </div>
        <div className="text-white font-normal w-full mt-5">
          <textarea
            ref={itemDescription}
            className="bg-primary md:border-b-2 border-b-[1px] border-black placeholder:text-placeholder placeholder:px-3 w-full align-text-top"
            placeholder="Item Description"
            rows={3}
          ></textarea>
        </div>

        <div className="flex justify-end">
          <div className="w-sendbutton mt-10" onClick={postAuction}>
            <Button title="Post" />
          </div>
        </div>
      </div>

      {/* right Section */}
      <div className="font-bold md:flex hidden lg:p-20 p-10 h-full w-full flex-col items-center">
        <div className="flex justify-center text-selltext">Post an Auction</div>

        <div className="flex justify-center w-sellimage">
          <img
            src={post_auction_image}
            className="object-contain"
            alt="sell page image"
          />
        </div>
        <div className="w-selltextwidth font-semibold text-selltext">
          <div className="text-center">
            Unleash Your Items' Potential <br />
            <span className="text-white">Begin Your Auction Journey!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
