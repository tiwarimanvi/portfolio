import React from 'react'

import Navigation from './Navigation';

function About_page(){
  
  return (
    
    <div className='bg-zinc-950  bg-cover h-screen'>
      <Navigation/>
  
      <div className='text-5xl font-bold p-5 pt-10 pb-10 text-white'>here is<br/> what i learnt and <br/>what i am learning</div>
     
    <div className='flex px-52'> 
      <div class="box-content h-64 w-64 p-4 border-4 text-center text-white font-medium font-serif text-2xl">
        <h1>Django</h1>
        </div>
      <div class="box-content h-64 w-64 p-4 border-4  ...">about</div>
      <div class="box-content h-64 w-64 p-4 border-4 ...">about</div>
    </div>
    </div>
  );
}
export default About_page
