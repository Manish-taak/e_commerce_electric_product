import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import right from '../img/Arrowlineright.png'
import Summary from './summary'
import Progressbaroreder from './progressbaroreder'
import Cardaddtocart from '../cardtypes/cardaddtocart'
import Delivaryaddress from '../checkout/delivaryaddress.js'
import Checkoutsignin from '../checkout/checkoutsignin.js'
import Paymentprocess from './paymentprocess.js'
import DebitCredit from './debitCredit.js'
import UpiPayment from './upiPayment.js'
import Emi from './emi.js'
import Cashondelivery from './cashondelivery.js'

const Checkoutmain = ({ note }) => {
  const [section, setSection] = useState(1)
  const [show, setshow] = useState(1)
  const active = (e) => {
    setshow(e)
  }
  let test = show === 1 ? <DebitCredit /> : show === 2 ? <UpiPayment upi={true} /> : show === 3 ? <UpiPayment emi={true} /> : show === 4 ? <Emi /> : show === 5 && <Cashondelivery />
  const { check } = useParams();
  useEffect(() => {
    if (check === "userlogin")
      setSection(1)
  }, [check])

  return (
    <>
      <div className=" container checkoutmain">
        <div className="cartdetalis-heading">
          <h2 className='common-34-1' >Checkout</h2>
          <div className="cartlink">
            <li><Link className='common-16-2' to="/" >Home</Link></li>
            <img src={right} alt="right" />
            <li> <Link className='common-16-2' to="/products" >Checkout</Link> </li>
          </div>
        </div>
        <div className="progress-bar-orderd">
          <Progressbaroreder />
        </div>
        {
          section >= 4 && <Paymentprocess show={show} active={setshow} />
        }
        <div className={` ${show === 4 && 'emImport'} sign-in-cart ` }>
          {
            section === 1 ? <Checkoutsignin /> : section === 2 ? <Delivaryaddress /> : section === 3 ? <Cardaddtocart cartcard={false} ordersummary={true} />
              : section >= 4 && test 
          } 
          <Summary section={section} setsection={setSection} />
        </div>
        { 
          section === 2 &&
          <div className="important-note">
            <h2 className='common-20-1' >Important note</h2>
            <p className='common-16-2' >Consectetur adipiscing elit. At praesent volutpat accumsan non adipiscing. Amet, sed in fames nec tincidunt. Neque vel urna facilisis vel nisl non. Lacinia scelerisque in nunc egestas et. Mauris duis sed pharetra, vulputate ut elit blandit donec. Tristique id a integer malesuada imperdiet tincidunt quis cras faucibus. Erat vitae auctor odio interdum magna non.</p>
            <div className="Buynow-Policy">
              <p style={{ textAlign: "end" }} className='common-16-5' >View Buynow Policy</p>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Checkoutmain