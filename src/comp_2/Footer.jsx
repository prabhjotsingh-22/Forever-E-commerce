import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 mt-20">
      <div className="text-center">
        <Link to="/" className="inline-flex items-center">
          <img src={assets.logo} className='w-36' alt="Logo" />
        </Link>
      </div>

      <div className="flex justify-center space-x-8 mt-4">
        <a
          href="https://github.com/prabhjotsingh-22"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-600"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/prabhjot-singh-walia/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-600"
        >
          <FaLinkedinIn size={24} />
        </a>
        <a
          href="https://x.com/prabyyy366"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-600"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.instagram.com/prabh.sw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-600"
        >
          <FaInstagram size={24} />
        </a>
      </div>

      <div className="text-center mt-6 text-sm text-gray-600">
        © 2023 Madura Fashion & Lifestyle, A Division of Aditya Birla Fashion & Retail Limited. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
