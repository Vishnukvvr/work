


import React from 'react'
import { useState } from 'react'

const State = () => {

     const[user,setUser]=useState({
        name:'gowtham',
        id:'58',
        marks:'50'
     })



  return (
    <div>
       <p>my name is {user.name} id is {user.id} my marks is {user.marks}</p>
    </div>
  )
}

export default State