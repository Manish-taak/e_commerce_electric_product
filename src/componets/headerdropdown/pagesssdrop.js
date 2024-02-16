import React, { Fragment } from 'react'

const Pagesssdrop = () => {
  const dataleftside = [
    {
      id: "1",
      name: "Left filter"
    },
    {
      id: "2",
      name: "Right filter"
    },
    {
      id: "3",
      name: "With out filter - 1"
    },
    {
      id: "4",
      name: "With out filter - 2"
    },
    {
      id: "5",
      name: "Filter popup"
    },
    {
      id: "6",
      name: "My wishlist"
    },
    {
      id: "7",
      name: "Left filter with CTA banner"
    },
  ]
  const checkout = [
    {
      id: "1",
      name: "Product checkout"
    },
    {
      id: "2",
      name: "Payment card"
    },
    {
      id: "3",
      name: "Payment with EMI"
    },
    {
      id: "4",
      name: "Confirm order popup"
    },
  ]
  const Other = [
    {
      id: "1"
      , name: "Order details"
    },
    {
      id: "2"
      , name: "Log in "
    },
    {
      id: "3"
      , name: "Register"
    },
  ]
  return (
    <>
      <div className="dropdown">
        <div className="dropbtn common-16-1 nav-item dropdowncategory ">Pages</div>
        <div className="dropdown-content  pagesdropset ">
          <div className="pages-drop-down">
            <div className="left-side-drop">
              <div className="top-side-left-pages">
                <div>
                  <h2 className=' heading-top common-16-3' >Product pages</h2>
                </div>
                <ul className='link-pages-drop' >
                  {
                    dataleftside.map((item,index) => {
                      return (
                        <Fragment key={Date.now() + index} >
                          <li className=' pageli dropdowncategory' >{item.name}
                            <svg className='hover-right-icon' xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                              <path d="M0.294703 11.2946C-0.0945693 10.9053 -0.0949132 10.2743 0.293935 9.88462L3.46529 6.70634C3.85479 6.31599 3.85479 5.68401 3.46529 5.29366L0.293934 2.11538C-0.0949135 1.72569 -0.0945692 1.09466 0.294703 0.705384C0.684276 0.315811 1.3159 0.315811 1.70547 0.705384L6.29298 5.29289C6.68351 5.68342 6.68351 6.31658 6.29298 6.70711L1.70547 11.2946C1.3159 11.6842 0.684276 11.6842 0.294703 11.2946Z" fill="#67517A" />
                            </svg>
                          </li>
                        </Fragment>
                      )
                    })
                  }
                </ul>
                <div className=" seconds-heading-left-side  link-pages-drop">
                  <h2 className=' heading-top common-16-3' >Product pages</h2>
                  <li className=' pageli dropdowncategory' >Product Details - 1
                    <svg className='hover-right-icon' xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                      <path d="M0.294703 11.2946C-0.0945693 10.9053 -0.0949132 10.2743 0.293935 9.88462L3.46529 6.70634C3.85479 6.31599 3.85479 5.68401 3.46529 5.29366L0.293934 2.11538C-0.0949135 1.72569 -0.0945692 1.09466 0.294703 0.705384C0.684276 0.315811 1.3159 0.315811 1.70547 0.705384L6.29298 5.29289C6.68351 5.68342 6.68351 6.31658 6.29298 6.70711L1.70547 11.2946C1.3159 11.6842 0.684276 11.6842 0.294703 11.2946Z" fill="#67517A" />
                    </svg>
                  </li>
                  <li className=' pageli dropdowncategory' >Product Details - 2
                    <svg className='hover-right-icon' xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                      <path d="M0.294703 11.2946C-0.0945693 10.9053 -0.0949132 10.2743 0.293935 9.88462L3.46529 6.70634C3.85479 6.31599 3.85479 5.68401 3.46529 5.29366L0.293934 2.11538C-0.0949135 1.72569 -0.0945692 1.09466 0.294703 0.705384C0.684276 0.315811 1.3159 0.315811 1.70547 0.705384L6.29298 5.29289C6.68351 5.68342 6.68351 6.31658 6.29298 6.70711L1.70547 11.2946C1.3159 11.6842 0.684276 11.6842 0.294703 11.2946Z" fill="#67517A" />
                    </svg>
                  </li>
                </div>
              </div>
            </div>
            <div className="right-side-drop">
              <div className=" seconds-heading-left-side  link-pages-drop">
                <h2 className=' heading-top common-16-3' >Cart pages</h2>
                <li className=' pageli dropdowncategory' >Cart - 1
                  <svg className='hover-right-icon' xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                    <path d="M0.294703 11.2946C-0.0945693 10.9053 -0.0949132 10.2743 0.293935 9.88462L3.46529 6.70634C3.85479 6.31599 3.85479 5.68401 3.46529 5.29366L0.293934 2.11538C-0.0949135 1.72569 -0.0945692 1.09466 0.294703 0.705384C0.684276 0.315811 1.3159 0.315811 1.70547 0.705384L6.29298 5.29289C6.68351 5.68342 6.68351 6.31658 6.29298 6.70711L1.70547 11.2946C1.3159 11.6842 0.684276 11.6842 0.294703 11.2946Z" fill="#67517A" />
                  </svg>
                </li>
                <li className=' pageli dropdowncategory' >Cart - 1
                  <svg className='hover-right-icon' xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                    <path d="M0.294703 11.2946C-0.0945693 10.9053 -0.0949132 10.2743 0.293935 9.88462L3.46529 6.70634C3.85479 6.31599 3.85479 5.68401 3.46529 5.29366L0.293934 2.11538C-0.0949135 1.72569 -0.0945692 1.09466 0.294703 0.705384C0.684276 0.315811 1.3159 0.315811 1.70547 0.705384L6.29298 5.29289C6.68351 5.68342 6.68351 6.31658 6.29298 6.70711L1.70547 11.2946C1.3159 11.6842 0.684276 11.6842 0.294703 11.2946Z" fill="#67517A" />
                  </svg>
                </li>
              </div>
              <div className=" seconds-heading-left-side  link-pages-drop">
                <h2 className=' heading-top common-16-3' >Checkout & Payment </h2>
                {
                  checkout.map((item,index) => {
                    return (
                      <Fragment key={Date.now() + index} >
                        <li className=' pageli dropdowncategory' >{item.name}
                          <svg className='hover-right-icon' xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                            <path d="M0.294703 11.2946C-0.0945693 10.9053 -0.0949132 10.2743 0.293935 9.88462L3.46529 6.70634C3.85479 6.31599 3.85479 5.68401 3.46529 5.29366L0.293934 2.11538C-0.0949135 1.72569 -0.0945692 1.09466 0.294703 0.705384C0.684276 0.315811 1.3159 0.315811 1.70547 0.705384L6.29298 5.29289C6.68351 5.68342 6.68351 6.31658 6.29298 6.70711L1.70547 11.2946C1.3159 11.6842 0.684276 11.6842 0.294703 11.2946Z" fill="#67517A" />
                          </svg>
                        </li>
                      </Fragment>
                    )
                  })
                }
              </div>
              <div className=" seconds-heading-left-side  link-pages-drop  ">
                <h2 className=' heading-top common-16-3' >Product pages</h2>
                <ul className='link-pages-drop' >
                  {
                    Other.map((item,index) => {
                      return (
                        <Fragment key={Date.now() + index} >
                          <li className=' pageli dropdowncategory' >{item.name}
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Pagesssdrop