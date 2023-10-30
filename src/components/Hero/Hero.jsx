import React,{useState} from 'react'
import headerImg from '../../assets/headerImg.png';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import TextTransition, { presets } from 'react-text-transition';    


const textList = [
    'fullstack',
    'flutter',
    'backend',
]

function Hero() {
    const [Index, setIndex] = useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((Index) => Index + 1),
          3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);


  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to bg-gray-950'>
        <div className='left_section
            max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full
            px-4 md:flex-row md:justify-between md:px-0 '>
            <div className='left_section_container text-white flex flex-col justify-center  h-full' >
       
                <h2 className='text-4xl md:text-7xl font-bold  '>
                    I'm a <span className='text-cyan-400  '>


                    {/* transitioning */}


                    {/* <TextTransition springConfig={presets.gentle} >{textList[Index % textList.length]}</TextTransition> */}

                    
                    FullStack

                        </span> Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, illo accusantium minus exercitationem voluptatem architecto non quibusdam, quidem, quas voluptatum voluptates. Quisquam, voluptatum. Quisquam, voluptatum.
                </p>
                <div>
                <button className='group w-fit px-6 py-3 my-2 flex items-center  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105
                 duration-200 
                    cursor-pointer
                '>
                Portfolio 
                <span className='group-hover:rotate-90 duration-500'>
                <MdOutlineKeyboardArrowRight />
                </span>
            </button>

                </div>
            </div>

            <div className='right_section_container'>
                <img src={headerImg} alt="headerImg" />
            </div>
        
        </div>

    </div>
    


  )
}

export default Hero