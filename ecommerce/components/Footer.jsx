import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p> &copy;2023 Tokabam Store All rights Reserved</p>
      <p className='icons'>
        <span className='one'><AiFillInstagram /></span> 
        <span className='two'><AiOutlineTwitter /></span>    
      </p>
    </div>
  )
}

export default Footer