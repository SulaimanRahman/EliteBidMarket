import axios from 'axios';
import React, {useContext} from 'react'

async function deletePost(carID: string) {
  
  const DELETE_CAR = import.meta.env.VITE_DELETE_CAR;
  const USER_TOKEN = localStorage.getItem("user-token")
  console.log(USER_TOKEN)
  
  try {
    const response = await axios.delete(
      DELETE_CAR + carID,
      { headers: { Authorization: `Bearer ${USER_TOKEN}` } }
    );
    console.log("Car Deleted");
    if (response.status == 200) {
      alert("Car deleted Successfully")
      window.location.href = '/MyAuctions'
    } else {
      alert("Could not delete the car")
    }
  } catch (error:any) {
    console.error("Error posting bid:", error.response || error.message);
    throw error; // Re-throw the error to handle it at the caller's level
  }
}
  
export default deletePost