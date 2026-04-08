import React, {useState} from 'react'

const NewTask = ({data}) => {
  const [accepted, setAccepted] = useState(false);
  const handleClick = () => {
    setAccepted(true);
  }
  return !accepted && (
      <div className="group h-80 flex-shrink-0 w-80 bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10">
      <div className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold rounded-full">
            {data.category}
          </span>
          <div className="flex items-center text-orange-400 text-xs">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {data.date}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-orange-100 transition-colors">
            {data.title}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
            {data.description}
          </p>
        </div>

        {/* Status Badge */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-orange-500/10">
          <div className="flex items-center text-orange-400 text-xs">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
            New Task
          </div>
          <button onClick={handleClick} className="group/btn px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white text-xs font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg">
            <span className="flex items-center">
              Accept
              <svg className="w-3 h-3 ml-1 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
    )}

export default NewTask