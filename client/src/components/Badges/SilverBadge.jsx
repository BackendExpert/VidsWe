import React from 'react'

const SilverBadge = ({ Icon }) => {
  return (
    <div className="py-6 px-6 bg-gradient-to-tr from-slate-300 to-slate-500 rounded-xl">
      <center>
        <Icon className='h-8 w-auto text-gray-600' />
      </center>
    </div>
  )
}

export default SilverBadge