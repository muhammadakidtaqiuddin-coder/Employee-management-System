import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  const employees = authData ? authData.employees : [];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-white mb-4">All Tasks Overview</h2>
      <div
        id="alltask"
        className="h-60 bg-[#2a2a2a] rounded-lg p-6 overflow-auto border border-gray-600 shadow-lg"
      >
        {employees.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400">No employees or tasks found</p>
          </div>
        ) : (
          employees.map((employee, empIndex) =>
            employee.tasks && employee.tasks.length > 0 ? (
              employee.tasks.map((task, taskIndex) => {
                let status = "";
                let bgColor = "";
                let textColor = "text-white";

                if (task.failed) {
                  status = "Failed";
                  bgColor = "bg-red-500";
                } else if (task.completed) {
                  status = "Completed";
                  bgColor = "bg-green-500";
                } else if (task.new_task) {
                  status = "New Task";
                  bgColor = "bg-yellow-500";
                  textColor = "text-black";
                } else if (task.active) {
                  status = "In Progress";
                  bgColor = "bg-blue-500";
                }

                return (
                  <div
                    key={`${empIndex}-${taskIndex}`}
                    className={`${bgColor} py-4 mb-3 px-5 flex justify-between items-center rounded-lg shadow-md hover:shadow-lg transition-shadow`}
                  >
                    <div className="flex flex-col">
                      <h2 className={`font-semibold ${textColor} text-sm`}>{employee.name}</h2>
                      <p className={`${textColor} text-xs opacity-80`}>{employee.email}</p>
                    </div>
                    <div className="flex-1 mx-4">
                      <h3 className={`font-medium ${textColor}`}>{task.title}</h3>
                      <p className={`${textColor} text-xs opacity-80`}>{task.category}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className={`${textColor} font-medium text-sm`}>{status}</span>
                      <span className={`${textColor} text-xs opacity-80`}>{task.date}</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div key={empIndex} className="py-3 mb-2 px-4 bg-gray-600 rounded-lg">
                <p className="text-gray-300">
                  {employee.name} - No tasks assigned
                </p>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default AllTask;
