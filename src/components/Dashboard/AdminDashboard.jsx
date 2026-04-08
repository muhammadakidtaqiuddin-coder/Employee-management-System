import React from "react";
import Header from "../../subComponents/Header";
import CreateTask from "../../subComponents/CreateTask";
import AllTask from "../../subComponents/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-8 text-white bg-[#1a1a1a] overflow-auto">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
