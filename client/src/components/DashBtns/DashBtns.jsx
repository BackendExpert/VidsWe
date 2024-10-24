import React from 'react'

const DashBtns = ({ btnText }) => {
  return (
    <button className='py-2 px-6 rounded-md shadow-md bg-[#7466f1] duration-500 hover:bg-[#7466f1]/70'>
        {btnText}
    </button>
  )
}

export default DashBtns