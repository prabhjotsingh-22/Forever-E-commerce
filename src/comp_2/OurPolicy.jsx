import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-row justify-around text-center items-center gap-12 py-20">

  <div >
    <img src={assets.exchange_icon} alt="Easy Exchange Policy" className="w-12 m-auto mb-5" />
    <h3 className="font-semibold text-lg">Easy Exchange Policy</h3>
    <p className="text-gray-500">We offer hassle free exchange policy</p>
  </div>

  <div >
    <img src={assets.quality_icon} alt="7 Days Return Policy" className="w-12 m-auto mb-5" />
    <h3 className="font-semibold text-lg">7 Days Return Policy</h3>
    <p className="text-gray-500">We provide 7 days free return policy</p>
  </div>

  <div >
    <img src={assets.support_img} alt="Best Customer Support" className="w-12 m-auto mb-5" />
    <h3 className="font-semibold text-lg">Best Customer Support</h3>
    <p className="text-gray-500">We provide 24/7 customer support</p>
  </div>
</div>

  )
}

export default OurPolicy