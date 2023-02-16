import React from 'react'
import {data} from '../data/data';
import {FaShoppingBag} from 'react-icons/fa'
const RecentOrders = () => {
  return (
    <div className='w-full  left-3 lg:col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 bg-white overflow-scroll'>
        <h1 className='text-center font-bold'> Recent Orders</h1>
        <ul>
            {data.map((order,id)=>(
                <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
                  <div className='bg-purple-100 rounded-large p-3 '>
                    <FaShoppingBag className='text-purple-800'/>
                  </div>
                    <div className='pl-4'>
                        <p className='font-bold text-gray-800'>${order.total}</p>
                        <p className='text-gray-400 text-sm'>{order.name.first}</p>
                    </div>
                    <p className='lg:flex md:hidden absolute right-6 text-sm  '>{order.date}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default RecentOrders;