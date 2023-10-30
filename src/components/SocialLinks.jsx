import React from 'react'
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'





function SocialLinks() {
    const dataList = [
        {
            id:1,
            icon: <FaLinkedin size={30}/>,
            name: "LinkedIn",
            href : 'https://www.linkedin.com/in/AmodSeth/',
            color: 'bg-blue-500',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            icon: <FaGithub size={30}/>,
            name: "GitHub",
            href : 'https://github.com/AmodSeth',
            color: 'bg-grey-200',

        },
        {
            id:3,
            icon: <FaTwitter size={30}/>,
            name: "twitter",
            href : 'https://twitter.com/amod_seth',
            color: 'bg-blue-500',
        },
        {
            id:4,
            icon: <HiOutlineMail size={30}/>,
            name: "Email",
            color: 'bg-red-500',
            style: 'rounded-br-md',
            href : ""
        }
    ]


  return (
    <div className='flex-col top-[35%] left-0 fixed'>
       <ul>
        {
            dataList.map(({id,icon,name,href,color,style})=>(
                <li key={id} className="flex justify-between w-40 h-14 px-4 ml-[-100px]
                hover:ml-[-10px] hover:rounded-xl  duration-300">
                <a href={href} className={'flex justify-between items-center w-full text-white cursor-pointer'+ " " + color + " " + style}>
                <>
                {name} {icon}
                </>
                </a>
            </li>
            ))
        }

       
       </ul>
    </div>
  )
}

export default SocialLinks