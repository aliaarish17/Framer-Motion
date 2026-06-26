import React, { useState } from 'react'
import { motion } from 'motion/react'

function CollapseList() {
    const [expanded,setExpanded] = useState(null)
    const items = [1,2,3]
    const handleToggle = (id) =>{
        setExpanded((prev) => prev === id? null: id)
    }
  return (
    <>
    <div className='h-full w-full justify-center items-center flex'>

    <div 
    className='flex flex-col gap-3 h-[auto] w-auto'>
        {items.map((id)=>(
            <motion.div
            key={id}
            layout
            onClick={()=> handleToggle(id)}
            className='className="bg-white mt-7 p-4 rounded-lg shadow-md cursor-pointer text-black"
          >'>
            <h3>Item {id}</h3>

            {
                expanded=== id && (
                    <motion.p
                    layout className="mt-2 text-gray-600 text-sm">
                    This is the collapsible content for item {id}!
              </motion.p>
                )
            }
            </motion.div>
    
        ))}


    </div>
    </div>
    </>
  )
}

export default CollapseList