import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import "../App.css";
const Whatsapp = () => {
  return (
    <div>
        {/* <button>click</button> */}
      <a
            href="https://wa.me/923030108360"
            className="whatsapp_float flex"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            {/* <i className="fa-brands fa-whatsapp fa-2x"></i> */}
            
            {/* <button>click</button> */}
            <FaWhatsapp className='whatsapp-icon'/>
            <p className='text-[15px] mt-5 ms-5'>WhatsApp Me</p>
          </a>
    </div>
  )
}

export default Whatsapp


