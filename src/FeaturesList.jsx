import React from 'react'
import { motion } from 'motion/react'

function FeaturesList() {
    const features = ['Fast', 'Declarative', 'Powerful', 'Fun']
  return (
    <>
    <div className='w-full w-full text-black '>
    <ul>
    {features.map((feature)=>(
        <motion.li key={feature}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
            duration:1
        }}>
            {feature}

        </motion.li>
        
    ))}

    </ul>

    </div>

    </>
  )
}

export default FeaturesList