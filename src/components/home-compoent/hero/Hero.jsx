import { motion } from 'framer-motion';
import React, { useContext,useEffect, useState } from 'react'
import { HomeContext } from '../../../context/HomeContext';

export default function Hero() {
    let {heroImages} = useContext(HomeContext);
    let [index , setIndex] = useState(0);
    useEffect(()=>{
        const changeSrc = setInterval(()=>{
            if(index>20)
                {
                    setIndex(0);
                }
                else
                {
                    index++;
                    setIndex(index);
                }
        },1000);
        return ()=>   clearInterval(changeSrc);
    },[index])
    const variants = {
        initial :{
            opacity:0.2
        },
        animate:{
            opacity:1,
            transition:{
                duration:1.5
            }
        },
    }
    const titleVariants={
        initial :{
            opacity:0,
        },
        animate:{
            opacity:1,
        }
    }
    let imagesrc = `https://image.tmdb.org/t/p/original${heroImages[index]?.backdrop_path ? heroImages[index]?.backdrop_path:'k2G4WqGiT60K9yJnPh4K6VLnl3A.jpg'}`;
 return (
    <>
        <section className=''>
            <div className='relative '>
               
               {
                heroImages[index]?.backdrop_path
                ?
                <motion.div className='h-screen' style={{backgroundImage:`url(${imagesrc})`,backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'}}
                key={heroImages[index]?.backdrop_path}
                variants={variants}
                initial='initial'
                animate='animate'
                >
                    <motion.div className='absolute top-0 left-0 bottom-0 right-0 dark-bg flex justify-start items-end'>
                        <motion.h1 variants={titleVariants} animate='animate' initial='initial' key={heroImages[index]?.original_title} className='absolute z-10 text-7xl font-bold w-10 m-28'>{heroImages[index]?.original_title==='X' ? 'Hello World 😊':heroImages[index]?.original_title}</motion.h1>
                    </motion.div>
                 </motion.div>
                :
                <motion.div className='h-screen' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/k2G4WqGiT60K9yJnPh4K6VLnl3A.jpg)`,backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'}}
                variants={variants}
                initial='initial'
                animate='animate'
                >
                 </motion.div>
            
            }
    
               
            </div>
        </section>
    </>
  )
}
