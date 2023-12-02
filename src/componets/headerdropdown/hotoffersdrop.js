import React, { Fragment } from 'react'

const Hotoffersdrop = () => {
  const alloffer = [
    {
      name: "Shoes for man"
    },
    {
      name: "Grooming"
    },
    {
      name: "Laptop"
    },
    {
      name: "Watches"
    },
    {
      name: "Shoes girls"
    },
    {
      name: "Mobile phone"
    },
  ]
  const todayoffer = [
    {
      name: "Shoes girls"
    },
    {
      name: "Shoes for man"
    },
    {
      name: "Baby toys"
    },
    {
      name: "Gaming"
    },
    {
      name: "Toys"
    },
    {
      name: "Sports shoes"
    },
  ]
  const Monthlyoffers = [
    {
      name: "Formal shirt"
    },
    {
      name: "Jeckets"
    },
    {
      name: "Jeans pant"
    },
    {
      name: "Shirt"
    },
    {
      name: "Grooming"
    },
    {
      name: "Tunk"
    },
  ]
  const Comingsoonoffers = [
    {
      name: "Hand bags"
    },
    {
      name: "Watches"
    },
    {
      name: "Clothing"
    },
    {
      name: "All shoes"
    },
    {
      name: " Jewellery "
    },
    {
      name: " Accessories"
    },
  ]

  const Category = [
    {
      name: "Mobiles"
    },
    {
      name: "Laptops"
    },
    {
      name: "Watches"
    },
    {
      name: "Tablets"
    },
    {
      name: "Headphones"
    },
    {
      name: "Printers"
    },
    {
      name: "Scanners"
    }, {
      name: "View all"
    }
  ]
  return (
    <>
      <div className="dropdown">
        <div className="dropbtn common-16-1 nav-item dropdowncategory">Hot offers</div>
        <div className="dropdown-content hotofferrset  ">
          <div className="hotofferdrop">
            <div className="hotofferdrop">
              <div className=" hotoffer-main seconds-heading-left-side  link-pages-drop  ">
                <h2 style={{width:"200px"}} className=' heading-top common-16-3' >All offers</h2>
                <ul className='link-pages-drop' >
                  {
                    alloffer.map((item) => {
                      return (
                        <Fragment >
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
                <h2 className=' heading-top common-16-3' >Today offers 20% off</h2>
                <ul className='link-pages-drop' >
                  {
                    todayoffer.map((item) => {
                      return (
                        <Fragment  >
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
              <div className=" hotoffer-main  seconds-heading-left-side  link-pages-drop  ">
                <h2 className=' heading-top common-16-3' >Monthly offers</h2>
                <ul className='link-pages-drop' >
                  {
                    Monthlyoffers.map((item) => {
                      return (
                        <Fragment key={item.id} >
                          <li className='hotofferli pageli dropdowncategory' >{item.name}
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
                <h2 className=' heading-top common-16-3' >Coming soon offers</h2>
                <ul className='link-pages-drop' >
                  {
                    Comingsoonoffers.map((item) => {
                      return (
                        <Fragment key={item.id} >
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
            <div className=" right-hotoffer hotoffer-main  seconds-heading-left-side  link-pages-drop  ">
                <h2 className=' heading-top common-16-3' >Monthly offers</h2>
                <ul className='link-pages-drop' >
                  {
                    Monthlyoffers.map((item) => {
                      return (
                        <Fragment key={item.id} >
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
        </div>
      </div>
    </>
  )
}

export default Hotoffersdrop