import React, { useEffect } from 'react'
import Banner from '../home/banner'
import Featured_products from '../home/featured_products'
import { Category_products } from '../home/category_products'
import Top_product from '../home/top_product'
import Cta_banner from '../home/cta_banner'
import Top_brands from '../home/top_brands'
import Arrivals from '../home/Arrivals'
import Bluetooth from '../home/bluetooth'
import Related_item from '../home/related_item'
import Partners from '../home/partners'
const Index = () => {
  //   const testData = [
  //     {
  //         img :"Rectangle 770.png",
  //         textH2 : "Bluetooth watchs",
  //         star :"Rating.png",
  //         price : "$ 150.00"
  //     },
  //     {
  //         img :"Rectangle 770.png",
  //         textH2 : "Bluetooth watchs",
  //         star :"Rating.png",
  //         price : "$ 150.00"
  //     },
  //     {
  //         img :"Rectangle 770.png",
  //         textH2 : "Bluetooth watchs",
  //         star :"Rating.png",
  //         price : "$ 150.00"
  //     }
  // ]







  return (
    <>
      <main>
        <Banner />
        < Category_products />
        < Featured_products card3={1} />
        <Top_product sideImage={true} />
        <Cta_banner />
        < Top_brands />
        <Arrivals />
        <Bluetooth />
        <Related_item />
        <Partners />
        {/* <Top_product data={testData} sideImage={true} /> */}
      </main>
    </>
  )
}

export default Index