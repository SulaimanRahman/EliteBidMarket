import { useEffect, useRef, useState } from "react";
import { sign_in_image } from "../assets";
import { Link } from "react-router-dom";
import { signInUser } from "../Helper";
import { LoadingSpinner } from "../components";

const SignIn = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user-token")) {
      console.log("User is logged in");
      console.log(localStorage.getItem("user-token"));
    }
  }, []);

  const handleSignIn = async () => {
    if (email.current !== null && password.current !== null) {
      setIsLoading(true);
      const userData = {
        username: email.current.value,
        password: password.current.value,
      };

      try {
        const responseData = await signInUser(userData);
        if (responseData) {
          setIsLoading(false);
        }
        // Handle the success case
        console.log("Sign-in successful:", responseData);
      } catch (error) {
        // Handle the error case
        alert("Login Failed");
        console.error("Sign-in failed:", error);
      }
    } else {
      console.log("Please enter email and password");
    }
  };

  return (
    <div className="bg-primary flex flex-col md:flex-row justify-around md:p-10 p-5 text-large md:h-[100vh]">
      {isLoading && <LoadingSpinner />}
      {/* Left section for image */}
      <div className="my-30 font-bold flex flex-col w-full text-center text-large justify-between  md:mb-10">
        <div className="w-full font-bold text-center rtl:text-left">
          <span className="text-black">Welcome Back! Instant Access to</span>
          <br></br>
          <span className="text-white">Exciting Auctions</span>
        </div>
        <center>
          <img
            src={sign_in_image}
            className="App-logo w-image object-center"
            alt="logo"
          />
        </center>
      </div>

      {/* Right section for form */}
      <div className="flex w-full justify-center">
        <div className="bg-white font-bold max-h-[650px] justify-center flex md:m-10 rounded-lg flex-col w-signInPad text-center md:min-w-[500px]">
          <h1 className="md:mt-10 mt-5">Sign in</h1>
          <br></br>
          <form method="POST" className="md:mx-10 mx-7">
            <input
              ref={email}
              type="email"
              className="w-full py-2 focus:outline-none font-normal border-b-2 border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 align-text-top"
              placeholder="Email"
            />
            <br></br>
            <br></br>
            <input
              ref={password}
              type="password"
              className="w-full py-2 focus:outline-none font-normal border-b-2 border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 align-text-top"
              placeholder="Password"
            />
            <br></br>
            <br></br>
            <button
              type="button"
              className="bg-primary rounded-lg py-2 w-full"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </form>
          <br></br>
          <div className="font-normal text-medium md:mb-16 mb-10">
            Don't have an account?
            <Link to="/SignUp" className="text-yellow-300">
              {" "}
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
