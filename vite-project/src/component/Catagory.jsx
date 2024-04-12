import React from 'react'
import Dog from '../assets/dognew.png'
import Cat from '../assets/catnew.png'
import Bird from '../assets/birdnew.png'

import { Link } from 'react-router-dom'

const ShopByPets = () => {
  return (

    <>
    <h1 className='text-center font-bold lg:text-[3vw] text-[8vw] mt-5'>Shop by pets</h1>
    <div className='lg:flex lg:justify-evenly justify-center rounded items-center p-4 mt-10 lg:h-[25vw]'>
        <Link to={"/shop"} className="flex justify-center">
        <img className='mb-2 lg:mb-0 lg:h-[50vh] lg:w-[18vw]  h-[40%] w-[70%] rounded-lg object-cover hover:scale-110 ease-in-out duration-300' src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </Link>
        <Link to={"/shop"} className="flex justify-center">
        <img className='mb-2 lg:mb-0 lg:h-[50vh] lg:w-[18vw] h-[40%] w-[70%] rounded-lg object-cover hover:scale-110 ease-in-out duration-300' src="https://images.unsplash.com/photo-1586454624115-4017beba702b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </Link>
        <Link to={"/shop"} className="flex justify-center">
        <img className='mb-2 lg:mb-0 lg:h-[50vh] lg:w-[18vw] h-[40%] w-[70%]  rounded-lg object-cover hover:scale-110 ease-in-out duration-300' src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </Link>
    </div>
    </>
  )
}

export default ShopByPets