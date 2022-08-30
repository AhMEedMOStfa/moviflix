import React, { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext';
import  './Modal.css';
import {motion , AnimatePresence} from 'framer-motion';
import Trailer from '../../pages/trailer/Trailer';

const backdropVariants={
    initial:{
        opacity:0
    },
    animate:{
        opacity:1
    }
}
export default function Modal() {
    let {showModal ,setShowModal} = useContext(ModalContext);
  return (
    <>
    <AnimatePresence mode='wait'>
    {showModal&&
        <motion.div className='backdrop'
        variants={backdropVariants}
        initial='initial'
        animate='animate'
        >
            {/* <Trailer/> */}
        </motion.div>
    }
    </AnimatePresence>
    </>
   
  )
}
