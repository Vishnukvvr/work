import React from 'react'
import './Text.css'
import image from './Images/image1.png'


function Text(){
    return(
        <>
            <h1 className='student'>i am student</h1>
            <img src={image} alt="" className='image'/>
         </>
    )
}

export default Text;