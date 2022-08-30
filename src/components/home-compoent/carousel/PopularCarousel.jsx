import React, { useContext , useEffect, useState } from 'react'
import { HomeContext } from '../../../context/HomeContext';
import MediaCard from '../../../shared/MediaCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion , useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Carousel() {
    let { popularShow , getPopularShow } = useContext(HomeContext);
    let [animateShow , setAnimateShow]= useState('Movies');
    let [mediaType , setMediaType]=useState('movie');
    let showType='';
    const settingss = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: false,
      speed: 250,
      autoplaySpeed: 1000,
      cssEase: 'linear',
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
   
    const getPopularMedia=(e)=>{
      showType = e.target.innerText;
      if(showType==='Movies')
      {
        showType = showType.replace('Movies' , 'movie');
      }
      else if(showType==='on tv'){
        showType = showType.replace('on tv','tv');
      }
      getPopularShow(showType);
      setMediaType(showType);
    }

    //component inview to animate
    const {ref , inView} = useInView({
      threshold:0.4
    });
    const animation=useAnimation();
   useEffect(()=>{
    if(inView)
    {
      animation.start({
        x:0,
        transition:{
          type:'spring',
          stiffness:30
        }
      })
    }
    if(!inView){
      animation.start({
        x:'-100vw'
      })
    }
   },[inView ,animateShow])
   const onTap=(e)=>{
    setAnimateShow(e.target.innerText);
   }
  return (
    <section ref={ref} className='my-10'>
        <motion.div
        animate={animation}  className='custom-container'>
          <div className='flex'>
            <h2 className='text-white text-4xl mr-4'>What's Popular</h2>
            <div className='border-2  rounded-full'>
              <motion.button onClick={getPopularMedia} onTap={onTap} className=' p-3 mr-1 rounded-full focus:outline-none hover:bg-pink-600 focus:bg-pink-600'>Movies</motion.button>
              <motion.button onClick={getPopularMedia} onTap={onTap} className='p-3 rounded-full focus:outline-none hover:bg-pink-400 focus:bg-pink-600'>on tv</motion.button>
            </div>
            <div>
            </div>
          </div>
          {
            animateShow==='Movies'
            ?
            <motion.div initial={{opacity:0}} animate={{opacity:1}}transition={{duration:0.5}} key={animateShow}>
            <Slider {...settingss}
            className='my-6 p-3'>
                {
                  popularShow.length>0
                  ?
                  popularShow.map((show,i)=>(
                      <MediaCard show={show} mediaType={mediaType} key={i}/>
                  ))
                  :
                  '' 
              }
            </Slider>
          </motion.div>
          :
          <motion.div initial={{opacity:0}} animate={{opacity:1}}transition={{duration:0.5}} key={animateShow}>
            <Slider {...settingss}
            className='my-6 p-3'>
                {
                  popularShow.length>0
                  ?
                  popularShow.map((show,i)=>(
                      <MediaCard show={show} key={i}/>
                  ))
                  :
                  '' 
              }
            </Slider>
          </motion.div>
          }
         
        </motion.div>
    </section>
  )
}
