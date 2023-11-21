import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import next from '../img/ArrowBackFilled (1).png'
import previces from '../img/ArrowBackFilled.png'
import dil from '../img/dil.png'
import cardata from '../json/featured_card_data.json'
import dill from '../img/dill.webp'

const Featured_products = () => {
  const swiperRef = useRef();
  const[heart,setheart] = useState(false)
  let redheart = (e) =>{
      setheart(!heart)
  }
  return (
    <>
      <div className="featured container">
        <div className="heading-featured-section">
          <h2 className='common-h-34' >Featured products for you</h2>
          <div className="left-right-swiper-image">
            <img   onClick={() => swiperRef.current?.slidePrev()} src={previces} alt="previces" /> 
            <img onClick={() => swiperRef.current?.slideNext()} src={next} alt="next" />
          </div>
        </div>
        <div>
          <Swiper
            slidesPerView={4}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {
              cardata.map((index, value) => {
                return (
                  <>
                    <SwiperSlide key={value} >
                      <div className='card-1-fertured'>
                        <div className="card-image">
                          {
                            heart?(<img onClick={(e)=>redheart(e)} className='dil' src={dil} alt="dil" />):(<img  onClick={(e)=>redheart(e)} className='dil  redheart' src={dill}  alt="dil" />)
                          }
                          <img style={{ width: "100%", height: "202px" }} src={require(`../img/${index['imgs']}`)} alt="card_product_img" />
                        </div>
                        <div className="text-fertured-swiper">
                          <div className="text-p-fea">
                            <p style={{ color: "gray", paddingLeft: "20px", paddingRight: "20px" }} >{index['p-heading']}</p>
                          </div>
                          <div className='line-x' ></div>
                          <div className="fertured-price">
                            <p>{index['price']}</p>
                            <button className='btn-common'  >Add cart</button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                )
              })
            }
          </Swiper>
        </div>
        <button className='btn-common featrued-btn-view-all-product  ' > VIEW ALL PRODUCTS </button>
      </div>
    </>
  )
}

export default Featured_products