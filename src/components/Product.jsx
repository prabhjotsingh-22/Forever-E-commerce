import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useShop from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../comp_2/RelatedProducts";

export const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useShop();
  const [productData, setProductData] = useState(null);
  const [selectSize, setSelectSize] = useState(null);
  const [quantity, setQuantity] = useState(1)

  const handleSize = (size) => {
    if(selectSize === size){
      setSelectSize(null)
    }
    else{
      setSelectSize(size)
    }
  }

  const fetchProductData = async () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    return <div>Loading...</div>; // Handle loading or no data
  }

  console.log(productData);

  return (
    <div className=" mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
      <div className="pt-8">
        <div className="flex flex-col items-center">
          <ol className="flex w-full items-center overflow-hidden">
            <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-body mt-0.5 text-base">/</li>
            <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
              <NavLink to="/collection">Collection</NavLink>
            </li>
            <li className="text-body mt-0.5 text-base">/</li>
            <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
              <p className="capitalize">{productData.category}</p>
            </li>
          </ol>
        </div>
      </div>
      <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
        <div className="col-span-5 grid grid-cols-2 gap-2.5">
          <div className="col-span-2 transition duration-150 ease-in hover:opacity-90">
            <img src={productData.image} className="w-full object-cover p-6" />
          </div>
        </div>
        <div className="col-span-4 pt-8 lg:pt-0">
          <div className="mb-7 border-b border-gray-300 pb-7">
            <h2 className="text-heading pt-4 pb-2 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
              {productData.name}
            </h2>
            <div className=" flex items-center gap-1 mb-4">
              <img src={assets.star_icon} className="w-3 5" alt="" />
              <img src={assets.star_icon} className="w-3 5" alt="" />
              <img src={assets.star_icon} className="w-3 5" alt="" />
              <img src={assets.star_icon} className="w-3 5" alt="" />
              <img src={assets.star_dull_icon} className="w-3 5" alt="" />
              <p className="pl-2">(48)</p>
            </div>
            <p className="text-body text-sm leading-6 text-gray-500  lg:text-base lg:leading-8">
              {productData.description}
            </p>
            <div className="mt-5 flex items-center ">
              <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                {currency} {productData.price * 10 - 1}
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300 pb-3  ">
            <div className="mb-4">
              <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                select size
              </h3>
              <ul className="colors -mr-3 flex flex-wrap">
                {productData.sizes.map((size) => (
                  <li
                    onClick={()=>handleSize(size)}
                    key={size}
                    className={`text-heading mb-2 text-black bg-gray-200 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out 
                      ${selectSize === size ? 'border-gray-700 border-2' : null}  hover:border-gray-700 md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm`}
                  >
                    {size} 
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
            <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
              <button
                className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                {quantity}
              </span>
              <button
                className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                onClick={() => setQuantity((prev) => Math.min(10, prev+1))}
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="h-11 w-full min-w-24 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={()=> addToCart(productData._id, selectSize, quantity)}
            >
              Add to cart
            </button>
          </div>
          <div className="py-6 ">
            <ul className="space-y-5 pb-1 text-sm">
              <li>
                <p className="text-heading inline-block pr-2 font-semibold">
                  Category:{" "}
                  <span className="hover:text-heading transition font-normal hover:underline">
                    {productData.category}
                  </span>
                </p>
              </li>
              <li className="productTags">
                <span className="text-heading inline-block pr-2 font-semibold">
                  Tags:
                </span>
                <p
                  className="hover:text-heading inline-block pr-1.5 transition last:pr-0 hover:underline"
                  href="#"
                >
                  {productData.subCategory}
                </p>
              </li>
            </ul>
          </div>
          <div className="">
            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-4 transition-colors md:py-6">
              <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                Additional Information
              </h2>
            </header>
            <p>100% Original product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
            <p className="mb-4">
              Cash on delivery is available on this product.
            </p>
          </div>
          <div className="">
            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
              <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                Customer Reviews
              </h2>
              <div className=" flex items-center gap-1 mt-4 mb-4">
              <img src={assets.star_icon} className="w-3 5" alt="" />
              <img src={assets.star_icon} className="w-3 5" alt="" />
              <img src={assets.star_icon} className="w-3 5" alt="" />
              <img src={assets.star_icon} className="w-3 5" alt="" />
              <img src={assets.star_dull_icon} className="w-3 5" alt="" />
              <p className="pl-2">(48)</p>
            </div>
            </header>
            
          </div>
        </div>
      </div>

      {/* related products */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} _id={productData._id} />

    </div>
  );
};
