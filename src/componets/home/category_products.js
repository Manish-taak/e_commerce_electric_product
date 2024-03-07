import React, { Fragment, useEffect, useState } from 'react'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import prev from '../img/ArrowBackFilled.png'
import next from '../img/withnext.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required module
import { Navigation } from 'swiper/modules';
import Categorycard from '../cardtypes/categorycard';
import * as apis from "../axios/apis"
import { Link } from 'react-router-dom';
export const Category_products = (props) => {

  const [alllink, setalllink] = useState([])
  const [link, setlink] = useState(1)
  const [select, setSelect] = useState()
  const swiperRef = useRef();
  const [defaultdata, setdefaultdata] = useState([])
  const [subcate, setsubcate] = useState([])

  let categoryData = async () => {
    let data = await apis.getcategorydata().then((res) => res).catch((err) => { console.log(err) })
    setalllink(data.data.data)
  }

  let subcateFilter = async () => {
    let data = await apis.subcategorydata(link).then((res) => { return res.data }).catch((err) => console.warn(err))
    setsubcate(data.data)
  }

  useEffect(() => {
    categoryData()
    subcateFilter()
  }, [link])

  return (
    <>
      <div className="category container ">
        <div className="category-swiper">
          <a href="/section1">
            <h1
              className='common-34-1 show-on-scroll category-headding' style={{ textTransform: "unset" }} >
              {props?.heading ? props?.heading : "Category products Collections "}
            </h1>
          </a>
          <div className="next-prev-category">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className='prev-next-btn-category' >
              <img src={prev} alt="prev" />
            </button>
            <Swiper style={{
              "--swiper-navigation-color": "#000",
              "--swiper-navigation-size": "25px",
              "--swiper-navigation-padding": "10px",
            }}
              rewind={true}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                375: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                500: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
                600: {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 8,
                  spaceBetween: 10,
                },
                1000: {
                  slidesPerView: 9,
                  spaceBetween: 10,
                }
              }}
              className="mySwiper wid navigation"
            >
              {
                alllink?.map((item, index) => {
                  return (
                    <>
                      <SwiperSlide key={Date.now() + index} >
                        <li
                          onClick={() => {
                            setlink(item.id);
                            setSelect(index)
                          }
                          }
                          className={`category-links  common-14-2 ${select == index && "active-border"} `}>
                          {item?.name}
                        </li>
                      </SwiperSlide>
                    </>
                  )
                })
              }
            </Swiper>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className='  prev-next-btn-category' >
              <img src={next} alt="next" />
            </button>
          </div>
        </div>
        <div className="category-produts-card">
          {
            subcate.map((item, index) => {
              return (
                <Fragment key={Date.now() + index}>
                  <Link to="/products">
                    <Categorycard cardsdata={item} />
                  </Link>
                </Fragment>)
            })
          }
        </div>
      </div>
    </>
  )
}
