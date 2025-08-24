import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import {motion} from 'framer-motion'

function Testimonails() {
    return (
        <motion.div
        initial={{opacity:0,x:200}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}  className='container mx-auto py-10 lg:px-32w-full overflow-hidden' id="Testimonails">
            <h1 className='text-2xl sm:text-4xl font-bold md-2 text-center'> Coustomer <span className=' underline underline-offset-4 decoration-1 under font-light'>
                Testimonials</span></h1>
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Real Stories From Those Who Found Homes With Us
            </p>
            <div className='flex flex-wrap justify-center gap-7'>
                {testimonialsData.map((testmonial, index) => (
                    <div className='max-w-[340px] border-0 shadow-lg rounded px-8 py-12 text-center' key={index}>
                        <img className='w-20 h-20 rounded-full mx-auto md-4' src={testmonial.image} alt={testmonial.alt} />
                        <h2 className='text-xl text-gray-700 font-medium'>{testmonial.name}</h2>
                        <p className='text-gray-500 text-sm mb-4'>{testmonial.title}</p>
                        <div className='flex justify-center gap-1 text-red-500 mb-4'>
                            {Array.from({ length: testmonial.rating }, (items, index) => (
                                <img key={index} src={assets.star_icon} alt="" />
                            ))}
                        </div>
                        <p className='text-gray-600'>{testmonial.text}</p>
                    </div>
                ))}
            </div>

        </motion.div>
    )
}

export default Testimonails