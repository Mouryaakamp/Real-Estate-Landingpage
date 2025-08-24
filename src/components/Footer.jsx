import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 w-full overflow-hidden bg-gray-900' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <img src={assets.logo_dark} alt="footerlogo" />
                    <p className='text-gray-400 mt-4'>Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Ducimus necessitatibus
                        sed dolore deleniti numquam et beatae
                        veniam rerum corporis quidem iusto ut,
                        voluptatibus odio ea, </p>
                </div>

                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a href="#Header" className='hover:text-white'>Home</a>
                        <a href="#About" className='hover:text-white'>About Us</a>
                        <a href="#Contact" className='hover:text-white'>Contact Us</a>
                        <a href="#" className='hover:text-white'>Privacy Policy</a>

                    </ul>
                </div>

                <div className='w-full md:w-1/3 '>
                    <h3 className='text-white text-lg font-bold mb-4'>Subscribe To Our Newsletter </h3>
                    <p className='text-gray-400 mb-4 max-w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum magnam vitae molestiae.</p>
                    <div className='flex gap-2'>
                        <input className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none  w-full md:w-auto ' type="email" placeholder='Enter Your Email' />
                        <button className='rounded py-2 px-4 text-white bg-blue-500 '>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='text-white py-4 mt-10 text-center border-t border-gray-700'>
Copyright 2025 &copy; MP All Right Reserved.
            </div>
        </div>
    )
}

export default Footer