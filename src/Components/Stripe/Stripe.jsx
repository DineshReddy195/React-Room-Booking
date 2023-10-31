import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import './Stripe.css'
//import Paypal from '../Paypal/Paypal'

function Stripe() {
  const onToken=(token)=>{
    console.log(token)
  }
  const onClick=(button)=>{
    alert('Button Clicked')
  }
  return (
    <div>
    <div className='stripe-pay'>
       <StripeCheckout
       button={onClick}
        token={onToken}
        name='Beach Resort'
        stripeKey="pk_test_51NM7wZSG90wxmop0JD4ItuBpVw3CDky9lBpaLxYNFE3ToOyuY7dS9O1GMJpveibC9c6APFkkEwCrnPqgfHlNkFsu00R1AufQPR"
      />
    </div>
    </div>
  )
}

export default Stripe
