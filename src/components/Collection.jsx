import React, { useState, useEffect, Profiler } from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../comp_2/Title";
import ProductItem from "../comp_2/ProductItem";
import useShop from "../context/ShopContext";

export const Collection = () => {
  const { products, search, showSearch } = useShop();
  const [showFilter, setShowFilter] = useState(true);
  const [filterProd, setFilterProd] = useState([])
  
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortOption, setSortOption] = useState("relevant");

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter( (item) => item !== e.target.value ))
    }
    else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter( (item) => item !== e.target.value ))
    }
    else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const filterFunction = () => {

    let productsCopy = products.slice()

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length >0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if(subCategory.length >0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    if(sortOption=== "low-high"){
      productsCopy.sort((a,b) => a.price - b.price)
    }
    else if(sortOption === "high-low"){
      productsCopy.sort((a,b) => b.price - a.price)
    }

    setFilterProd(productsCopy)

  }

  useEffect(() => {
    filterFunction();
  }, [category, subCategory, sortOption, search, showSearch]);

    // useEffect( () => {
    //   setFilterProd(products)
    // }, [products])


  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="w-full sm:w-1/4">
        <p
          onClick={() => {
            if (window.innerWidth <= 768) {
              // Trigger only on small screens
              setShowFilter(!showFilter);
            }
          }}
          className="my-2 text-xl flex items-center"
        >
          FILTERS{" "}
          <img
            className={`h-3 ml-2 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input onChange={toggleCategory} className="w-3" type="checkbox" value={"Men"} /> Men
            </p>
            <p className="flex gap-2">
              <input onChange={toggleCategory} className="w-3" type="checkbox" value={"Women"} /> Women
            </p>
            <p className="flex gap-2">
              <input onChange={toggleCategory} className="w-3" type="checkbox" value={"Kids"} /> Kids
            </p>
          </div>
        </div>

        {/* Type filter*/}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input onChange={toggleSubCategory} className="w-3" type="checkbox" value={"Topwear"} />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input onChange={toggleSubCategory} className="w-3" type="checkbox" value={"Bottomwear"} />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input onChange={toggleSubCategory} className="w-3" type="checkbox" value={"Winterwear"} />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* collections */}
      <div className="w-full sm:w-3/4">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
            <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base text-gray-500">Sort by:</span> {/* Sort by text */}
            <select name="SORT" className="border-2 border-gray-300 text-gray-700 text-sm sm:text-base py-2 px-2"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              >
              <option value="relevant">Featured</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
            </select>
            </div>
          </div>

        {filterProd.length === 0 ? 
        (
          <p className="text-center text-gray-500 text-xl mt-10">No products available</p>

        ) 
        : (
            <div className="pt-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {
              filterProd.map((item,index)=>(
              
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price*10 -1} />
              ))
            }
            </div>
        )}

      </div>



    </div>
  );
};
