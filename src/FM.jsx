import React from 'react'
import { motion } from 'motion/react'

function AnimatedBUtton() {
  return (
    <>
    <div className='flex min-h-screen w-full items-center justify-center gap-4 flex-col'>
    <motion.div
    initial={{opacity:0,x:-40}} //-> <- for this effect
    animate={{opacity:1,x:0}}
    transition={{
        
        delay:1.5,
        duration:0.5,
        ease:"easeOut",
        
    }}>
        <h1 className='text-center text-4xl mt-7'>hello</h1>
    </motion.div>

    <motion.button whileHover={{scale:1.08, y:-2}} 
    whileTap={{scale:0.8, y:1}}
    transition={{
        type:"spring",
        stiffness:300,
        damping:15
    }}
    className='w-[100px] h-[50px] rounded-2xl cursor-pointer   bg-amber-300 text-white   text-center '>  TAP IT   </motion.button>

    </div>
    </>
  )
}

export default AnimatedBUtton
