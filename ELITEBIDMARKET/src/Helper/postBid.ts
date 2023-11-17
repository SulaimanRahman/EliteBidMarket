import axios from 'axios';
import React, {useContext} from 'react'

interface BidPostBody {
  amount: Number;
  timestamp: string;
  carID: Number;
}

interface BidPostingResponseBody {
  "Success": boolean,
  "Message": string,
  "data": {},
  "error": {}
}

async function postBid(BidInfo:BidPostBody): Promise<BidPostingResponseBody> {
  console.log(BidInfo)
  const POST_AUCTION = import.meta.env.VITE_POST_BID;
  const USER_TOKEN = localStorage.getItem("user-token")
  console.log(USER_TOKEN)

  try {
    const response = await axios.post(
      POST_AUCTION,
      { body: BidInfo },
      { headers: { Authorization: `bearer ${USER_TOKEN}` } }
    );
    console.log(response);
    console.log("Post Submitted");
    return response.data as BidPostingResponseBody;
  } catch (error:any) {
    console.error("Error posting bid:", error.response || error.message);
    throw error; // Re-throw the error to handle it at the caller's level
  }
  // return response.data as BidPostingResponseBody;
}
  
export default postBid