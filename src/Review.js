import React, { useState } from 'react'
import people from './data'
import { FaQuoteRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Review = () => {
    const[index,setIndex] = useState(0)
    const {id,name,job,image,text} = people[index]
    const clickLeft=()=>{
    if(index==0)
    setIndex(3)
    else
    setIndex(index-1)
    }
    const randomReview=()=>{
        let temp = Math.floor(Math.random()*4)
        while(temp==index){
            temp = Math.floor(Math.random()*4)
            console.log(temp)
        }
        setIndex(temp)
    }
  return (
    <div className='review-container'>
        <div className="image">
            <img className='img' src={image} alt={name} />
            <div className="quote-icon">
                <FaQuoteRight/>
            </div>
        </div>
        <div className="about">
            <h5 className='name'>{name}</h5>
            <p className='job'>{job}</p>
        </div>
        <div className="info">
            <p className='about-me'>
            {text}
            </p>
        </div>
        <div className="btn-container">
            <button className='btn'>
                <FaChevronLeft onClick={clickLeft}/>
            </button>
            <button className='btn'>
                <FaChevronRight onClick={()=>setIndex((index+1)%4)}/>
            </button>
        </div>
        <div className="random">
            <button onClick={randomReview}>Surprise Me</button>
        </div>
    </div>
  )
}

export default Review