import React from 'react';
import picture from './assets/Picture.png';

const Head = () => {
  return (
    <div className='flex justify-center mt-10 gap-10'>
      {["#CBCBCB", "#5CA7FF", "#D083FF"].map((bgColor, index) => (
        <div
          key={index}
          className='rounded-lg p-4'
          style={{ backgroundColor: bgColor, width: "340px", height: "450px" }}
        >
          <img className='mx-auto mb-4' src={picture} alt="Nike Shoe" />
          <div className="text-center space-y-2">
            <h2 className='text-white font-bold'>NIKE AIR FORCE 1 ‘07 (white/black)</h2>
            <p className='text-white'>$89.99</p>
            <p className='text-white text-sm'>
              I lost left shoe, don’t need this one anymore. <br /> Please buy it.
            </p>
            <button className="bg-white text-black py-1 px-4 rounded-xl mt-2">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Head;
