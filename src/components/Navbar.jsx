import React, {useState} from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { IoSearchOutline, IoDownload  } from "react-icons/io5";
import { FaShoppingCart,FaWallet, FaHeart, FaUserFriends   } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaTruckFast } from "react-icons/fa6";
import { IoMdHelpCircle, IoMdPricetag  } from "react-icons/io";




const Navbar = () => {

const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
                <FiAlignJustify size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Best <span className='font-bold'>Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
            </div>

            {/* Search */}

            <div className='flex items-center px-2 bg-gray-200 rounded-full w-[200px] sm:w-[400px] lg:w-[500px]'>
            <IoSearchOutline size={20} />
                <input className='bg-transparent p-2 focus:outline-none' type="text"  placeholder='Search foods'/>
            </div>
            {/* Card button */}
            <button className='items-center bg-black text-white hidden justify-between md:flex py-2 rounded-full'>
                <FaShoppingCart size={20} className='mr-2' />
                Cart
            </button>

            {/*Mobile Menu */}
            {/*Overlay*/}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>: ''}

            

            {/*Side menu */}

            <div className={nav?' fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <IoMdClose onClick={()=>setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
            <h2 className='text-2xl p-4'>Best 
                <span className='font-bold'>Eats</span>
            </h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex cursor-pointer'><FaTruckFast  size={25} className='mr-4 mt-1'/> Orders</li>
                    <li className='text-xl py-4 flex cursor-pointer'><FaHeart size={25} className='mr-4 mt-1'/> Favourites</li>
                    <li className='text-xl py-4 flex cursor-pointer'><FaWallet  size={25} className='mr-4 mt-1'/> Wallet</li>
                    <li className='text-xl py-4 flex cursor-pointer'><IoMdHelpCircle size={25} className='mr-4 mt-1'/> Help</li>
                    <li className='text-xl py-4 flex cursor-pointer'><IoMdPricetag  size={25} className='mr-4 mt-1'/> Promotions</li>
                    <li className='text-xl py-4 flex cursor-pointer'><IoDownload  size={25} className='mr-4 mt-1'/> Best Ones</li>
                    <li className='text-xl py-4 flex cursor-pointer'><FaUserFriends  size={25} className='mr-4 mt-1'/> Invite Friends</li>
                </ul>
            </nav>
            </div>

    </div>
  )
}

export default Navbar