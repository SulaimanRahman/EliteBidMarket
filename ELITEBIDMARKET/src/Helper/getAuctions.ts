import axios from 'axios';
import React, {useContext} from 'react'

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
  
  interface getAuctionsResponseBody {
    my_biddings: Array<Car>;
    my_cars: Array<Car>;
  }

async function getAuctions() {
    const MY_AUCTIONS = import.meta.env.VITE_My_Auctions;
    const USER_TOKEN = localStorage.getItem("user-token")
    console.log(USER_TOKEN)
    const response = await axios.get(MY_AUCTIONS, {
        headers: {
            Authorization: `Bearer ${USER_TOKEN}`
        }
    });
    
    return response.data as getAuctionsResponseBody;
}

export default getAuctions