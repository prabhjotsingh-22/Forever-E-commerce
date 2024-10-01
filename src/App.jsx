import { useState } from 'react'
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import {Product} from './components/Product'
import {PlaceOrder} from './components/PlaceOrder'
import {Collection} from './components/Collection.jsx'
import {Cart} from './components/Cart'
import { Login } from './components/Login'
import {Orders} from './components/Orders'
import {NavigationBar} from './comp_2/NavigationBar.jsx';
import Layout from './Layout.jsx'
import { ShopProvider } from './context/ShopContext'
import { products } from './assets/frontend_assets/assets.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const currency = '₹'
const delivery_fee = 10

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* Define all your routes here as children of the Layout component */}
      <Route index element={<Home />} />  {/* 'index' renders Home on the root path */}
      <Route path="collection" element={<Collection/>} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="product/:productId" element={<Product />} />
      <Route path="orders" element={<Orders />} />
      <Route path="place-order" element={<PlaceOrder />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return (
      <ShopProvider  value={ {products, currency, delivery_fee} }>
      <RouterProvider router={router} />
      </ShopProvider>
  );
}

export default App;
