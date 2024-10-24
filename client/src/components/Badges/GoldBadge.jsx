import React from 'react'

const GoldBadge = ({ Icon }) => {
  return (
    <div className="py-6 px-6 bg-gradient-to-tr from-amber-100 to-yellow-400 rounded-xl">
        <center>
          <Icon className='h-8 w-auto text-yellow-600' />
        </center>
    </div>
  )
}

export default GoldBadge