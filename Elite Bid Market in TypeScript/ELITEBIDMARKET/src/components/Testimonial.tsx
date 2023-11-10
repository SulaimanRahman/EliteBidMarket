import React from 'react'
import {three_stars_icon} from '../assets'

interface TestimonialProps {
    comment: string;
    name: string;
}

const Testimonial = (props: TestimonialProps) => {
  return (
    <div className='flex flex-col text-center items-center max-w-testimonial'>
        <div>
            <img src={three_stars_icon} alt="Three Stars Image" className='object-contain md:max-w-[200px] sm:max-w-[150px] max-w-[100px]' />
        </div>
        <div className='text-testimonial italic text-center'>
            {props.comment}
        </div>
        <div className='text-testimonial italic text-center text-primary mt-3'>
            {props.name}
        </div>
    </div>
  )
}

export default Testimonial
