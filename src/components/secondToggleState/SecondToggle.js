import React from 'react'
import './SecondToggle.css'
import {IoIosArrowDown} from 'react-icons/io'
import {BiSolidUser} from 'react-icons/bi'
import { useState } from 'react'
import {AiOutlineRight} from 'react-icons/ai'

const SecondToggle = () => {

    const [secToggle, secSetToggle] = useState(false);
    const handleSecondToggle = () => {
        secSetToggle(!secToggle)
        if(secToggle){
          document.getElementById("icon-g").style.transform = "";
        }else{
          document.getElementById("icon-g").style.transform = "rotate(180deg)"
          
        }
    }

    const [toggle1,setToggle1] = useState(false);
    const handleToggle1 = () => {
        setToggle1(!toggle1);
        if(toggle1){
            document.getElementById("icon1").style.transform = "";
          }else{
            document.getElementById("icon1").style.transform = "rotate(-90deg)"
            
          }
    }
    const [toggle2,setToggle2] = useState(false);
    const handleToggle2 = () => {
        setToggle2(!toggle2);
        if(toggle2){
            document.getElementById("icon2").style.transform = "";
          }else{
            document.getElementById("icon2").style.transform = "rotate(-90deg)"
            
          }
    }
    const [toggle3,setToggle3] = useState(false);
    const handleToggle3 = () => {
        setToggle3(!toggle3);
        if(toggle3){
            document.getElementById("icon3").style.transform = "";
          }else{
            document.getElementById("icon3").style.transform = "rotate(-90deg)"
            
          }
    }
    const [toggle4,setToggle4] = useState(false);
    const handleToggle4 = () => {
        setToggle4(!toggle4);
        if(toggle4){
            document.getElementById("icon4").style.transform = "";
          }else{
            document.getElementById("icon4").style.transform = "rotate(-90deg)"
            
          }
    }



  return (
    <div className='container'>
       <div className='content3'>

        <div className='contentHeader'>
            <div className='aboutUs'>
            <div className='img-holder'>
                <div ><BiSolidUser className='img'/></div>
                </div>   

            <div className='text-holder'>
                <h4>About Us</h4>
            </div>
            </div>
           

        <div className='icon'>
            <IoIosArrowDown id='icon-g' className="icon-bg" onClick={handleSecondToggle} />
        </div>

        </div>

        {
            secToggle && (
                <div className='box'>
                    <div className='box-content box-content1' >

                        <div className='box-stands'>

                        <div className='box1-container'>
                            <p>How does parkname seperate itself from other domain name parking companies</p>
                        </div>

                        <div className='right-arrow'>
                            <AiOutlineRight id='icon1' className='icon icon1' onClick={handleToggle1}/>
                        </div>

                        </div>

                       
                       

                    {
                        toggle1 && (
                            <div className='rendered-text'>
                                <p>Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitabile. Do you own more than 1,000 domains? As a proffesional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio</p>
                                </div>
                        )
                    }
                        

                    </div>

                    <div className='box-content box-content1' >

                        <div className='box-stands'>

                        <div className='box1-container'>
                            <p>Is Parkname Parking actually free?</p>
                        </div>

                        <div className='right-arrow'>
                            <AiOutlineRight id='icon2' className='icon icon2' onClick={handleToggle2}/>
                        </div>
                        
                        </div>

                       
                       

                    {
                        toggle2 && (
                            <div className='rendered-text'>
                            <p>Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitabile. Do you own more than 1,000 domains? As a proffesional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio</p>
                            </div>
                        )
                    }
                        

                    </div>
                    <div className='box-content box-content1' >

                        <div className='box-stands'>

                        <div className='box1-container'>
                            <p>What you do?</p>
                        </div>

                        <div className='right-arrow'>
                            <AiOutlineRight id='icon3' className='icon icon3' onClick={handleToggle3}/>
                        </div>
                        
                        </div>

                       
                       

                    {
                        toggle3 && (
                            <div className='rendered-text'>
                            <p>Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitabile. Do you own more than 1,000 domains? As a proffesional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio</p>
                            </div>
                        )
                    }
                        

                    </div>
                   <div className='box-content box-content1' >

                        <div className='box-stands'>

                        <div className='box1-container'>
                            <p>When was Parking first founded? </p>
                        </div>

                        <div className='right-arrow'>
                            <AiOutlineRight id='icon4' className='icon icon4' onClick={handleToggle4}/>
                        </div>
                        
                        </div>

                       
                       

                    {
                        toggle4 && (
                            <div className='rendered-text'>
                                <p>Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitabile. Do you own more than 1,000 domains? As a proffesional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio</p>
                                </div>
                        )
                    }
                        

                    </div>
                </div>
            )
        }
    </div>
    </div>
  )
}

export default SecondToggle
