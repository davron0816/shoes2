import React from 'react';
import picture from './assets/Picture.png';

const Min = () => {
  const bgColors = ['#FF99E2', '#C5C1C7', '#5CFF62'];

  return (
    <div className='flex justify-center mt-10 gap-10'>
      {bgColors.map((color, index) => (
        <div
          key={index}
          className='rounded-lg p-4'
          style={{ backgroundColor: color, width: '340px', height: '450px' }}
        >
          <img src={picture} alt="Nike Air Force" className='mx-auto mb-4' />
          <div className="text-center space-y-2">
            <h2 className='text-white font-bold'>
              NIKE AIR FORCE 1 ‘07 (white/black)
            </h2>
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

export default Min;
