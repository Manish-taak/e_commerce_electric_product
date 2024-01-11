import React, { useState } from 'react'
import debitcard from '../img/debitcard.svg'
import upi from '../img/upiimage.svg'
import netbankingimage from '../img/netimage.svg'
import emiImage from '../img/emiImage.svg'
import cashon from '../img/cashonimage.svg'
import DebitCredit from './debitCredit'
import UpiPayment from './upiPayment'
import Emi from './emi'
import Cashondelivery from './cashondelivery'
import Scanqr from '../verifyprocess/scanqr'
import NetBanking from './netBanking'



const Paymentprocess = ({ active, show }) => {
  return (
    <>
      <div className="paymentprocess">
        <ul className='payment-process-options'>
          <li onClick={() => active(1)} className={`${show === 1 && "active-border"} payment-option  common-14-2`}>Cards(Debit, Credit)</li>
          <li onClick={() => active(2)} className={`${show === 2 && "active-border"} payment-option  common-14-2`} >UPI Payment</li>
          <li onClick={() => active(3)} className={`${show === 3 && "active-border"} payment-option  common-14-2`}   >NEt Banking</li>
          <li onClick={() => active(4)} className={`${show === 4 && "active-border"} payment-option  common-14-2`} >EMI</li>
          <li onClick={() => active(5)} className={`${show === 5 && "active-border"} payment-option  common-14-2`} >Cash on delivery</li>
        </ul>
        {
          show === 1 ? <img src={debitcard} alt="debitcard" /> : show === 2 ? <img src={upi} alt="upi" /> : show === 3 ? <img src={netbankingimage} alt="netbankingimage" /> : show === 4 ? <img src={emiImage} alt="emiImage" /> : show === 5 && <img src={cashon} alt="cashon" />
        }
      </div>
    </>
  )
}

export default Paymentprocess