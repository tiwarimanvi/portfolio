import React from 'react'
import './Page1.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import Navigation from './Navigation.js';


function Page1()  {
  return (
    
    <div className="background-container">
      <Navigation></Navigation>
      <div className='pt-52 flex'>
      <div class="social-container pl-9 pt-16 pr-48">
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social pb-4">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a><br/>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social pb-4">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a><br/>
      <a href="https://www.instagram.com/learnbuildteach"
        className="linkedin social pb-4">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a><br/>
</div>
<span class="relative flex h-4 w-4">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-4 w-4 bg-yellow-400"></span>
</span>
<div>
    <div className='text-9xl font-bold text-center text-white hover:animate-pulse'>Manvi Tiwari</div>  
    <div className='text-4xl text-center font-semibold pt-12 text-white animate-pulse'>web developer | software engineer</div>
    </div>
    </div>
    </div>
  );
}

export default Page1
