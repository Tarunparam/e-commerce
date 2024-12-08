import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on your Email</h1>
        <p>Subcribe to our newsletter and stay updated </p>
        <div>
            <input type="email" placeholder='Your email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter