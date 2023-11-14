import React from "react";
import { Listing, Footer, Filter } from "../components";
import { lamborghini, filter_icon, verified_icon, instagram_icon, twitter_icon, facebook_icon } from "../assets";
const ListingDetails = () => {
  const features:string = "Year: 2016\n\nMake: Lamborghini\nModel: Model:Huracán\nMileage: 29,000\nEngine: Engine: 5.2-liter V10\nTransmission: [Insert TransmissionType]\nExterior Color: Gray\nInterior Color: White\nTop Speed: 250 MPG\n0-60 MPH: 1.3s"
    return (
        <>

          <div className="bg-primary justify-around p-10 text-subtext flex flex-col">
            {/* Left section for image */}
            <div className="my-30 w-full h-full text-center text-subtitle flex flex-col md:flex-row"
                 style={{display: 'flex', alignItems: 'flex-start'}}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '60px', width: '100%'}}>
                <img src={lamborghini} className="max-w-xl rounded-lg" style={{order: -1}}/>
                {/* Your other content here */}
              </div>
              <div className=" text-left font-bold bg-primary flex justify-around text-subtext">
                <p style={{fontSize: '20px', marginBottom: '10px', marginTop: '10px'}}>
                  <p>Key Features:</p>
                </p>
            <div className="pl-20 bg-primary flex justify-around text-subtext">
              <div className="my-30 flex w-full h-full text-left flex-col text-subtitle"
                   style={{display: 'flex', alignItems: 'flex-start'}}>
                <p style={{fontSize: '28px', marginBottom: '10px', fontWeight: 'bold', marginTop: '10px'}}>2016
                  Lamborghini Huracán</p>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '40px'}}>
                  <div className="font-semibold font-sans text-gray">
                    <p style={{fontSize: '20px', marginBottom: '0px'}}>Thomas Jerry</p></div>
                  <img src={verified_icon} alt="img" style={{width: '20px', height: '20px'}}/>
                </div>
                <p style={{fontSize: '20px', fontFamily: 'sans-serif', fontWeight: '600'}}>Current Bid: $1,900,300</p>
                <p style={{fontSize: '20px', fontFamily: 'sans-serif', fontWeight: '600'}}>Time Left: 01:29:35</p>
                <p style={{fontSize: '20px', marginBottom: '50px', fontFamily: 'sans-serif', fontWeight: '600'}}>Min
                  Next Bid: 1,900,400</p>

                <div style={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
                  <p style={{fontSize: '20px', fontFamily: 'sans-serif', fontWeight: 'bold', marginRight: '10px'}}>Enter
                    your Bid:</p>
                  <input type="text" style={{width: '300px', height: '50px', borderRadius: '5px'}}/>
                </div>
                <p style={{fontSize: '20px', marginBottom: '30px', marginTop: '10px'}}>
                  <span style={{fontWeight: 'bold'}}>You </span>are current winning this bid.
                </p>
                <button style={{
                  backgroundColor: 'red',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '10px',
                  fontSize: '25px',
                  width: '30%',
                  fontWeight: 'bold'
                }}>Delete Post
                </button>
              </div>
              </div>
              </div>
              <div className="font-semibold bg-primary justify-around text-subtext flex flex-col md:flex-row">
                <div className="font-semibold bg-primary flex justify-around text-subtext">
                  <p style={{fontSize: '20px', marginBottom: '10px', marginTop: '10px'}}>
                    <p>{features.split('\n').join('<br />')}<p/>
                    </p>
                  </p>
                </div>
                <p style={{
                  fontSize: '20px',
                  marginBottom: '10px',
                  fontWeight: 'bold',
                  marginTop: '30px'
                }}>Description:</p>
                <p style={{fontSize: '20px', marginTop: '0px', fontWeight: 'bold'}}>
                    <p style={{fontSize: '20px', marginBottom: '10px', marginTop: '10px'}}>
                      <p>This Lamborghini Huracán is a true work of art. Its sleek,
                        aerodynamic design is paired with a roaring 5.2-liter V10 engine
                        that produces exhilarating power. With advanced technology and
                        precision craftsmanship, it's a statement of elegance and
                        performance.</p>
                      <br></br>
                      <p>Impeccably maintained, this car is in pristine condition and has
                        been cherished by its owner. It's a head-turner wherever it goes, and
                        its ready to deliver an unforgettable driving experience.
                      </p>
                    </p>
                </p>
                  </div>
              </div>
          <div className="bg-primary pb-52"></div>
          <div className="bg-black-gradient md:text-[28px] text-[15px] p-5 text-center">
            {/* Images */}
            <div className="flex justify-center mb-3" style={{marginBottom: '40px', marginTop: '40px'}}>
              <img src={facebook_icon} alt="Facebook" className="mx-4" style={{width: '70px', height: '70px'}}/>
              <img src={instagram_icon} alt="Instagram" className="mx-4" style={{width: '70px', height: '70px'}}/>
              <img src={twitter_icon} alt="Twitter" className="mx-4" style={{width: '70px', height: '70px'}}/>
            </div>
            {/* Text */}
            <p style={{fontFamily: 'sans-serif', color: 'white', marginBottom: '20px', fontWeight: '600'}}>© 2023 Elite
              Bid Market (EBM)</p>
            <p style={{fontFamily: 'sans-serif', color: 'white', fontWeight: '600'}}>Privacy Policy | Terms of
              Service</p>
          </div>
          </div>
        </>
    );
  };

export default ListingDetails;