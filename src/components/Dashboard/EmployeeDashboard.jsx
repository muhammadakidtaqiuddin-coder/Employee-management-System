import React from 'react'
import Header from '../../subComponents/Header'
import TaskListNumber from '../../subComponents/TaskListNumber'
import TaskList from '../../subComponents/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
      <div className='max-w-7xl mx-auto p-8'>
        <div className='mb-6'>
          <Header />
        </div>
        
        <div className='mb-8'>
          <TaskListNumber data={data}/>
        </div>
        
        <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6'>
          <h2 className='text-2xl font-bold text-white mb-6 flex items-center'>
            My Tasks
          </h2>
          <TaskList data={data} />
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard