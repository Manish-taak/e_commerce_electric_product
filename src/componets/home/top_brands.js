import { Fragment, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import next from '../img/ArrowBackFilled (1).png'
import previces from '../img/ArrowBackFilled.png'
import dil from '../img/dil.png'
// import brand_card_data from '../json/brand_card_data.json'
import ratting from '../img/Rating.png'
import cartimage from '../img/addtocart.png'
import Card1 from '../cardtypes/card1';
import * as api from '../axios/apis'
import { Link } from 'react-router-dom';

const Top_brands = () => {
    const swiperRef = useRef();

    const [topBrand, settopBrand] = useState([])

    const getProducts = async () => {
        let productsdata = await api.getdata().then((res) => { return res.data }).catch((err) => console.error(err, "erorr"))
        let topbrandsdata = productsdata?.data?.filter((item) => {
            return item.topbrands === true
        })
        settopBrand(topbrandsdata)
    }

    useEffect(() => {
        getProducts()
    }, [])

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
                        <div className="midle line-x "></div>
                        <img onClick={() => swiperRef.current?.slideNext()} src={next} alt="next" />
                    </div>
                </div>
                <div>
                    <Swiper className='swiper_brands_parent'
                        slidesPerView={4}
                        spaceBetween={24}
                        loop={true}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                    >
                        {
                            topBrand.map((item, index) => {
                                return (
                                    < Fragment key={Date.now() + index}>
                                        <SwiperSlide className='products-slider realted_seiperslide'>
                                            <Link to={`cart/${item.id}`} >
                                                <Card1 data={item} />
                                            </Link>
                                        </SwiperSlide>
                                    </ Fragment>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <button className='btn-common-main brand-btn-view-all-product' > VIEW ALL PRODUCTS </button>
            </div>
        </>
    )
}

export default Top_brands