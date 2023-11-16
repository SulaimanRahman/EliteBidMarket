import React from "react"
import { sign_up_image } from "../assets"
import { Link } from "react-router-dom"
import MuiDatePicker from "../components/MuiDatepicker.tsx"

const SignUp = () => {
  return (
    <div className="bg-primary flex flex-col md:flex-row justify-around md:p-10 p-5 text-large md:h-[100vh]">
      {/* Left section for image */}
      <div className="my-30 font-bold flex flex-col w-full text-center text-large justify-between md:mb-10">
        <div className="w-full font-bold text-center rtl:text-left">
          <span className='text-black'>Join the </span>
          <span className='text-white'>Bidding Community </span>
          <span className='text-black'>- Your </span>
          <br></br>
          <span className='text-black'>Next Great Auction Awaits!</span>
        </div>
        <center>
          <img
            src={sign_up_image}
            className="App-logo w-image object-center"
            alt="logo"
          />
        </center>
      </div>

      {/* Right section for form */}
      <div className="flex w-full justify-center">
        <div className="bg-white font-bold max-h-[650px] justify-center flex md:m-10 rounded-lg flex-col w-signInPad text-center md:min-w-[500px]">
          <h1 className="md:mt-10 mt-5">Register</h1>
          <br></br>
          <form method="POST" className="md:mx-10 mx-7">
            <input
              type="text"
              className="w-[250px] mx-1 py-2 focus:outline-none font-normal border-b-2 border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 align-text-top"
              placeholder="First Name"
            />
            <input
              type="text"
              className="w-[250px] mx-1 py-2 focus:outline-none font-normal border-b-2 border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 align-text-top"
              placeholder="Last Name"
            />
            <br></br>
            <br></br>
            <MuiDatePicker />
            <input
              type="email"
              className="w-full py-2 focus:outline-none font-normal border-b-2 border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 align-text-top"
              placeholder="Email"
            />
            <br></br>
            <br></br>
            <input
              type="password"
              className="w-full py-2 focus:outline-none font-normal border-b-2 border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 align-text-top"
              placeholder="Password"
            />
            <br></br>
            <br></br>
            <button className="bg-primary rounded-lg py-2 w-full">
              Create Account
            </button>
          </form>
          <br></br>
          <div className="font-normal text-medium md:mb-16 mb-10">
            Already have an account?
            <Link to="/SignIn" className="text-yellow-300">
              {" "}
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
