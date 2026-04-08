import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="group h-80 flex-shrink-0 w-80 bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/10">
      <div className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-semibold rounded-full">
            {data.category}
          </span>
          <div className="flex items-center text-red-400 text-xs">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {data.date}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-red-100 transition-colors">
            {data.title}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
            {data.description}
          </p>
        </div>

        {/* Status Badge */}
        <div className="mt-4 pt-4 border-t border-red-500/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-red-400 text-xs">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Failed
            </div>
            <div className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full border border-red-500/30">
              ✗ Failed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FailedTask