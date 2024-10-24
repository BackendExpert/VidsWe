import React from 'react';

const BrownBadge = ({ Icon }) => {
  return (
    <div className="py-6 px-6 bg-gradient-to-tr from-[#d6a26a] to-[#8b5d33] rounded-xl">
      <center>
        <Icon className='h-8 w-auto' />
      </center>
    </div>
  );
}

export default BrownBadge;