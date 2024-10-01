import React, { useEffect, useState } from "react";
import useShop from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const Bestseller = () => {
  const { products } = useShop();
  const [best, setBest] = useState([]);

  useEffect( () => {
    setBest(products.filter((item) => (item.bestseller)))
  }, [products])

  return (
    <div >
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className=" w-3/4 m-auto font-medium text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi
          earum rerum laborum harum, omnis, assumenda deserunt quo, nam vitae ea
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5">
        {
          best.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price*10 -1} />
            
          ))
        }
      </div>
    </div>
  );
};

export default Bestseller;
