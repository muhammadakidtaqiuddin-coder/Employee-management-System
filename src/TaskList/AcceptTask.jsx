import React from "react";

const AcceptTask = ({ data }) => {
  const handleSubmitComplete = () => {
    // Handler for completing task
  };

  const handleSubmitFail = () => {
    // Handler for failing task
  };

  return (
    <div className="group h-80 flex-shrink-0 w-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold rounded-full">
            {data.category}
          </span>
          <div className="flex items-center text-blue-400 text-xs">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {data.date}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-100 transition-colors">
            {data.title}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
            {data.description}
          </p>
        </div>

        {/* Status Badge & Actions */}
        <div className="mt-4 pt-4 border-t border-blue-500/10">
          <div className="flex items-center text-blue-400 text-xs mb-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            In Progress
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handleSubmitComplete}
              className="flex-1 px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white text-xs font-semibold rounded-lg transition-all duration-200 hover:scale-105">
              Complete
            </button>
            <button 
              onClick={handleSubmitFail}
              className="flex-1 px-3 py-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-400 hover:to-pink-400 text-white text-xs font-semibold rounded-lg transition-all duration-200 hover:scale-105">
              Mark Failed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
