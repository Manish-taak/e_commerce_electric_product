import React, { Fragment, useState } from 'react'
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
export const Category_products = (props) => {
  const swiperRef = useRef();
  const tabs = [
    {
      line1: "Watches",
      number: "1"
    },
    {
      line1: "Mobiles",
      number: "2"
    },
    {
      line1: "Laptops",
      number: "3"
    },
    {
      line1: "Tablets",
      number: "4"
    },
    {
      line1: "Headphones",
      number: "5"
    },
    {
      line1: "Printers",
      number: "6"
    },
    {
      line1: "Scanners",
      number: "7"
    },
    {
      line1: "Speakers",
      number: "8"
    },
    {
      line1: "Computers",
      number: "9"
    },
    {
      line1: "Smart tv.",
      number: "10"
    },
    {
      line1: "Monitors",
      number: "11"
    }
  ]

  const category = [
    {
      "name": "Watches",
      "h2_text": "Men's Watches",
      "img1": "cat1.png",
      "img2": "cat2.png",
      "img3": "cat3.png",
      "img4": "cat4.png"
    },
    {
      "name": "Watches",
      "h2_text": "Woman’s Watches",
      "img1": "cat5.png",
      "img2": "cat6.png",
      "img3": "cat7.png",
      "img4": "cat8.png"
    },
    {
      "name": "Watches",
      "h2_text": "Smart Watches",
      "img1": "cat9.png",
      "img2": "cat10.png",
      "img3": "cat11.png",
      "img4": "cat12.png"
    },
    {
      "name": "Watches",
      "h2_text": "Boy's Watches",
      "img1": "cat13.png",
      "img2": "cat14.png",
      "img3": "cat15.png",
      "img4": "cat16.png"
    },
    {
      "name": "Watches",
      "h2_text": "Top brands",
      "img1": "cat17.png",
      "img2": "cat18.png",
      "img3": "cat19.png",
      "img4": "cat20.png"
    },
    {
      "name": "Watches",
      "h2_text": "Watches",
      "img1": "cat21.png",
      "img2": "cat22.png",
      "img3": "cat23.png",
      "img4": "cat24.png"
    }, {
      "name": "Mobiles",
      "h2_text": "Mobiles",
      "img1": "cat1.png",
      "img2": "cat2.png",
      "img3": "cat3.png",
      "img4": "cat4.png"
    }, {
      "name": "Mobiles",
      "h2_text": "Mobiles",
      "img1": "cat5.png",
      "img2": "cat6.png",
      "img3": "cat7.png",
      "img4": "cat8.png"
    }, {
      "name": "Mobiles",
      "h2_text": "Mobiles",
      "img1": "cat1.png",
      "img2": "cat2.png",
      "img3": "cat3.png",
      "img4": "cat4.png"
    }, {
      "name": "Mobiles",
      "h2_text": "Mobiles",
      "img1": "cat5.png",
      "img2": "cat6.png",
      "img3": "cat7.png",
      "img4": "cat8.png"
    }, {
      "name": "Mobiles",
      "h2_text": "Mobiles",
      "img1": "cat1.png",
      "img2": "cat2.png",
      "img3": "cat3.png",
      "img4": "cat4.png"
    }, {
      "name": "Mobiles",
      "h2_text": "Mobiles",
      "img1": "cat5.png",
      "img2": "cat6.png",
      "img3": "cat7.png",
      "img4": "cat8.png"
    }
    , {
      "name": "Laptops",
      "h2_text": "Laptops",
      "img1": "cat1.png",
      "img2": "cat2.png",
      "img3": "cat3.png",
      "img4": "cat4.png"
    }
    , {
      "name": "Laptops",
      "h2_text": "Laptops",
      "img1": "cat5.png",
      "img2": "cat6.png",
      "img3": "cat7.png",
      "img4": "cat8.png"
    }
    , {
      "name": "Laptops",
      "h2_text": "Laptops",
      "img1": "cat1.png",
      "img2": "cat2.png",
      "img3": "cat3.png",
      "img4": "cat4.png"
    }
    , {
      "name": "Laptops",
      "h2_text": "Laptops",
      "img1": "cat9.png",
      "img2": "cat10.png",
      "img3": "cat11.png",
      "img4": "cat12.png"
    }
    , {
      "name": "Laptops",
      "h2_text": "Laptops",
      "img1": "cat1.png",
      "img2": "cat2.png",
      "img3": "cat3.png",
      "img4": "cat4.png"
    }
    , {
      "name": "Laptops",
      "h2_text": "Laptops",
      "img1": "cat9.png",
      "img2": "cat10.png",
      "img3": "cat11.png",
      "img4": "cat12.png"
    }
    , {
      "name": "Tablets",
      "h2_text": "Tablets",
      "img1": "cat1.png",
      "img2": "cat2.png",
      "img3": "cat3.png",
      "img4": "cat4.png"
    }
    , {
      "name": "Tablets",
      "h2_text": "Tablets",
      "img1": "cat9.png",
      "img2": "cat10.png",
      "img3": "cat11.png",
      "img4": "cat12.png"
    }
    , {
      "name": "Tablets",
      "h2_text": "Tablets",
      "img1": "cat5.png",
      "img2": "cat6.png",
      "img3": "cat7.png",
      "img4": "cat8.png"
    }
    , {
      "name": "Tablets",
      "h2_text": "Tablets",
      "img1": "cat9.png",
      "img2": "cat10.png",
      "img3": "cat11.png",
      "img4": "cat12.png"
    }
    , {
      "name": "Tablets",
      "h2_text": "Tablets",
      "img1": "cat1.png",
      "img2": "cat2.png",
      "img3": "cat3.png",
      "img4": "cat4.png"
    }
    , {
      "name": "Tablets",
      "h2_text": "Tablets",
      "img1": "cat9.png",
      "img2": "cat10.png",
      "img3": "cat11.png",
      "img4": "cat12.png"
    }
    , {
      "name": "Headphones",
      "h2_text": "Headphones",
      "img1": "cat9.png",
      "img2": "cat10.png",
      "img3": "cat11.png",
      "img4": "cat12.png"
    }
    , {
      "name": "Headphones",
      "h2_text": "Headphones",
      "img1": "cat5.png",
      "img2": "cat6.png",
      "img3": "cat7.png",
      "img4": "cat8.png"
    }
    , {
      "name": "Headphones",
      "h2_text": "Headphones",
      "img1": "cat9.png",
      "img2": "cat10.png",
      "img3": "cat11.png",
      "img4": "cat12.png"
    }
    , {
      "name": "Printers",
      "h2_text": "Printers",
      "img1": "cat1.png",
      "img2": "cat2.png",
      "img3": "cat3.png",
      "img4": "cat4.png"
    }
    , {
      "name": "Printers",
      "h2_text": "Printers",
      "img1": "cat21.png",
      "img2": "cat22.png",
      "img3": "cat23.png",
      "img4": "cat24.png"
    }
    , {
      "name": "Printers",
      "h2_text": "Printers",
      "img1": "cat21.png",
      "img2": "cat22.png",
      "img3": "cat23.png",
      "img4": "cat24.png"
    }
    , {
      "name": "Scanners",
      "h2_text": "Scanners",
      "img1": "cat5.png",
      "img2": "cat6.png",
      "img3": "cat7.png",
      "img4": "cat8.png"
    }
    , {
      "name": "Scanners",
      "h2_text": "Scanners",
      "img1": "cat21.png",
      "img2": "cat22.png",
      "img3": "cat23.png",
      "img4": "cat24.png"
    }
    , {
      "name": "Scanners",
      "h2_text": "Scanners",
      "img1": "cat1.png",
      "img2": "cat2.png",
      "img3": "cat3.png",
      "img4": "cat4.png"
    }
    , {
      "name": "Speakers",
      "h2_text": "Speakers",
      "img1": "cat21.png",
      "img2": "cat22.png",
      "img3": "cat23.png",
      "img4": "cat24.png"
    }
    , {
      "name": "Speakers",
      "h2_text": "Speakers",
      "img1": "cat21.png",
      "img2": "cat22.png",
      "img3": "cat23.png",
      "img4": "cat24.png"
    }
    , {
      "name": "Speakers",
      "h2_text": "Speakers",
      "img1": "cat5.png",
      "img2": "cat6.png",
      "img3": "cat7.png",
      "img4": "cat8.png"
    }
    , {
      "name": "Computers",
      "h2_text": "Computers",
      "img1": "cat21.png",
      "img2": "cat22.png",
      "img3": "cat23.png",
      "img4": "cat24.png"
    }
    , {
      "name": "Computers",
      "h2_text": "Computers",
      "img1": "cat21.png",
      "img2": "cat22.png",
      "img3": "cat23.png",
      "img4": "cat24.png"
    }
    , {
      "name": "Computers",
      "h2_text": "Computers",
      "img1": "cat1.png",
      "img2": "cat2.png",
      "img3": "cat3.png",
      "img4": "cat4.png"
    }
    , {
      "name": "Smart tv.",
      "h2_text": "Smart tv.",
      "img1": "cat5.png",
      "img2": "cat6.png",
      "img3": "cat7.png",
      "img4": "cat8.png"
    }
    , {
      "name": "Smart tv.",
      "h2_text": "Smart tv.",
      "img1": "cat21.png",
      "img2": "cat22.png",
      "img3": "cat23.png",
      "img4": "cat24.png"
    }
    , {
      "name": "Smart tv.",
      "h2_text": "Smart tv.",
      "img1": "cat21.png",
      "img2": "cat22.png",
      "img3": "cat23.png",
      "img4": "cat24.png"
    }
    , {
      "name": "Monitors",
      "h2_text": "Monitors",
      "img1": "cat21.png",
      "img2": "cat22.png",
      "img3": "cat23.png",
      "img4": "cat24.png"
    }
    , {
      "name": "Monitors",
      "h2_text": "Monitors",
      "img1": "cat5.png",
      "img2": "cat6.png",
      "img3": "cat7.png",
      "img4": "cat8.png"
    }
    , {
      "name": "Monitors",
      "h2_text": "Monitors",
      "img1": "cat1.png",
      "img2": "cat2.png",
      "img3": "cat3.png",
      "img4": "cat4.png"
    }
  ]

  const Watches = category.filter((data) => data.name === "Watches")
  const Mobiles = category.filter((data) => data.name === "Mobiles")
  const Laptops = category.filter((data) => data.name === "Laptops")
  const Headphones = category.filter((data) => data.name === "Headphones")
  const Printers = category.filter((data) => data.name === "Printers")
  const Scanners = category.filter((data) => data.name === "Scanners")
  const Speakers = category.filter((data) => data.name === "Speakers")
  const Computers = category.filter((data) => data.name === "Computers")
  const Smart = category.filter((data) => data.name === "Smart tv.")
  const Monitors = category.filter((data) => data.name === "Monitors")
  const Tablets = category.filter((data) => data.name === "Tablets")
  const [alllink, setalllink] = useState(tabs)
  const [link, setlink] = useState(category)
  const [select, setSelect] = useState()
  const selectdata =
    link === 'Watches' ? Watches :
      link === 'Mobiles' ? Mobiles :
        link === 'Laptops' ? Laptops :
          link === 'Tablets' ? Tablets :
            link === 'Headphones' ? Headphones :
              link === 'Printers' ? Printers :
                link === 'Scanners' ? Scanners :
                  link === 'Speakers' ? Speakers :
                    link === 'Computers' ? Computers :
                      link === 'Smart tv.' ? Smart :
                        link === 'Monitors' ? Monitors : Watches
  return (
    <>
      <div className="  category container ">
        <div className="category-swiper">
          <h1
            className='common-34-1 show-on-scroll category-headding ' >
            {props?.heading ? props?.heading : "Category products Collections "}
          </h1>
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
                alllink.map((item, value) => {
                  return (
                    <>
                      <SwiperSlide key={value} >
                        <li
                          onClick={() => {
                            setlink(item.line1);
                            setSelect(value)
                          }
                          }
                          className={`category-links  common-14-2 ${select == value && "active-border"} `}>
                          {item?.line1}
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
          <Categorycard data={selectdata} />
        </div>
      </div>
    </>
  )
}
