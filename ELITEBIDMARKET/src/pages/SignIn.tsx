import React from "react"
import { sign_in_image } from "../assets"
import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <div className='bg-primary flex flex-col md:flex-row justify-around p-10 text-subtext'>
      {/* Left section for image */}
      <div className='my-30 font-bold flex flex-col w-full h-full text-center flex-col text-subtitle'>
        <div className='w-full font-bold text-center rtl:text-left'>
          <span className='text-black'>Welcome Back! Instant Access to</span>
          <br></br>
          <span className='text-white'>Exciting Auctions</span>
        </div>
        <center>
          <img
            src={sign_in_image}
            className='App-logo w-image object-center'
            alt='logo'
          />
        </center>
      </div>

      {/* Right section for form */}
      <div className='my-30 bg-white font-bold flex p-10 rounded-lg flex-col w-full h-full flex-col text-center'>
        <h1>Sign in</h1>
        <br></br>
        <form method='POST'>
          <input
            type='email'
            className='md:w-search w-searchmobile py-2 focus:border-none focus:outline-none font-normal border-b-2 border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 w-full align-text-top'
            placeholder='Email'
          />
          <br></br>
          <br></br>
          <input
            type='password'
            className='md:w-search w-searchmobile py-2 focus:border-none focus:outline-none font-normal border-b-2 border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 w-full align-text-top'
            placeholder='Password'
          />
          <br></br>
          <br></br>
          <button className='bg-primary rounded-lg px-5 py-2 w-full'>
            Sign In
          </button>
        </form>
        <br></br>
        <div className='font-normal text-lg'>
          Don't have an account?
          <Link to='/SignUp' className='text-yellow-300'>
            {" "}
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
