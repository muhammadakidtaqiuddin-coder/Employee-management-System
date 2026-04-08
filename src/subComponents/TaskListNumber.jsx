import React from 'react'

const TaskListNumber = ({data}) => {
    if (!data || !data.tasks) {
        return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {[1,2,3,4].map((i) => (
                    <div key={i} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 animate-pulse">
                        <div className="h-8 bg-gray-700 rounded mb-2"></div>
                        <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                    </div>
                ))}
            </div>
        )
    }

    const newTaskLen = data.tasks.reduce((count,task) => task.new_task ? count + 1 : count, 0);
    const failedTaskLen = data.tasks.reduce((count,task)=>task.failed ? count + 1 : count, 0);
    const completedTaskLen = data.tasks.reduce((count,task)=>task.completed ? count + 1 : count, 0);
    const activeTaskLen = data.tasks.reduce((count,task)=>task.active ? count + 1 : count, 0);

    const stats = [
        {
            title: "New Tasks",
            count: newTaskLen,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            ),
            gradient: "from-orange-500 to-red-500",
            bgColor: "bg-orange-500/10",
            borderColor: "border-orange-500/20",
            textColor: "text-orange-400"
        },
        {
            title: "Completed",
            count: completedTaskLen,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: "from-green-500 to-emerald-500",
            bgColor: "bg-green-500/10",
            borderColor: "border-green-500/20",
            textColor: "text-green-400"
        },
        {
            title: "In Progress",
            count: activeTaskLen,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            gradient: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/20",
            textColor: "text-blue-400"
        },
        {
            title: "Failed",
            count: failedTaskLen,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
            ),
            gradient: "from-red-500 to-pink-500",
            bgColor: "bg-red-500/10",
            borderColor: "border-red-500/20",
            textColor: "text-red-400"
        }
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {stats.map((stat, index) => (
                <div key={index} className={`group ${stat.bgColor} backdrop-blur-sm rounded-2xl border ${stat.borderColor} p-5 hover:scale-105 transition-all duration-300 cursor-pointer`}>
                    <div className="space-y-1">
                        <h1 className="text-4xl mb-2 font-bold text-white group-hover:scale-110 transition-transform origin-left">
                            {stat.count}
                        </h1>
                        <h2 className={`text-xl font-medium ${stat.textColor} opacity-80`}>
                            {stat.title}
                        </h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TaskListNumber