import React from 'react'
import NavbarLinks from '../../data/NavbarLinks';
import Logout from "../../assets/navbar/sign-out-fill.svg";

const Navbar = () => {
  return (
    <div className='flex flex-col justify-between items-center w-[100%] h-[100%] bg-[#f1f1fb] border-r-[2px] py-5 px-2'>
        {/* logo + image */}
        <div className='flex h-[5vh] items-center justify-center border-b-[2px] pb-5 w-[15vw]'>
            <img src=""/>
            <p className=' font-bold text-[20px]'>Aqua Vigil</p>
        </div>

        {/* navigation components */}
        <div className='flex flex-col gap-y-6 px-10'>
            {
                NavbarLinks.map((item, index) => (
                    <div key={index} className={`flex items-center px-5 gap-x-6 ${index !== 2 && "border-b-[2px] pb-3"} cursor-pointer duration-200 transition-all`}>
                        <img src={item.src} alt={item.title}></img>
                        <p className=' font-semibold text-[16px]'>{item.title}</p>
                    </div>
                ))
            }
        </div>

        {/* logout button */}
        <div className=''>
            <div className='flex justify-between items-center pt-3 border-t-[2px] w-[15vw] px-10 cursor-pointer duration-200 transition-all'>
                <img src={Logout} alt='logout'></img>
                <p className='font-semibold text-[16px]'>Logout</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar