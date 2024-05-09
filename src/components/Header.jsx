import React,{useState} from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [toggle,setToggle] = useState(false);
  return (
    <>
    
     <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1050px]  mx-auto flex items-center justify-between'>
            <div className='text-3xl font-bold'>Agency Website</div>
            {
                toggle ?
                <IoMdClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                
                :
                <IoMdMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
            }
            
            
            <ul className='hidden md:flex gap-10  text-white'>
                <li>Home</li>
                <li>Company</li>
                <li>Resources</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            {/*Responsive Menu*/}
            <ul className={`duration-300 md:hidden h-screen w-full  fixed bg-black 
                  ${toggle ? 'left-[0%]':'left-[-100%] '}  
            top-[68px]  text-white`}>
                <li className='p-5'>Home</li>
                <li className='p-5'>Company</li>
                <li className='p-5'>Resources</li>
                <li className='p-5'>About</li>
                <li className='p-5'>Contact</li>
            </ul>
        </div>
        
    </div>
    </>
   
  )
}

export default Header



