import React from 'react'
import Navbar from '../../components/common/Navbar'
import Complaints from '../../components/users/Complaints'
import ComplaintForm from '../../components/users/ComplaintForm'

const Dashboard = () => {
  return (
    <div className='flex'>
        <div className='w-[15vw] h-[100vh]'>
            <Navbar />
        </div>
        <div className='w-[55vw] h-[100vh]'>
          <Complaints />
        </div>
        <div className='w-[30vw] h-[100vh]'>
          <ComplaintForm />
        </div>
    </div>
  )
}

export default Dashboard