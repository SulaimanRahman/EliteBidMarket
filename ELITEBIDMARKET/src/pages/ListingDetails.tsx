import React from "react";
import { Listing, Footer, Filter } from "../components";
import { lamborghini, filter_icon, verified_icon, instagram_icon, twitter_icon, facebook_icon } from "../assets";
const ListingDetails = () => {
  return (
    <>
    <div className="bg-primary flex justify-around p-10 text-subtext">
      {/* Left section for image */}
      <div className="my-30 flex w-full h-full text-center flex-col text-subtitle" style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px', width: '100%' }}>
          <img src={lamborghini} className="rounded-lg" alt="logo" style={{ order: -1 }} />
          {/* Your other content here */}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', width: '100%' }}>
          <p style={{ fontSize: '28px', marginBottom: '10px', fontWeight: 'bold' }}>Key Features: </p>
          <p style={{ fontSize: '20px', fontFamily: 'sans-serif',fontWeight: '600' }}>Year: 2016</p>
          <p style={{ fontSize: '20px', fontFamily: 'sans-serif', fontWeight: '600' }}>Model: Huracan</p>
          <p style={{ fontSize: '20px', fontFamily: 'sans-serif', fontWeight: '600' }}>Mileage: 29.000</p>
          <p style={{ fontSize: '20px', fontFamily: 'sans-serif', fontWeight: '600'}}>Engine: 5.2-liter V10</p>
          <p style={{ fontSize: '20px', fontFamily: 'sans-serif', fontWeight: '600' }}>Transmission: Auto</p>
          <p style={{ fontSize: '20px', fontFamily: 'sans-serif', fontWeight: '600' }}>Exterior Color: Gray</p>
          <p style={{ fontSize: '20px', fontFamily: 'sans-serif', fontWeight: '600' }}>Interior Color: White</p>
          <p style={{ fontSize: '20px', fontFamily: 'sans-serif', fontWeight: '600' }}>Top Speed: 250 MPG</p>
          <p style={{ fontSize: '20px', fontFamily: 'sans-serif', fontWeight: '600' }}>0-60 MPH: 1.3s</p>
        </div>
      </div>
      <div className="my-30 flex w-full h-full text-left flex-col text-subtitle" style={{ display: 'flex', alignItems: 'flex-start' }}>
  <p style={{ fontSize: '28px', marginBottom: '10px', fontWeight: 'bold', marginTop: '10px' }}>2016 Lamborghini Huracan</p>
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
    <p style={{ fontSize: '20px', marginBottom: '0px', fontFamily: 'sans-serif', color: 'gray' }}>Thomas Jerry</p>
    <img src={verified_icon} alt="img" style={{ width: '20px', height: '20px'}} />
  </div>
  <p style={{ fontSize: '20px', fontFamily: 'sans-serif', fontWeight: '600' }}>Current Bid: $1,900,300</p>
  <p style={{ fontSize: '20px', fontFamily: 'sans-serif', fontWeight: '600' }}>Time Left: 01:29:35</p>
  <p style={{ fontSize: '20px', marginBottom: '50px', fontFamily: 'sans-serif', fontWeight: '600' }}>Min Next Bid: 1,900,400</p>

  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
    <p style={{ fontSize: '20px', fontFamily: 'sans-serif', fontWeight: 'bold', marginRight: '10px' }}>Enter your Bid:</p>
    <input type="text" style={{ width: '400px', height: '40px', borderRadius: '5px' }} />
  </div>
  <p style={{ fontSize: '20px', marginBottom: '30px', fontWeight: 'bold', marginTop: '10px' }}>
    <span style={{ fontWeight: 'normal' }}>Jose Martinez</span> is currently winning this bid.
  </p>

  <button style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '10px', fontSize: '25px', width: '30%', fontWeight: 'bold' }}>Delete Post</button>
  <p style={{ fontSize: '28px', marginBottom: '10px', fontWeight: 'bold', marginTop: '30px' }}>Description:</p>
  <p style={{ fontSize: '28px', marginTop: '0px', fontWeight: '600' }}>
  This Lamborghini Huracán is a true work of art. Its sleek,
        aerodynamic design is paired with a roaring 5.2-liter V10 engine
        that produces exhilarating power. With advanced technology and
        precision craftsmanship, it's a statement of elegance and
        performance.
  </p>
</div>
    </div>
    <div className="bg-black md:text-[28px] text-[15px] p-5 text-center">
  {/* Images */}
  <div className="flex justify-center mb-3" style={{marginBottom: '40px', marginTop: '40px'}}>
  <img src={facebook_icon} alt="Facebook" className="mx-4" style={{ width: '70px', height: '70px'}} />
  <img src={instagram_icon} alt="Instagram" className="mx-4" style={{ width: '70px', height: '70px'}}/>
  <img src={twitter_icon} alt="Twitter" className="mx-4" style={{ width: '70px', height: '70px'}}/>
</div>
  {/* Text */}
  <p style={{ fontFamily: 'sans-serif', color: 'white', marginBottom: '20px', fontWeight: '600'}}>© 2023 Elite Bid Market (EBM)</p>
  <p style={{ fontFamily: 'sans-serif', color: 'white', fontWeight: '600'}}>Privacy Policy | Terms of Service</p>
</div>
    </>
  );
};

export default ListingDetails;