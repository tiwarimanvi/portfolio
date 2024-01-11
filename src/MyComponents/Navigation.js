import React from 'react';
import { Link } from 'react-router-dom';

function Navigation()  {
  return (
    <div>
      <div className='flex text-orange-400 text-xl text-center pl-10 pt-4 font-semibold'>
        <h1 className='px-20'>/.\home</h1>
        <h1 className='px-20'>/.\about</h1>
        <h1 className='px-20'>/.\project</h1>
        <h1 className='px-20'>/.\contact</h1>
        <h1 className='px-20'>/.\reviews</h1>
      </div>
    </div>
  );
}

export default Navigation
