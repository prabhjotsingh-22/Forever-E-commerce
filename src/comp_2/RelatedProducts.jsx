import React, { useEffect, useState } from 'react'
import useShop from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProducts = ({category , subCategory, _id}) => {
    const {products} = useShop()
    const [related, setRelated] = useState([])

    useEffect(() => {
      if(products.length>0){

        let productsCopy = products

        productsCopy = productsCopy.filter((item)=> category === item.category)
        productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory)
        productsCopy = productsCopy.filter(item => _id != item._id);
        setRelated(productsCopy.slice(0,5))
      }
    }, [products])
    


  return (
    <div className='my-[-40px] mx-auto mb-3'>
        <div className='text-center text-3xl py-2 mb-7'>
            <Title text1={'RELATED'} text2={'PRODUCTS'}/>
        </div>
        <div className="mx-auto justify-items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-5 ">
            {
              related.map((item,index)=>(
              
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price*10 -1} />
              ))
            }
            </div>
    </div>
  )
}

export default RelatedProducts