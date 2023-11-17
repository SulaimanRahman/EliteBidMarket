import React, { useState, useEffect } from "react"
import { sign_up_image } from "../assets"
import { Link, useNavigate } from "react-router-dom"
import MuiDatePicker from "../components/MuiDatepicker.tsx"

interface UserData {
  username: string
  password: string
  name: string
  dateOfBirth: Date | null
}

const SignUp = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null)
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()

  const [userData, setUserData] = useState<UserData>({
    username: "",
    password: "",
    name: "",
    dateOfBirth: null,
  })

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (password.length < 7) {
      setError("Password must be at least 7 characters")
      return
    }

    // Prepare data for API request
    setUserData({
      username: email,
      password,
      name: `${firstName} ${lastName}`,
      dateOfBirth,
    })

    setLoading(true)
  }

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
          })

          // Handle success or error response
          if (response.ok) {
            console.log("User registered successfully")

            navigate("/")
          } else {
            const errorData = await response.json()
            setError(errorData.message || "Registration failed")
          }
        } catch (error) {
          console.error("Error during sign-up:", error)
          setError("Registration failed. Please try again.")
        } finally {
          setLoading(false)
        }
      }

      makeApiRequest()
    }
  }, [loading, userData])

  return (
    <div className='bg-primary flex flex-col md:flex-row justify-around md:p-10 p-5 text-large md:h-[100vh]'>
      {/* Left section for image */}
      <div className='my-30 font-bold flex flex-col w-full text-center text-large justify-between md:mb-10'>
        <div className='w-full font-bold text-center rtl:text-left'>
          <span className='text-black'>Join the </span>
          <span className='text-white'>Bidding Community </span>
          <span className='text-black'>- Your </span>
          <br></br>
          <span className='text-black'>Next Great Auction Awaits!</span>
        </div>
        <center>
          <img
            src={sign_up_image}
            className='App-logo w-image object-center'
            alt='logo'
          />
        </center>
      </div>

      {/* Right section for form */}
      <div className='flex w-full justify-center'>
        <div className='bg-white font-bold max-h-[650px] justify-center flex md:m-10 rounded-lg flex-col w-signInPad text-center md:min-w-[500px]'>
          <h1 className='md:mt-10 mt-5'>Register</h1>
          <br />
          <form method='POST' onSubmit={handleSignUp} className='md:mx-10 mx-7'>
            <input
              type='text'
              className='w-[250px] mx-1 py-2 focus:outline-none font-normal border-b-2 border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 align-text-top'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type='text'
              className='w-[250px] mx-1 py-2 focus:outline-none font-normal border-b-2 border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 align-text-top'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <br />
            <br />

            <input
              type='email'
              className='w-full py-2 focus:outline-none font-normal border-b-2 border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 align-text-top'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <input
              type='password'
              className='w-full py-2 focus:outline-none font-normal border-b-2 border-black placeholder:text-placeholder md:placeholder:px-3 placeholder:px-1 align-text-top'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button type='submit' className='bg-primary rounded-lg py-2 w-full'>
              Create Account
            </button>
          </form>
          <br />
          <div className='font-normal text-medium md:mb-16 mb-10'>
            Already have an account?
            <Link to='/SignIn' className='text-yellow-300'>
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
