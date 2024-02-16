import React from 'react'
import SectionHeading from '../snippets/sectionHeading'
import orderd from '../componets/img/orderd.svg'

const Order = () => {
    const data = [
        {
            id: "1",
            name: "Boat Rockerz 425 Bluetooth Wireless",
            img: "orderd.svg",
            orderid: "12345678901",
            date: "Dec 30, 2019 05:18",
            tatal: "$450.00",
            Status: "Delivered"
        },
        {
            id: "2",
            name: "Boat Rockerz 425 Bluetooth Wireless",
            img: "orderd.svg",
            orderid: "12345678901",
            date: "Dec 30, 2019 05:18",
            tatal: "$450.00",
            Status: "Pending"
        },
        {
            id: "3",
            name: "Boat Rockerz 425 Bluetooth Wireless",
            img: "orderd.svg",
            orderid: "12345678901",
            date: "Dec 30, 2019 05:18",
            tatal: "$450.00",
            Status: "Cancelled"
        },
        {
            id: "4",
            name: "Boat Rockerz 425 Bluetooth Wireless",
            img: "orderd.svg",
            orderid: "12345678901",
            date: "Dec 30, 2019 05:18",
            tatal: "$450.00",
            Status: "Pending"
        },
        {
            id: "5",
            name: "Boat Rockerz 425 Bluetooth Wireless",
            img: "orderd.svg",
            orderid: "12345678901",
            date: "Dec 30, 2019 05:18",
            tatal: "$450.00",
            Status: "Cancelled"
        },
        {
            id: "6",
            name: "Boat Rockerz 425 Bluetooth Wireless",
            img: "orderd.svg",
            orderid: "12345678901",
            date: "Dec 30, 2019 05:18",
            tatal: "$450.00",
            Status: "Delivered"
        },
    ]
    return (
        <>
            <div className="order container ">
                <div className="order-heading">
                    <SectionHeading head={"My orders"} link1={"Home"} link2={"Orders"} />
                    <div className="help-second-child">
                        <div className="help-input">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.5445 11.0222C16.5445 14.0721 14.0721 16.5445 11.0222 16.5445C7.97238 16.5445 5.5 14.0721 5.5 11.0222C5.5 7.97238 7.97238 5.5 11.0222 5.5C14.0721 5.5 16.5445 7.97238 16.5445 11.0222ZM15.5848 17.0033C14.3192 17.9701 12.7378 18.5445 11.0222 18.5445C6.86782 18.5445 3.5 15.1766 3.5 11.0222C3.5 6.86782 6.86782 3.5 11.0222 3.5C15.1766 3.5 18.5445 6.86782 18.5445 11.0222C18.5445 12.7379 17.9701 14.3193 17.0032 15.5849L20.2083 18.79C20.5988 19.1805 20.5967 19.8158 20.2062 20.2063C19.8157 20.5968 19.1804 20.5989 18.7899 20.2084L15.5848 17.0033Z" fill="#574B9B" fillOpacity="0.54" />
                            </svg>
                            <input className='input-help' type="text" placeholder='Search' />
                        </div>
                    </div>
                </div>
                <div className="order-data">
                    <p className='common-20-1' >My Orders</p>
                    <div className="order-details-tables">
                        <table className='order-list-table' >
                            <tr className='order-data-list'  >
                                <td style={{ width: "233px", padding: "14px 10px 10px 14px", textTransform: "capitalize" }} className='common-14-2' >Order</td>
                                <td style={{ width: "233px", padding: "14px 10px 10px 14px", textTransform: "capitalize" }} className='common-14-2' >Order ID</td>
                                <td style={{ width: "233px", padding: "14px 10px 10px 14px", textTransform: "capitalize" }} className='common-14-2' >Date</td>
                                <td style={{ width: "233px", padding: "14px 10px 10px 14px", textTransform: "capitalize" }} className='common-14-2' >Tatal</td>
                                <td style={{ width: "160px", padding: "14px 10px 10px 14px", textTransform: "capitalize" }} className='common-14-2' >Status</td>
                            </tr>
                            {/* <tr className='common-14-4'>
                                <th style={{ width: "233px" }} >Order</th>
                                <th style={{ width: "233px" }} >Order ID</th>
                                <th style={{ width: "233px" }} >Date</th>
                                <th style={{ width: "233px" }} >Tatal</th>
                                <th style={{ width: "160px" }} >Status</th>
                            </tr> */}
                            {
                                data.map((item, index) => {
                                    return (
                                        <React.Fragment key={Date.now() + index} >
                                            <tr className='order-data-list' >
                                                <td style={{ width: "233px", padding: "14px 10px 10px 14px " }} className="table-order-td" > <img src={require(`../componets/img/${item.img}`)} alt="orderd" /> <p className=' common-14-4 products-details-order' >Boat Rockerz 425 Bluetooth Wireless</p></td>
                                                <td style={{ width: "233px", padding: "14px 10px 10px 14px " }} className='common-14-2' >{item.orderid}</td>
                                                <td style={{ width: "233px", padding: "14px 10px 10px 14px " }} className='common-14-4' >{item.date}</td>
                                                <td style={{ width: "233px", padding: "14px 10px 10px 14px " }} className='common-14-2' >{item.tatal}</td>
                                                {
                                                    item.Status === "Delivered" ? <td style={{ width: "160px" }} className=' oreder-btns Delivered' >Delivered</td> : item.Status === "Pending" ? <td style={{ width: "160px" }} className=' oreder-btns Pending ' >Pending</td> : item.Status === "Cancelled" ? <td style={{ width: "160px" }} className='oreder-btns Cancelled ' >Cancelled</td> : ""
                                                }
                                            </tr>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order