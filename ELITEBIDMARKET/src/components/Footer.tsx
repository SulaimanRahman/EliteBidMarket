// import React from "react"
import { facebook_icon, instagram_icon, twitter_icon } from "../assets"

const Footer = () => {
  return (
    <div className='bg-secondary text-white flex flex-col py-10 items-center'>
      <div className='flex justify-center md:gap-10 gap-5'>
        <div className='max-w-socialmedia cursor-pointer'>
          <img src={facebook_icon} alt='Facebook' className='object-contain' />
        </div>
        <div className='max-w-socialmedia cursor-pointer'>
          <img src={instagram_icon} alt='Facebook' className='object-contain' />
        </div>
        <div className='max-w-socialmedia cursor-pointer'>
          <img src={twitter_icon} alt='Facebook' className='object-contain' />
        </div>
      </div>
      <div className='md:mt-10 mt-5 font-semibold text-footertext'>
        @ 2023 Elite Bid Market (EBM)
      </div>
      <div className='mt-2 font-semibold text-footertext'>
        Privacy Policy | Terms of Service
      </div>
    </div>
  )
}

export default Footer
