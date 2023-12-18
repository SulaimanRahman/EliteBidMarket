import React, { useState, useEffect } from "react";
import { sign_up_image } from "../assets";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "../components";
// import MuiDatePicker from "../components/MuiDatepicker.tsx";

interface UserData {
  username: string;
  password: string;
  name: string;
  dateOfBirth: Date | null;
}

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);

  const [userData, setUserData] = useState<UserData>({
    username: "",
    password: "",
    name: "",
    dateOfBirth: null,
  });

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    //validation
    if (firstName == "") {
      alert("Please enter your first name");
      return;
    } else if (lastName == "") {
      alert("Please enter your last name");
      return;
    } else if (email == "" || email.split("@")[0].length < 3) {
      alert("Please enter a valid email");
      return;
    } else if (password.length < 7) {
      alert("Password must be at least 7 characters");
      return;
    }

    // Prepare data for API request
    setUserData({
      username: email,
      password,
      name: `${firstName} ${lastName}`,
      dateOfBirth,
    });

    setLoading(true);
  };

  useEffect(() => {
    if (loading) {
      const makeApiRequest = async () => {
        try {
          const response = await fetch(import.meta.env.VITE_SIGN_UP_API, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });

          // Handle success or error response
          if (response.status == 200) {
            console.log("User registered successfully");
            alert("Account Created Successfully");
            window.location.href = "/SignIn";
          } else if (response.status == 403) {
            alert("Registration failed: User already exists");
          } else {
            const errorData = await response.json();
            alert(errorData.message || "Registration failed");
          }
        } catch (error) {
          console.error("Error during sign-up:", error);
          alert("Registration failed. Please try again.");
        } finally {
          setLoading(false);
        }
      };

      makeApiRequest();
    }
  }, [loading, userData]);

  return (
    <div className="bg-primary flex flex-col md:flex-row justify-around md:p-10 p-5 text-large md:h-[100vh]">
      {/* Left section for image */}
      <div className="my-30 font-bold flex flex-col w-full text-center text-large justify-between md:mb-10">
        <div className="w-full font-bold text-center rtl:text-left">
          <span className="text-black">Join the </span>
          <span className="text-white">Bidding Community </span>
          <span className="text-black">- Your </span>
          <br></br>
          <span className="text-black">Next Great Auction Awaits!</span>
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
        {loading && <LoadingSpinner />}
        <div className="bg-white font-bold max-h-[750px] justify-center flex md:m-10 rounded-lg flex-col w-signInPad text-center md:min-w-[500px]">
          <h1 className="md:mt-10 mt-5">Register</h1>
          <br />
          <form method="POST" onSubmit={handleSignUp} className="md:mx-10 mx-7">
            <div className="flex w-full md:flex-row flex-col">
              <input
                type="text"
                className="w-full mx-1 py-2 focus:outline-none font-normal border-b-2 border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 align-text-top"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <br />
              <input
                type="text"
                className="w-full mx-1 py-2 focus:outline-none font-normal border-b-2 border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 align-text-top"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <br />

            <input
              type="email"
              className="w-full py-2 focus:outline-none font-normal border-b-2 border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 align-text-top"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <input
              type="password"
              className="w-full py-2 focus:outline-none font-normal border-b-2 border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 align-text-top"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button type="submit" className="bg-primary rounded-lg py-2 w-full">
              Create Account
            </button>
          </form>
          <br />
          <div className="font-normal text-medium md:mb-16 mb-5">
            Already have an account?
            <Link to="/SignIn" className="text-yellow-300">
              {" "}
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
