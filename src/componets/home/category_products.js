import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import btnright from '../img/Arrowlineright.png'
import category_products_card from '../json/category_product.json'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required module
import { Navigation } from 'swiper/modules';
export const Category_products = () => {
  return (
    <>
      <div className="category container ">
        <div className="category-swiper">
          <h1 className='common-h-34' >Category products Collections</h1>
          <Swiper style={{
            "--swiper-navigation-color": "#000",
            "--swiper-navigation-size": "25px",
            "--swiper-navigation-padding": "10px",
          }}
            rewind={true}
            slidesPerView={8}
            navigation={true}
            spaceBetween={30}
            modules={[Navigation]}
            className="mySwiper wid navigation "
          >
            <SwiperSlide>Watches</SwiperSlide>
            <SwiperSlide>Mobiles</SwiperSlide>
            <SwiperSlide>Laptops</SwiperSlide>
            <SwiperSlide>Tablets</SwiperSlide>
            <SwiperSlide>Headphones</SwiperSlide>
            <SwiperSlide>Printers</SwiperSlide>
            <SwiperSlide>Scanners</SwiperSlide>
            <SwiperSlide>Speakers</SwiperSlide>
            <SwiperSlide>Computers</SwiperSlide>
            <SwiperSlide>Smart tv.</SwiperSlide>
            <SwiperSlide>Monitors</SwiperSlide>
          </Swiper>
        </div>
        <div className="category-produts-card">
          {
            category_products_card.map((index, value) => {
              return (
                <>
                  <div key={value} className="category-cards">
                    <div >
                      <h2 className='common-p-20' >{index['h2_text']}</h2>
                    </div>
                    <div className="category-cards-images">
                      <img src={require(`../img/${index['img1']}`)} alt="r1" />
                      <img src={require(`../img/${index['img2']}`)} alt="rr" />
                      <img src={require(`../img/${index['img3']}`)} alt="r3" />
                      <img src={require(`../img/${index['img4']}`)} alt="r4" />
                    </div>
                    <button className='view-all-btn'>View all <img src={btnright} alt="btnright" /></button>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
