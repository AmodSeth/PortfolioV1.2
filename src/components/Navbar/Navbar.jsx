import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

function Navbar() {
    const [Nav, setNav] = useState(false);

    const links = [
        {
            id:1,
            link: 'Home'
        },
        {
            id:2,
            link: 'About Me'
        },
        {
            id:3,
            link: 'Resume'
        },
        {
            id:4,
            link: 'Projects'
        },
        {
            id:5,
            link: 'Contact'
        }

    ]


  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black
        px-4  fixed'>
        <div className="logoName">
        <h1 className='text-2xl font-Rale ml-2 '>Amod Seth</h1>
        </div>
        <ul className="hidden md:flex">

        {
            links.map((item)=>(
                <li key={item.id} className='navlinks px-4 cursor-pointer capitalize font-medium text-grey hover:scale-105 hover:text-cyan-400 duration-200'>{item.link}</li> 

            ))
        }
          
        
          
        </ul>
        {/* mobile-nav */}
        <div onClick={
            ()=>setNav(!Nav)
        } className="md:hidden cursor-pointer pr-4 z-10 text-grey-400">
           {
            Nav ? <FaTimes size={38}/>: <FaBars size={38}/>
           }
           
          

        </div>
        {
            //short circuit it
            Nav &&
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0  w-full h-screen bg-gradient-to-b from-black to-cyan-200'>
            {
                links.map(({id,link})=>(
                    <li key={id} className='px-4 cursor-pointer capitalize py-6'>{link}</li>
                ))
            }
    
               
    
            </ul>
        }
        
       

    </div>
  )
}

export default Navbar