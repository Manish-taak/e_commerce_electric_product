import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import right from '../img/Arrowlineright.png'
import Summary from './summary'
import Progressbaroreder from './progressbaroreder'
import Cardaddtocart from '../cardtypes/cardaddtocart'
import Delivaryaddress from '../checkout/delivaryaddress.js'
import Saveaddress from '../checkout/saveaddress.js'
import Checkoutsignin from '../checkout/checkoutsignin.js'
import Paymentprocess from './paymentprocess.js'
import DebitCredit from './debitCredit.js'
import UpiPayment from './upiPayment.js'
import NetBanking from './netBanking.js'
import Emi from './emi.js'
import Cashondelivery from './cashondelivery.js'
import Otp from '../verifyprocess/otp.js'


const Checkoutmain = ({ note }) => {
  const [section, setsection] = useState(1)
const [net,setnet] = useState("")

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
          <Progressbaroreder/>
        </div>
        {
          section === 5 ? <Paymentprocess  net={net} setnet={setnet}/>:""
        }
        <div className="sign-in-cart">
          {
            section === 1 ? <Checkoutsignin /> : section === 2 ? <Delivaryaddress /> : section === 3 ? <Saveaddress /> : section === 4 ? <Cardaddtocart cartcard={false} ordersummary={true} /> :
            // <DebitCredit/>
            // <UpiPayment net={net} setnet={setnet}  />
            // <Emi/>
            // <Cashondelivery/>
            <Otp/>
          }
          <Summary section={section} setsection={setsection} />
        </div>
        {
          note === true &&
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