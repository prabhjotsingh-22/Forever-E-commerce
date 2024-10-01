import React, { createContext, useContext, useEffect, useState } from 'react';
import { products } from '../assets/frontend_assets/assets';
import { toast } from 'react-toastify';

// Create a context with default values
const ShopContext = createContext({
  products: [],
  currency: '₹',
  delivery_fee: 10,
  search: '',
  setSearch: () => {},
  showSearch: false,
  setShowSearch: () => {},
  cartItem: {},
  setCartItem: () => {},
  addToCart: () => {},
  totalCartItems: () => {},
  updateQuantity: ()=> {},
  totalCartAmount: '',
  setTotalCartAmount: ()=> {}
});

// Create a provider component
export const ShopProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({})
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalCartAmount, setTotalCartAmount] = useState(0);

  const addToCart = async (itemId, size, quantity) => {

    if(!size){
      toast.error('Select Product Size')
      return
    }
    let totalItems = totalCartItems;
    let cartData = structuredClone(cartItem)

    if(cartData[itemId]){
      if(cartData[itemId][size]){
          if((cartData[itemId][size] + quantity)<10){
            cartData[itemId][size] += quantity;
            totalItems+=quantity;
          }
          else{
            totalItems = 10 - cartData[itemId][size];
            cartData[itemId][size] = 10
          }
      }
      else{
        cartData[itemId][size] = quantity;
        totalItems+=quantity;
      }
    }
    else{
      cartData[itemId] = {};
      cartData[itemId][size] = quantity;
      totalItems+=quantity;
    }

    setCartItem(cartData)
    setTotalCartItems(totalItems)
    updateTotalCartAmount(cartData);
  }

  const updateQuantity = (id, size, newQuantity) => {
    
    let cartData = structuredClone(cartItem)
    let total = totalCartItems;
    total -= cartData[id][size];
    cartData[id][size] = Math.max(0, newQuantity);
    total += cartData[id][size];

    setCartItem(cartData)
    setTotalCartItems(total)
    updateTotalCartAmount(cartData);
  };

  const updateTotalCartAmount = async(cartData) =>{
    let totalAmount = 0;

    // Iterate through the cart data to calculate the total amount
    for (const itemId in cartData) {
      for (const size in cartData[itemId]) {
        const product = products.find((product) => product._id === itemId);
        if (product) {
          totalAmount += cartData[itemId][size] * product.price;
        }
      }
    }

    setTotalCartAmount(totalAmount);
  }

  useEffect(()=>{
    console.log(cartItem);
  }, [cartItem])

  const value = {
    products,
    currency: '₹',
    delivery_fee: 10,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addToCart,
    totalCartItems,
    updateQuantity,
    totalCartAmount
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

// Custom hook to use the ShopContext
export default function useShop() {
  return useContext(ShopContext);
}
