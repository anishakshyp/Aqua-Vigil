import React from 'react'
import ComplaintCard from './ComplaintCard'

const Complaints = () => {
  return (
    <div className='h-[100vh] border-r-[2px]'>

        <div className='h-[15vh] w-[100%] flex items-center px-20'>
            <p className='font-bold text-[32px]'>
                Complaints
            </p>
        </div>

        <div className='max-h-[80vh] h-[80vh] overflow-y-scroll px-10'>
            {
                [1, 2, 3, 4, 5, 6, 7, 8,1, 1,1 ,1 ,1 ].map((comp, index) => (
                    <ComplaintCard key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default Complaints