import React from "react";
import AcceptTask from "../TaskList/AcceptTask";
import NewTask from "../TaskList/NewTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";
const TaskList = ({ data }) => {
  console.log("TaskList received data:", data);

  // Safety check - if no data or no tasks, show message
  if (!data || !data.tasks || !Array.isArray(data.tasks)) {
    return (
      <div className="w-full h-[60%] flex items-center justify-center text-gray-400">
        <p>No tasks available</p>
      </div>
    );
  }

  console.log("Rendering tasks:", data.tasks);

  return (
    <div
      id="tasklist"
      className="w-full h-96 px-2 overflow-x-auto py-2 flex items-start gap-6 justify-start flex-nowrap scroll-smooth"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.new_task) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        return null;
      })}
      
      {data.tasks.length === 0 && (
        <div className="w-full h-64 flex flex-col items-center justify-center text-gray-400">
          <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002 2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          <p className="text-lg font-medium">No tasks assigned yet</p>
          <p className="text-sm opacity-75">Tasks assigned to you will appear here</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
