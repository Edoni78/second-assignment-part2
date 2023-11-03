import React from 'react'
import {IoIosArrowDown} from 'react-icons/io';
import './toggle.css'
import { useState } from 'react';

const ToggleState = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
        if(toggle){
          document.getElementById("icona").style.transform = "";
        }else{
          document.getElementById("icona").style.transform = "rotate(180deg)"
          
        }
    }


  return (
    <div className='container'>

      <div className='content'>

        <div className='content-header'>
        <h4>Why park a domain name in Parkname</h4>

        <div className='icon'>
            <IoIosArrowDown id='icona' onClick={handleToggle}/>
        </div>

        </div>

      


        {
            toggle && (
            <div className='content2'>
        <div className='content-main'>
            <p className='content-text'>Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success</p>
        </div>

      

      </div>
            )

        }
        
      </div>
        

       
     
    </div>
  )
}

export default ToggleState
