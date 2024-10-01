// layout.js

import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationBar } from './comp_2/NavigationBar';  // Adjust the import path as needed
import Footer from './comp_2/Footer';
import SearchBar from './comp_2/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div>
      <ToastContainer/>
      <NavigationBar />
      <SearchBar/>
        <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
