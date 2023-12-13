import React, { Fragment, useRef, useState } from 'react';
import cartimage from '../img/cart.png'
import dil from '../img/dil.png'
import freebox from '../img/cartimgbox.png'
import arrowright from '../img/Arrowlineright.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import watch from '../img/smarwatches.png'

const Swipercodecart = () => {
  const swiperRef = useRef();
  const smallcartimages = [
    {
      id: "1",
      img: "smarwatches.png"
    },
    {
      id: "2",
      img: "smarwatches.png"
    },
    {
      id: "3",
      img: "smarwatches.png"
    },
    {
      id: "4",
      img: "smarwatches.png"
    },
    {
      id: "5",
      img: "smarwatches.png"
    },
    {
      id: "6",
      img: "smarwatches.png"
    },
    {
      id: "7",
      img: "smarwatches.png"
    },
    {
      id: "8",
      img: "smarwatches.png"
    },
    {
      id: "9",
      img: "smarwatches.png"
    },
    {
      id: "10",
      img: "smarwatches.png"
    },
  ]
  return (
    <>
      <div className="Swipercodecart">
        <div className="swiper-image-section">
          <img className='cartimage' src={cartimage} alt="cartimage" />
          <img className='heartimagecart' src={dil} alt="" />
          <div className="freeboxcart">
            <img src={freebox} alt="" />
            <p className='common-16-2' >Free delivered</p>
          </div>
        </div>
        <div className="smallswiper" >
          <img onClick={() => swiperRef.current?.slidePrev()} src={arrowright} alt="" />
          <Swiper
            // rewind={true}
            modules={[Navigation]}
            slidesPerView={4}
            spaceBetween={10}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="mySwiper"
          >
            {
              smallcartimages.map((item) => {
                return (
                  <Fragment key={item.id} >
                    <SwiperSlide className='smallimagescart'>
                      <img src={require(`../img/${item.img}`)} alt="watchs" />
                    </SwiperSlide>
                  </Fragment>
                )
              })
            }
          </Swiper>
          <img onClick={() => swiperRef.current?.slideNext()} src={arrowright} alt="" />
        </div>
      </div>
    </>
  )
}

export default Swipercodecart