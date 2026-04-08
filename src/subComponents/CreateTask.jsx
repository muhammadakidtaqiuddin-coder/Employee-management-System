import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
  const authData = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title:"",
    date:"",
    assignedTo:"",
    category:"",
    description:"",
    active:false,
    completed:false,
    failed:false,
    new_task:true
  });

  const handleChange = (e) => {
    const {name , value} = e.target;
    setFormData(prev=>({
      ...prev,
      [name]:value
    }))
  }

  const assignTaskToEmployee = (newTask, employeeId) => {
    if (!authData?.employees) return;
    
    const updatedEmployees = authData.employees.map(employee => {
      if (employee.id.toString() === employeeId) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask]
        };
      }
      return employee;
    });

    // Update context and localStorage
    if (authData.updateEmployeeData) {
      authData.updateEmployeeData(updatedEmployees);
    } else {
      // Fallback to direct localStorage update
      localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.assignedTo || !formData.date || !formData.category) {
      alert("Please fill in all required fields");
      return;
    }

    const newTask = {
      title: formData.title,
      description: formData.description,
      date: formData.date,
      category: formData.category,
      active: false,
      new_task: true,
      completed: false,
      failed: false
    };

    assignTaskToEmployee(newTask, formData.assignedTo);
    
    // Reset form
    setFormData({
      title:"",
      date:"",
      assignedTo:"",
      category:"",
      description:"",
      active:false,
      completed:false,
      failed:false,
      new_task:true
    });

    alert("Task created and assigned successfully!");
  }

  return (
    <div className="p-6 bg-[#2a2a2a] mt-7 rounded-lg shadow-lg border border-gray-600">
      <h2 className="text-xl font-semibold text-white mb-6">Create New Task</h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap w-full items-start justify-between gap-6">
        <div className="w-1/2 flex flex-col gap-4">
          <div>
            <h3 className="text-sm text-gray-300 mb-2 font-medium">Task Title *</h3>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="text-sm py-3 px-4 w-4/5 rounded-lg outline-none bg-[#1a1a1a] border-[1px] border-gray-500 focus:border-emerald-500 transition-colors mb-4 text-white"
              type="text"
              placeholder="Make a UI design"
              required
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-2 font-medium">Date *</h3>
            <input
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="text-sm py-3 px-4 w-4/5 rounded-lg outline-none bg-[#1a1a1a] border-[1px] border-gray-500 focus:border-emerald-500 transition-colors mb-4 text-white"
              type="date"
              required
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-2 font-medium">Assign to *</h3>
            <select
              name="assignedTo"
              value={formData.assignedTo}
              onChange={handleChange}
              className="text-sm py-3 px-4 w-4/5 rounded-lg outline-none bg-[#1a1a1a] border-[1px] border-gray-500 focus:border-emerald-500 transition-colors mb-4 text-white"
              required
            >
              <option value="">Select an employee</option>
              {authData?.employees?.map(employee => (
                <option key={employee.id} value={employee.id}>
                  {employee.name} ({employee.email})
                </option>
              ))}
            </select>
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-2 font-medium">Category *</h3>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="text-sm py-3 px-4 w-4/5 rounded-lg outline-none bg-[#1a1a1a] border-[1px] border-gray-500 focus:border-emerald-500 transition-colors mb-4 text-white"
              required
            >
              <option value="">Select a category</option>
              <option value="Development">Development</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Support">Support</option>
              <option value="Research">Research</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start justify-center">
          <h3 className="text-sm text-gray-300 mb-2 font-medium">Description</h3>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="text-sm py-3 px-4 w-full h-56 rounded-lg outline-none bg-[#1a1a1a] border-[1px] border-gray-500 focus:border-emerald-500 transition-colors mb-4 text-white resize-none"
            placeholder="Write task description here..."
          ></textarea>
          <button 
            type="submit"
            className="mt-4 py-3 px-6 w-full hover:bg-emerald-600 bg-emerald-500 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
