import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

function Button() {
    const [open, setOpen] = useState(false)
  return (
    <div className='w-full h-full flex flex-col items-center justify-center bg-white'>
        <button className='mt-7 w-[80px] h-[50px] bg-amber-500 text-black' onClick={()=>setOpen((o)=> !o)}> TOGGLE</button>
        <AnimatePresence>
        {open && (
            <motion.div
            className='w-[300px] h-[120px] bg-amber-400'
            initial= {{y:-10, opacity:0}}
            animate={{y:0, opacity:1}}
            exit={{y:-10, opacity:0}}
            
            transition={{
                duration:0.25
            }}>
                This is an animated element

            </motion.div>
        )}
        </AnimatePresence>
    </div>
  )
}

export default Button