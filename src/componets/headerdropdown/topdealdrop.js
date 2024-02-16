import React, { Fragment } from 'react'
import Adddropdowntopdeals from '../cardtypes/adddropdowntopdeals'

const Topdealdrop = () => {

  // Dodaydeals
  const Dodaydeals = [
    {
      id: "1",
      name: "Mobile phone"
    },
    {
      id: "2",
      name: "Laptop"
    },
    {
      id: "3",
      name: "Watches"
    },
    {
      id: "4",
      name: "Shoes for man"
    },
    {
      id: "5",
      name: "Shoes girls"
    },
    {
      id: "6",
      name: "Grooming"
    },
  ]
  // Monthlydeals
  const Monthlydeals = [
    {
      id: "1",
      name: "Baby toys"
    },
    {
      id: "2",
      name: "Sports shoes"
    },
    {
      id: "3",
      name: "Shoes for man"
    },
    {
      id: "4",
      name: "Shoes girls"
    },
    {
      id: "5",
      name: "Gaming"
    },
    {
      id: "6",
      name: "Toys"
    },
  ]
  // Alldeals
  const Alldeals = [
    {
      id: "1",
      name: "Jeckets"
    },
    {
      id: "2",
      name: "Tunk"
    },
    {
      id: "3",
      name: "Jeans pant"
    },
    {
      id: "4",
      name: "Shirt"
    },
    {
      id: "5",
      name: "Grooming"
    },
    {
      id: "6",
      name: "Formal shirt"
    },
  ]
  // Membershipsdeals
  const Membershipsdeals = [
    {
      id: "1",
      name: "Clothing"
    },
    {
      id: "2",
      name: "All shoes"
    },
    {
      id: "3",
      name: "Watches"
    },
    {
      id: "4",
      name: "Jewelry"
    },
    {
      id: "5",
      name: "Hand bags"
    },
    {
      id: "6",
      name: "Accessories"
    },
  ]

  return (
    <>
      <div className="dropdown">
        <div className="dropbtn common-16-1 nav-item dropdowncategory ">Top deals</div>
        <div className="dropdown-content settexttopdeals ">
          <div className="topdeals-main">
            <div className="topdeals">
              <div className=" hotoffer-main seconds-heading-left-side  link-pages-drop  ">
                <h2 className=' heading-top common-16-3' >Doday’s deals</h2>
                <ul className='link-pages-drop' >
                  {
                    Dodaydeals.map((item, index) => {
                      return (
                        <Fragment key={Date.now() + index}  >
                          <li className=' hotofferli pageli dropdowncategory' >{item.name}
                            <svg className='hover-right-icon' xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                              <path d="M0.294703 11.2946C-0.0945693 10.9053 -0.0949132 10.2743 0.293935 9.88462L3.46529 6.70634C3.85479 6.31599 3.85479 5.68401 3.46529 5.29366L0.293934 2.11538C-0.0949135 1.72569 -0.0945692 1.09466 0.294703 0.705384C0.684276 0.315811 1.3159 0.315811 1.70547 0.705384L6.29298 5.29289C6.68351 5.68342 6.68351 6.31658 6.29298 6.70711L1.70547 11.2946C1.3159 11.6842 0.684276 11.6842 0.294703 11.2946Z" fill="#67517A" />
                            </svg>
                          </li>
                        </Fragment>
                      )
                    })
                  }
                </ul>
              </div>
              <div className=" hotoffer-main seconds-heading-left-side  link-pages-drop  ">
                <h2 className=' heading-top common-16-3' >Monthly deals</h2>
                <ul className='link-pages-drop' >
                  {
                    Monthlydeals.map((item, index) => {
                      return (
                        <Fragment key={Date.now() + index} >
                          <li className=' hotofferli pageli dropdowncategory' >{item.name}
                            <svg className='hover-right-icon' xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                              <path d="M0.294703 11.2946C-0.0945693 10.9053 -0.0949132 10.2743 0.293935 9.88462L3.46529 6.70634C3.85479 6.31599 3.85479 5.68401 3.46529 5.29366L0.293934 2.11538C-0.0949135 1.72569 -0.0945692 1.09466 0.294703 0.705384C0.684276 0.315811 1.3159 0.315811 1.70547 0.705384L6.29298 5.29289C6.68351 5.68342 6.68351 6.31658 6.29298 6.70711L1.70547 11.2946C1.3159 11.6842 0.684276 11.6842 0.294703 11.2946Z" fill="#67517A" />
                            </svg>
                          </li>
                        </Fragment>
                      )
                    })
                  }
                </ul>
              </div>
              <div className=" hotoffer-main seconds-heading-left-side  link-pages-drop  ">
                <h2 className=' heading-top common-16-3' >All deals</h2>
                <ul className='link-pages-drop' >
                  {
                    Alldeals.map((item, index) => {
                      return (
                        <Fragment key={Date.now() + index} >
                          <li className=' hotofferli pageli dropdowncategory' >{item.name}
                            <svg className='hover-right-icon' xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                              <path d="M0.294703 11.2946C-0.0945693 10.9053 -0.0949132 10.2743 0.293935 9.88462L3.46529 6.70634C3.85479 6.31599 3.85479 5.68401 3.46529 5.29366L0.293934 2.11538C-0.0949135 1.72569 -0.0945692 1.09466 0.294703 0.705384C0.684276 0.315811 1.3159 0.315811 1.70547 0.705384L6.29298 5.29289C6.68351 5.68342 6.68351 6.31658 6.29298 6.70711L1.70547 11.2946C1.3159 11.6842 0.684276 11.6842 0.294703 11.2946Z" fill="#67517A" />
                            </svg>
                          </li>
                        </Fragment>
                      )
                    })
                  }
                </ul>
              </div>
              <div className=" hotoffer-main seconds-heading-left-side  link-pages-drop  ">
                <h2 className=' heading-top common-16-3' >Memberships deals</h2>
                <ul className='link-pages-drop' >
                  {
                    Membershipsdeals.map((item, index) => {
                      return (
                        <Fragment key={Date.now() + index}  >
                          <li className=' hotofferli pageli dropdowncategory' >{item.name}
                            <svg className='hover-right-icon' xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                              <path d="M0.294703 11.2946C-0.0945693 10.9053 -0.0949132 10.2743 0.293935 9.88462L3.46529 6.70634C3.85479 6.31599 3.85479 5.68401 3.46529 5.29366L0.293934 2.11538C-0.0949135 1.72569 -0.0945692 1.09466 0.294703 0.705384C0.684276 0.315811 1.3159 0.315811 1.70547 0.705384L6.29298 5.29289C6.68351 5.68342 6.68351 6.31658 6.29298 6.70711L1.70547 11.2946C1.3159 11.6842 0.684276 11.6842 0.294703 11.2946Z" fill="#67517A" />
                            </svg>
                          </li>
                        </Fragment>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="line-x"></div>
            <Adddropdowntopdeals />
          </div>
        </div>
      </div>
    </>
  )
}

export default Topdealdrop