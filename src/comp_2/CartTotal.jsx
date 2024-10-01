import React from "react";
import Title from "./Title";
import useShop from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const CartTotal = ({ buttonText }) => {
  const { delivery_fee, currency, totalCartAmount, totalCartItems } = useShop();
  const totalCartAmountinrs = totalCartAmount * 10 - 1;
  const delivery_feeinrs = delivery_fee * 10 - 1;
  const totalAmount = totalCartAmountinrs + delivery_feeinrs;
  const navigate = useNavigate();

  const handleButtonClick = ()=>{
    if (buttonText === "Checkout") {
        navigate('/place-order');
      } else if (buttonText === "Place Order") {
        navigate('/orders');
      }
  }

  return (totalCartAmountinrs && totalAmount > delivery_feeinrs) > 0 ? (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-md bg-white max-w-md lg:col-span-4 lg:mt-0 lg:p-0"
    >
      <div className="text-2xl">
      <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div>
        <dl className=" space-y-1 px-2 py-4">
          <div className="flex items-center justify-between">
            <dt className="text-sm text-gray-800">
              Subtotal ({totalCartItems} item)
            </dt>
            <dd className="text-sm font-medium text-gray-900">
              {currency} {totalCartAmountinrs}
            </dd>
          </div>

          <div className="flex items-center justify-between py-4">
            <dt className="flex text-sm text-gray-800">
              <span>Delivery Charges</span>
            </dt>
            <dd className="text-sm font-medium text-gray-700">
              {currency}
              {delivery_feeinrs}
            </dd>
          </div>
          <div className="flex items-center justify-between border-y border-dashed py-4 ">
            <dt className="text-base font-medium text-gray-900">
              Total Amount
            </dt>
            <dd className="text-base font-medium text-gray-900">
              {currency} {totalAmount}
            </dd>
          </div>
        </dl>
        <div className="flex items-center justify-between ">
          <button
            type="button"
            className="w-full  items-center justify-items-center mx-auto rounded-md h-11 bg-black py-2  text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  ) : null;
};

export default CartTotal;
