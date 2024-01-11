import Women from '@/categories/Women'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='text-center mb-4'>
     <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>WOMEN'S <br/> T-SHIRTS</h2>
     </div>
      <div className='grid grid-cols-4 gap-4 px-4'>
        <Women />
        <Women />
        <Women />
        <Women />
        <Women />
        <Women />
        <Women />
        <Women />
        <Women />
        <Women />
        <Women />
        <Women />
      </div>
    </>
  )
}

export default page