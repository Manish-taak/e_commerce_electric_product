import React, { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';
import cartimage from '../img/cart.png'
import dil from '../img/dil.png'
import freebox from '../img/cartimgbox.png'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

const Swipercodecart = ({ checkcolor, product, setPrice }) => {
  // show big image swiper  
  const [showImg, setshowImg] = useState()
  let [data, setdata] = useState([])
  const imgref = useRef()

  // color code main change hota hai to hey code run hoto hai 
  useEffect(() => {
    filterProductImages();
  }, [checkcolor]);

  const filterProductImages = () => {
    if (checkcolor !== "") {
      let colorProductImage = product.product_color_image.filter((item) => {
        return item.color.color_code === checkcolor
      })
      setdata(colorProductImage);
      setshowImg(`http://localhost:8000/${colorProductImage[0].image}`);
      setPrice(colorProductImage[0].price);
    }
  }

  // small swiper se get kiya huwa path means url 
  function chooseImg(e) {
    let selectimg = e.currentTarget.src;
    setshowImg(selectimg)
  }

  return (
    <>
      {
        <Fragment>
          <div className="Swipercodecart">
            <div className="swiper-image-section">
              <img className='cartimage' src={showImg} alt="cartimage" />
              <img className='heartimagecart' src={dil} alt="" />
              <div className="freeboxcart">
                <img src={freebox} alt="freebox" />
                <p className='common-16-2' >Free delivered</p>
              </div>
            </div>
            <div className="smallswiper" >
              <Swiper
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                  500: {
                    slidesPerView: 6,
                  },
                  1000: {
                    slidesPerView: 4,
                  },
                }}
                className="mySwiper">
                {
                  data && data?.map((item, index) => {
                    return (
                      <Fragment key={Date.now() + index} >
                        <SwiperSlide className='smallimagescart'>
                          <div className='swiperImage' >
                            <img className='image' ref={imgref} onClick={(e) => { chooseImg(e) }} src={`http://localhost:8000/${item.image}`} alt="watchs" />
                          </div>
                        </SwiperSlide>
                      </Fragment>
                    )
                  })
                }
              </Swiper>
            </div>
          </div>
        </Fragment>
      }
    </>
  )
}

export default Swipercodecart