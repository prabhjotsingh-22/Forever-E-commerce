import React, { useEffect, useState } from "react";
import { Heart, Trash } from "lucide-react";
import useShop from "../context/ShopContext";
import Title from "../comp_2/Title";
import CartTotal from "../comp_2/CartTotal";

export const Cart = () => {
  const { products, currency, cartItem, updateQuantity } = useShop();
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const itemId in cartItem) {
      for (const size in cartItem[itemId]) {
        if (cartItem[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItem[itemId][size],
          });
        }
      }
    }
    console.log(tempData);
    setCartProduct(tempData);
  }, [cartItem]);

  // const updateQuantity = (id, newQuantity) => {
  //   const updatedCart = cartProduct.map((item) =>
  //     item._id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
  //   );
  //   setCartProduct(updatedCart);
  // };

  return (
    <div className="border-t pt-6  mx-auto max-w-7xl px-2 lg:px-0">
      <div className=" max-w-2xl text-2xl py-7 lg:max-w-7xl">
        <Title text1={"YOUR"} text2={"CART"} />
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section
            aria-labelledby="cart-heading"
            className="rounded-lg bg-white lg:col-span-8"
          >
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            <ul role="list" className="divide-y divide-gray-200">
              {cartProduct.map((item, index) => {
                const product = products.find(
                  (producta) => producta._id === item._id
                );
                return (
                  <div key={index} className="">
                    <li className="flex py-6 sm:py-6 ">
                      <div className="flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="sm:h-32 sm:w-32 h-24 w-24 rounded-md object-contain object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <a
                                  href={product.href}
                                  className="text-lg text-gray-800"
                                >
                                  {product.name}
                                </a>
                              </h3>
                            </div>
                            <div className="mt-1 flex text-sm">
                              {item.size ? (
                                <p className="text-[15px] text-gray-500">
                                  {"Size: "}
                                  {item.size}
                                </p>
                              ) : null}
                            </div>
                            <div className="mt-1 flex items-end">
                              <p className="text-sm font-medium text-gray-900">
                                {currency}&nbsp;{product.price * 10 - 1}
                              </p>
                              &nbsp;&nbsp;
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <div className="mb-2 flex">
                      <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
                        <button
                          className="text-heading hover:bg-heading flex h-12 w-12 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-10"
                          onClick={() =>
                            updateQuantity(item._id, item.size, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span className="duration-250 text-heading flex h-7 w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  ">
                          {item.quantity}
                        </span>
                        <button
                          className="text-heading hover:bg-heading flex h-12 w-12 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-10"
                          onClick={() =>
                            updateQuantity(item._id, item.size, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <div className="ml-6 flex text-sm">
                        <button
                          type="button"
                          className="flex items-center space-x-1 px-2 py-1 pl-0"
                          onClick={() =>
                            updateQuantity(item._id, item.size, 0)
                          }
                        >
                          <Trash size={12} className="text-red-500" />
                          <span className="text-xs font-medium text-red-500">
                            Remove
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ul>
          </section>
          {/* Order summary */}
          <CartTotal buttonText={'Checkout'}/>
          
        </div>
      </div>
    </div>
  );
};
