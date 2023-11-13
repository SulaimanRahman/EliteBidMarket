import React from "react"
import { Listing, Footer, Filter } from "../components"
import { lamborghini, filter_icon } from "../assets"

const Buy = () => {
  return (
    <div>
      <div className='flex md:m-10 m-5 gap-2'>
        <img
          src={filter_icon}
          alt='filter icon'
          className='w-[35px] object-contain'
        />
        <Filter />
      </div>
      <div className='flex flex-wrap xs:justify-start justify-center md:my-10 my-5 md:mx-10 mx-5 gap-10'>
        <div className='min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg'>
          <Listing
            image={lamborghini}
            auctioneerName='Thomas Jerry'
            verified={false}
            title='2016 Lamborghini Huracán'
            currentBid='$1.9 million'
            endTime='01:29:35'
          />
        </div>
        <div className='min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg'>
          <Listing
            image={lamborghini}
            auctioneerName='Thomas Jerry'
            verified={false}
            title='2016 Lamborghini Huracán'
            currentBid='$1.9 million'
            endTime='01:29:35'
          />
        </div>
        <div className='min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg'>
          <Listing
            image={lamborghini}
            auctioneerName='Thomas Jerry'
            verified={false}
            title='2016 Lamborghini Huracán'
            currentBid='$1.9 million'
            endTime='01:29:35'
          />
        </div>
        <div className='min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg'>
          <Listing
            image={lamborghini}
            auctioneerName='Thomas Jerry'
            verified={false}
            title='2016 Lamborghini Huracán'
            currentBid='$1.9 million'
            endTime='01:29:35'
          />
        </div>
        <div className='min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg'>
          <Listing
            image={lamborghini}
            auctioneerName='Thomas Jerry'
            verified={false}
            title='2016 Lamborghini Huracán'
            currentBid='$1.9 million'
            endTime='01:29:35'
          />
        </div>
        <div className='min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg'>
          <Listing
            image={lamborghini}
            auctioneerName='Thomas Jerry'
            verified={false}
            title='2016 Lamborghini Huracán'
            currentBid='$1.9 million'
            endTime='01:29:35'
          />
        </div>
        <div className='min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg'>
          <Listing
            image={lamborghini}
            auctioneerName='Thomas Jerry'
            verified={false}
            title='2016 Lamborghini Huracán'
            currentBid='$1.9 million'
            endTime='01:29:35'
          />
        </div>
        <div className='min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg'>
          <Listing
            image={lamborghini}
            auctioneerName='Thomas Jerry'
            verified={false}
            title='2016 Lamborghini Huracán'
            currentBid='$1.9 million'
            endTime='01:29:35'
          />
        </div>
        <div className='min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg'>
          <Listing
            image={lamborghini}
            auctioneerName='Thomas Jerry'
            verified={false}
            title='2016 Lamborghini Huracán'
            currentBid='$1.9 million'
            endTime='01:29:35'
          />
        </div>
        <div className='min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg'>
          <Listing
            image={lamborghini}
            auctioneerName='Thomas Jerry'
            verified={false}
            title='2016 Lamborghini Huracán'
            currentBid='$1.9 million'
            endTime='01:29:35'
          />
        </div>
        <div className='min-w-listingxs md:min-w-listingmd lg:min-w-listinglg max-w-listingxs md:max-w-listingmd lg:max-w-listinglg'>
          <Listing
            image={lamborghini}
            auctioneerName='Thomas Jerry'
            verified={false}
            title='2016 Lamborghini Huracán'
            currentBid='$1.9 million'
            endTime='01:29:35'
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Buy
