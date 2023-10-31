import React from 'react'
import './Error.css'
import { useNavigate } from 'react-router-dom'

function Error() {
  const navigate=useNavigate()
  const goHome=()=>{
    navigate('/')
  }
  return (
    <div>
      <div className='error-pic'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkjuaCHtdwkToFkspREKsD_FTNvuxsg7CFbg&usqp=CAU' width='300px' alt='error page' className='image-error'/>
      </div>
      <div className='home-button'>
      <button className='btn-primary' onClick={goHome}>Go to Home</button>
      </div>
    </div>
  )
}

export default Error
