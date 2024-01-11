import { Fragment, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import next from '../img/ArrowBackFilled (1).png'
import previces from '../img/ArrowBackFilled.png'
import dil from '../img/dil.png'
// import cardata from '../json/featured_card_data.json'
// import related from '../json/related.json'

import dill from '../img/dill.webp'
import rightarrow from '../img/Arrowlineright.png'
import Card4 from '../cardtypes/card4';

const Related_item = () => {
  const swiperRef = useRef();
  const [heart, setheart] = useState(false)
  let redheart = (e) => {
    setheart(!heart)
  }
  const realteddata = [
    {
      heading: "Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
      price: "$ 300.00",
      imgs: "product13.png"
    },
    {
      heading: "Samsung Galaxy M12 (Blue, 4GB RAM)",
      price: "$ 253.00",
      imgs: "product9.png"
    },
    {
      heading: "Boult Audio Bass D3 Buds Lightweight Stereo ",
      price: "$ 320.00",
      imgs: "product16.png"
    },
    {
      heading: "Apple iPhone SE (64 GB) - Midnight",
      price: "$ 400.00",
      imgs: "product1.png"
    }, {
      heading: "Boult Audio Bass D3 Buds Lightweight Stereo ",
      price: "$ 300.00",
      imgs: "product8.png"
    },
    {
      heading: "Bluetooth Wireless Ear Head phones (35Hrs Playtime)",
      price: "$ 253.00",
      imgs: "product14.png"
    },
    {
      heading: "Apple iPhone 13 Pro Max (128GB)",
      price: "$ 320.00",
      imgs: "product13.png"
    },
    {
      heading: "Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
      price: "$ 400.00",
      imgs: "product15.png"
    }
  ]
  return (
    <>
      <div className="realted container">
        <div className="heading-realted-section">
          <h2 className='common-34-1' >Related items for you</h2>
          <div className="left-right-swiper-image-realted">
            <img onClick={() => swiperRef.current?.slidePrev()} src={previces} alt="previces" />
            <div className="midle line-x "></div>
            <img onClick={() => swiperRef.current?.slideNext()} src={next} alt="next" />
          </div>
        </div>
        <div>
          <Swiper className='swiper_realted_parent'
            slidesPerView={4}
            spaceBetween={24}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              200:{
                slidesPerView: 1,
                spaceBetween: 10
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              1024:{
                slidesPerView: 4,
                spaceBetween: 10
              }
            }}
          >
            {
              realteddata.map((item, index) => {
                return (
                  <Fragment key={index}  >
                    <SwiperSlide className='realted_seiperslide' >
                      <Card4 card4={item} />
                    </SwiperSlide>
                  </Fragment>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Related_item