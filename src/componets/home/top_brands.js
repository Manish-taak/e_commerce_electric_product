import { Fragment, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import next from '../img/ArrowBackFilled (1).png'
import previces from '../img/ArrowBackFilled.png'
import dil from '../img/dil.png'
// import brand_card_data from '../json/brand_card_data.json'
import ratting from '../img/Rating.png'
import cartimage from '../img/addtocart.png'
import Card1 from '../cardtypes/card1';

const Top_brands = () => {
    const swiperRef = useRef();
    const topbrand = [
        {
            heading: "  boAt Wave Lite Smartwa. boAt Wave Lite Smartwa.I Phone Apple ",
            price: "$ 300.00",
            imgs: "Rectangle 924.png"
        },
        {
            heading: "boAt Airdopes 2v1.0 Tr..",
            price: "$ 253.00",
            imgs: "Rectangle 924.png"
        },
        {
            heading: "TWS Earbuds with Mic",
            price: "$ 320.00",
            imgs: "Rectangle 924.png"
        },
        {
            heading: "boAt Wave Lite Smartwa.. ",
            price: "$ 400.00",
            imgs: "Rectangle 924.png"
        }, {
            heading: " boAt Wave Lite Smartwa.. ",
            price: "$ 300.00",
            imgs: "Rectangle 924.png"
        },
        {
            heading: "boAt Wave Lite Smartwa..",
            price: "$ 253.00",
            imgs: "Rectangle 924.png"
        },
        {
            heading: "boAt Wave Lite Smartwa..",
            price: "$ 320.00",
            imgs: "Rectangle 924.png"
        },
        {
            heading: "boAt Wave Lite Smartwa.. ",
            price: "$ 400.00",
            imgs: "Rectangle 924.png"
        }
    ]
    // const [heart, setheart] = useState(false)
    // let redheart = (e) => {
    //     setheart(!heart)
    // }
    return (
        <>
            <div className="topbrand container">
                <div className="heading-topbrand-section">
                    <div className="brand-heading">
                        <h2 className='common-34-1' >Top products for top brands</h2>
                        <p className='common-p-16-gray' >Top brands up to 30% off</p>
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
                            topbrand.map((item, value) => {
                                return (
                                    < Fragment key={value}>
                                        <SwiperSlide className='brand_seiperslide'  >
                                            <Card1 data={item} />
                                        </SwiperSlide>
                                    </ Fragment>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <button className='btn-common-main brand-btn-view-all-product  ' > VIEW ALL PRODUCTS </button>
            </div>
        </>
    )
}

export default Top_brands