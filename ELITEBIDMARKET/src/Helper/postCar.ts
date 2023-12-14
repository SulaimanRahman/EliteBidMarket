import axios from 'axios';
// import React, {useContext} from 'react'

interface CarPostBody {
  name: String;
  features: string;
  description: string;
  imageURL: string;
  minBidPrice: string
  endTime: string
}

interface CarPostingResponseBody {
  "Success": boolean,
  "Message": string,
  "data": {},
  "error": {}
}

async function postBid(CarInfo:CarPostBody): Promise<CarPostingResponseBody> {
  console.log(CarInfo)
  const POST_AUCTION = import.meta.env.VITE_POST_CAR;
  const USER_TOKEN = localStorage.getItem("user-token")
  console.log(USER_TOKEN)
  console.log("Car Info:")
  console.log(CarInfo)
  try {
    const response = await axios.post(
      POST_AUCTION,
      CarInfo,
      { headers: { Authorization: `Bearer ${USER_TOKEN}` } }
    );

    console.log("Post Submitted");
    return response.data as CarPostingResponseBody;
  } catch (error:any) {
    console.error("Error posting bid:", error.response || error.message);
    throw error; // Re-throw the error to handle it at the caller's level
  }
}
  
export default postBid