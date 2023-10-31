import React, { useState } from 'react'
import './Checkout.css'
import Stripe from '../Stripe/Stripe'

const Checkout = () => {
    // const [input,setInput]=useState('')
    // const [mail,setMail]=useState('')
    // const [number,setNumber]=useState('')
    // const handleSubmit=(event)=>{
    //     if(input===''||input===null){
    //         alert('All fields are required to fill')
    //     }else if(mail===''||mail===null){
    //         alert('All fields are required to fill')
    //     }else if(number===''||number===null){
    //         alert('All fields are required to fill')
    //     }else if(number.length>10){
    //         alert('Phone number should be 10 digits')
    //     }
    // }
  return (
    <div className='checkout'>
      <div className='payout-pic'>
        <img src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/304616595.jpg?k=fd72d44b9e77582f9843647fd64ded4dfe1de6cba459f6de2e1a3fee476c9538&o=&hp=1' alt='payout' className='payout' height='450px' width='400px'/>
        </div>
        {/* <div className="form">
            <form className='input' onSubmit={handleSubmit}>
            <h2 className='display-6'>Billing Address</h2>
                <label>Full Name</label>&nbsp;&nbsp;
                <input type='text' value={input} placeholder='Enter your name' required className='form-control' onChange={(event)=>{setInput(event.target.value)}}/><br/><br/>
                <label>Email</label>&nbsp;&nbsp;
                <input type='email' placeholder='Enter your mail id' value={mail} required className='form-control'onChange={(event)=>{setMail(event.target.value)}}/><br/><br/>
                <label>Phone Number</label>&nbsp;&nbsp;
                <input type='number' value={number} placeholder='Enter your phone number' required className='form-control' onChange={(event)=>{setNumber(event.target.value)}}/>
                <div className="buttons">
                    <button type="submit" className='btn'><Stripe/></button>
                </div>
            </form>
      </div> */}
      <div>
        <button className='btn'><Stripe/></button>
      </div>
    </div>
  )
}

export default Checkout
