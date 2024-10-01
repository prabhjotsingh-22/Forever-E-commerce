'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'
import { assets } from '../assets/frontend_assets/assets';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useShop from '../context/ShopContext';

const logoImage = assets.logo;
const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Collection',
    href: 'collection',
  },
  {
    name: 'About',
    href: 'about',
  },
  {
    name: 'Contact',
    href: 'contact',
  },
]

export function NavigationBar() {
  const {setShowSearch, totalCartItems} = useShop()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = React.useState(false);
  const cartItemCount = totalCartItems;
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleSearchClick = () => {
    setShowSearch(true);
    navigate('/collection');
  }

  return (
    <div className="relative w-full bg-white mt-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
      <Link to="/" className="inline-flex items-center">
          <img src={logoImage} className='w-36' alt="Logo" />
        </Link>
        <div className="hidden md:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `text-lg font-semibold hover:text-gray-700 ${isActive ? 'text-gray-700 underline' : 'text-gray-600'}`
              }
            >
              {item.name}
            </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end items-center gap-6 pr-0">
          <img onClick={handleSearchClick} src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />

          <div className="relative">
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt="Profile"
              onClick={toggleProfileDropdown}
            />
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-slate-100 text-gray-600 font-medium ring-1 ring-black ring-opacity-5">
                <div className="py-1"> 
                  <NavLink
                    to="/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-200 hover:text-black"
                  >
                    My Profile
                  </NavLink>
                  <NavLink
                    to="/orders"
                    className="block px-4 py-2 text-sm hover:bg-gray-200 hover:text-black"
                  >
                    Orders
                  </NavLink>
                  <button
                    onClick={() => alert('Logging out...')}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200 hover:text-black"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>        

          <Link to="/cart" className='relative'>
            <img src={assets.cart_icon} className="w-5 min-w-5 cursor-pointer" alt="Cart" />
            <span className={`absolute right-[-5px] bottom-[-5px] w-4 text-xs text-center leading-4 bg-black text-white aspect-square rounded-full 
              ${cartItemCount === 0 ? 'hidden' : ''}`}>
              {cartItemCount}
            </span>
          </Link>

          <img 
            onClick={() => setIsMenuOpen(true)} 
            src={assets.menu_icon} 
            className='w-5 cursor-pointer sm:hidden' 
            alt="Menu" 
          />
        </div>

        {/* Sidebar */}
        <div className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
          <div className="flex justify-end p-4">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-gray-900"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col px-0">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `py-2 px-4 text-lg  font-semibold ${isActive ? 'text-gray-200 bg-black' : 'text-gray-600 border-b-2 border-gray-300'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
