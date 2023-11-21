import React from 'react'
import Banner from '../home/banner'
import Featured_products from '../home/featured_products'
import { Category_products } from '../home/category_products'
import Top_product from '../home/top_product'
import Cta_banner from '../home/cta_banner'

const Index = () => {
  return (
    <>
    <main>
        <Banner/>
        < Category_products/>
        < Featured_products/>
        <Top_product/>
        <Cta_banner/>
    </main>
    </>
  )
}

export default Index