import { Fragment, useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import next from '../img/ArrowBackFilled (1).png'
import previces from '../img/ArrowBackFilled.png'
// import dil from '../img/dil.png'
// import cardata from '../json/featured_card_data.json'
// import dill from '../img/dill.webp'
// import arrowlinerright from '../img/Arrowlineright.png'
// import cartimage from '../img/addtocart.png'
import Card3 from '../cardtypes/card3.js';
import Card2 from '../cardtypes/card2';
import { Link } from 'react-router-dom';
import Contaxtpop from '../../contaxtpop.js';
// import Card2 from '../cardtypes/card2.js';

const Featured_products = (props) => {
  const swiperRef = useRef();
  const [heart, setheart] = useState(false)
  let redheart = (e) => {
    setheart(!heart)
  }
  // card one
  const featuredcarddata = [
    {
      heading: "Boult Audio Bass D3 Buds Lightweight Stereo ",
      price: "$ 300.00",
      imgs: "product1.png"
    },
    {
      heading: "Bluetooth Wireless Ear Head phones (35Hrs Playtime)",
      price: "$ 253.00",
      imgs: "product2.png"
    },
    {
      heading: "Apple iPhone 13 Pro Max (128GB)",
      price: "$ 320.00",
      imgs: "product4.png"
    },
    {
      heading: "Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
      price: "$ 400.00",
      imgs: "product5.png"
    }, {
      heading: "Boult Audio Bass D3 Buds Lightweight Stereo ",
      price: "$ 300.00",
      imgs: "product5.png"
    },
    {
      heading: "Bluetooth Wireless Ear Head phones (35Hrs Playtime)",
      price: "$ 253.00",
      imgs: "product6.png"
    },
    {
      heading: "Apple iPhone 13 Pro Max (128GB)",
      price: "$ 320.00",
      imgs: "product7.png"
    },
    {
      heading: "Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
      price: "$ 400.00",
      imgs: "product8.png"
    }
  ]
  // card two 
  const cartdata = [
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    }

  ]
  // card cart section wala data ha url search ker cart 
  const testDataNew = [
    {
      img: "product18.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "product19.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "product16.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "product20.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    },
    {
      img: "Rectangle 770.png",
      textH2: "Bluetooth watchs",
      star: "Rating.png",
      price: "$ 150.00"
    }

  ]

  const { openPopup } = useContext(Contaxtpop)

  return (
    <>
      <div className="featured container">
        <div className="heading-featured-section">
          <h2 onClick={openPopup} className='common-34-1' >Featured products for you</h2>
          <div className="left-right-swiper-image">
            <img onClick={() => swiperRef.current?.slidePrev()} src={previces} alt="previces" />
            <div className='midle line-x '></div>
            <img onClick={() => swiperRef.current?.slideNext()} src={next} alt="next" />
          </div>
        </div>
          <div>
            <Swiper className='swiper_featured_parent'
              slidesPerView={4}
              spaceBetween={24}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                200: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                }
              }}
              loop={true}
            >
              {
                props.card2 === 2 &&
                testDataNew.map((item, index) => {
                  return (
                    < Fragment key={index} >
                      <SwiperSlide className='featured_seiperslide'>
                        < Card2 data={item} />
                      </SwiperSlide>
                    </Fragment>
                  )
                })
              }
              {
                props.card2 === 3 &&
                cartdata.map((item, index) => {
                  return (
                    < Fragment key={index} >
                      <SwiperSlide className='featured_seiperslide'>
                        < Card2 data={item} />
                      </SwiperSlide>
                    </Fragment>
                  )
                })
              }
              {
                props.card3 === 1 &&
                featuredcarddata.map((item, index) => {
                  return (
                    <Fragment key={index} >
                      <SwiperSlide className='featured_seiperslide'>
                        < Card3 data={item} />
                      </SwiperSlide>
                    </Fragment>
                  )
                })
              }
            </Swiper>
          </div>
        <Link>
          <button className='btn-common-main featrued-btn-view-all-product  ' > VIEW ALL PRODUCTS </button>
        </Link>
      </div>
    </>
  )
}

export default Featured_products
