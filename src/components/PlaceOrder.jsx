import React, { useState } from "react";
import CartTotal from "../comp_2/CartTotal";
import Title from "../comp_2/Title";
import { assets } from "../assets/frontend_assets/assets";

export const PlaceOrder = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [method, setMethod]= useState('cod')

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);

    // Validate if the input is a number
    if (!/^\d+$/.test(value)) {
      setPhoneError("Please enter a valid phone number (digits only).");
    } else {
      setPhoneError("");
    }
  };

  return (
    <div className="mx-auto py-4 md:py-6 border-t border-gray-200">
      <div className="overflow-hidden rounded-xl shadow">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Contact info */}
          <div className="px-5 py-6 text-gray-900 md:px-8">
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-6">
                  <form>
                    <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                      <div>
                        <div className="text-2xl">
                          <Title text1={"CONTACT"} text2={"INFORMATION"} />
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 ">
                          <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="name"
                          >
                            Full Name
                          </label>
                          <input
                            className="flex mt-[-17px] h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your name"
                            id="name"
                          ></input>

                          <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="name"
                          >
                            Email Address
                          </label>
                          <input
                            className="flex h-10 mt-[-17px] w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="email"
                            placeholder="Enter email address"
                            id="email"
                          ></input>

                          {/* Phone Number */}
                          <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="phone"
                          >
                            Phone Number
                          </label>
                          <input
                            className={`flex h-10 mt-[-17px] w-full rounded-md border ${
                              phoneError
                                ? "border-red-500 focus:ring-red-500"
                                : "border-black/30 focus:ring-black/30"
                            } bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`}
                            type="text"
                            placeholder="Enter phone number"
                            id="phone"
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                          />
                          {phoneError && (
                            <p className="text-sm text-red-500 mt-[-10px]">
                              {phoneError}
                            </p>
                          )}
                        </div>
                      </div>
                      <hr className="my-8" />

                      <div className="">
                        <div className="text-2xl">
                          <Title text1={"SHIPPING"} text2={"ADDRESS"} />
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                          <div className="sm:col-span-3">
                            <label
                              htmlFor="address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Address
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="address"
                                name="address"
                                autoComplete="street-address"
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              City
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="city"
                                name="city"
                                autoComplete="address-level2"
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="region"
                              className="block text-sm font-medium text-gray-700"
                            >
                              State / Province
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="region"
                                name="region"
                                autoComplete="address-level1"
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="postal-code"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Postal code
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="postal-code"
                                name="postal-code"
                                autoComplete="postal-code"
                                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          
          <div className="my-auto">
          <div >
            <div className="text-2xl px-5 py-6 mb-[-20px]">
            <Title text1={'Select Payment'} text2={'Method'}/>

            </div>
            <div className=" my-auto px-5 py-6 flex gap-3 flex-col lg:flex-row">
            <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`} ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>

            <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>

            <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
            </div>
          <div className="my-auto px-5 py-6 min-w-full mx-auto justify-items-center text-gray-900 md:px-8">
            <CartTotal buttonText={"Place Order"} />
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};
