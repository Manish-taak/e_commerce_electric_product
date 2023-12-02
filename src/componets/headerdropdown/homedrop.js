import React from 'react'
import img5 from '../img/banner-img.png'
import { Link } from 'react-router-dom'


const Homedrop = () => {
  return (
    <>
      <div className="dropdown">
        <div className="dropbtn common-16-1 nav-item dropdowncategory ">Home</div>
        <div className="dropdown-content settexthome ">
          <div className="home">
            <div className="home-dropdown-left">
              <ul>
                <li><Link to='/products' >products</Link></li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
              </ul>
            </div>
            <div className="home-dropdown-right">
              <img className='image-home-drop' src={img5} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homedrop