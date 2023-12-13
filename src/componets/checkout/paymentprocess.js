import React from 'react'
import debitcard from '../img/debitcard.svg'

const Paymentprocess = (props ) => {
  return (
    <>
        <div className="paymentprocess">
            <ul className='payment-process-options'>
                <li className='payment-option common-14-2 ' >Cards(Debit, Credit)</li>
                <li onClick={()=>props.setnet(false)} className='payment-option common-14-2 ' >UPI Payment</li>
                <li className='payment-option common-14-2 ' onClick={()=>props.setnet(true)}  >NEt Banking</li>
                <li className='payment-option common-14-2 ' >EMI</li>
                <li className='payment-option common-14-2 ' >Cash on delivery</li>
            </ul>
            <img src={debitcard} alt="debitcard" />
        </div>
    </>
  )
}

export default Paymentprocess