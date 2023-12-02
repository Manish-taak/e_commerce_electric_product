import { Fragment, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import next from '../img/ArrowBackFilled (1).png'
import previces from '../img/ArrowBackFilled.png'
import dil from '../img/dil.png'
import brand_card_data from '../json/brand_card_data.json'
import ratting from '../img/Rating.png'
import cartimage from '../img/addtocart.png'
import arrivals from '../json/Arrivals_2.json'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
const Arrivals = () => {
    const swiperRef = useRef();
    // const [heart, setheart] = useState(false)
    // let redheart = (e) => {
    //     setheart(!heart)
    // }
    return (
        <Fragment>
            <div className="topbrand container">
                <div className="heading-topbrand-section">
                    <div className="brand-heading">
                        <h2 className='common-34-1' >New Arrivals Products</h2>
                    </div>
                    <div className="left-right-swiper-image-brannd">
                        <img onClick={() => swiperRef.current?.slidePrev()} src={previces} alt="previces" />
                        <img onClick={() => swiperRef.current?.slideNext()} src={next} alt="next" />
                    </div>
                </div>
                <div>
                    <Swiper className='swiper_brands_parent'
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
                            brand_card_data.map((index, value) => {
                                return (
                                    <Fragment key={value} >
                                        <SwiperSlide className='brand_seiperslide'  >
                                            <div className='card-1-brands'>
                                                <div className="brand-card-image">
                                                    {/* {
                                                        heart ? (<img onClick={(e) => redheart(e)} className='dil' src={dil} alt="dil" />) : (<img onClick={(e) => redheart(e)} className='dil  redheart' src={dill} alt="dil" />)
                                                    } */}
                                                    <div className='dil-brand'>
                                                        <button className='new-products' >New</button>
                                                        {/* <img onClick={(e) => redheart(e)}  src={dil} alt="dil" /> */}
                                                        <img src={dil} alt="dil-brand" />
                                                    </div>
                                                    <Swiper
                                                      modules={[Pagination]}
                                                      pagination={{
                                                        clickable: true,
                                                        bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`
                                                     }}
                                                       className="mySwiper">
                                                        {
                                                            arrivals.map((value, index) => {
                                                                return (
                                                                    <Fragment key={index}>
                                                                        <SwiperSlide>
                                                                            <img  style={{ width: "100%" }} src={require(`../img/${value['img']}`)} alt="brand_product_img" />
                                                                        </SwiperSlide>
                                                                    </Fragment>
                                                                )
                                                            })
                                                        }
                                                    </Swiper>
                                                    {/* <img style={{ width: "100%", height: "202px" }} src={require(`../img/${index['imgs']}`)} alt="brand_product_img" /> */}
                                                </div>
                                                <div className="text-brand-swiper">
                                                    <div style={{WebkitLineClamp:"1"}} className=' overflow-text text-brand-card'  >
                                                        {index['p-heading']}
                                                    </div>
                                                    <div className='line-x' ></div>
                                                    <div className="brand-price">
                                                        <div className="brand-product-name">
                                                            <div>
                                                                <p>I Phone Apple</p>
                                                                <img src={ratting} alt="ratting" />
                                                            </div>
                                                            <p>{index['price']}</p>
                                                        </div>
                                                        <button className='btn-brand'  ><img style={{ border: "50px" }} src={cartimage} alt="cartimage" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Fragment >
                                )
                            })
                        }
                    </Swiper>
                </div>
                <button className='btn-common brand-btn-view-all-product  ' > VIEW ALL PRODUCTS  </button>
            </div>
        </Fragment>
    )
}

export default Arrivals