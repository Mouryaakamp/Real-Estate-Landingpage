import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import {motion} from 'framer-motion'
function Projects() {

    const [currentindex, setcurrentindex] = useState(0);
    const [cardsshow, setcardsshow] = useState(1)
    useEffect(() => {
      const updateCardsToshow=()=>{
        if(window.innerWidth>=1024){
            setcardsshow(projectsData.length)
        }else{
             setcardsshow(1)
        }
      }
    updateCardsToshow();


      window.addEventListener('resize',updateCardsToshow);
      return()=>{
              window.removeEventListener('resize',updateCardsToshow);
      }
    }, [])
    
    
    const nextProject = () => {
        setcurrentindex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }

    const prevProject = () => {
        setcurrentindex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    }



    return (
        <motion.div
        initial={{opacity:0,x:-200}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}  className='container mx-auto py-4
     pt-20 px-6 md:px-20 lg:px-32 w-full
       overflow-hidden ' id="Projects">
            <h1 className='text-2xl sm:text-4xl font-bold md-2 text-center '>Projects
                <span className=' underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
            <p className='text-center tect-gray-500 mb-8 max-w-80 mx-auto'>
                Crafting Spaces, Building Legacies-Explore Our Portfolio </p>
            {/* slider buttons */}
            <div className='flex justify-between'>
                <button>
                    <img onClick={() => prevProject()} src={assets.left_arrow} alt="Previous" className=' p-3 bg-gray-200 rounded' aria-label='Previous Projects' />
                </button>
                <button>
                    <img onClick={() => nextProject()} src={assets.right_arrow} alt="Next" className=' p-3 bg-gray-200 rounded' aria-label='Next Projects' />
                </button>
            </div>

            {/* project slider container */}
            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out'
                style={{transform:`translateX(-${(currentindex*100)/cardsshow}%)`}}>
                    {projectsData.map((project, index) => (
                        <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                            <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className=' text-xl font-semibold text-gray-800  '>{project.title}</h2>
                                    <p className='text-gray-500 text-sm'>
                                        {project.price} <span className='px-1'>|</span>{project.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Projects