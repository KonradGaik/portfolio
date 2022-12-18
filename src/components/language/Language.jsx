import React from 'react'

const Language = () => {
  return (
    <div className='fixed top-0 m-5 left-0'>
      <select name="lang" className='bg-transparent w-full text-2xl text-green-100' id="lang">
        <option value="pl">PL</option>
        <option value="en">EN</option>
      </select>
    </div>
  )
}

export default Language
