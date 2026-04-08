import React, { useEffect, useState, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import {AuthContext} from './context/AuthProvider';
const App = () => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const authData = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
   useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      setLoggedIn(true) // This was missing!
    }

  },[])
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "admin") {
      setUser("admin");
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      setLoggedIn(true);
    } else if (authData && authData.employees) {
      const employee = authData.employees.find(e => e.email === email && e.password === password);
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee); // Set the actual employee data
        localStorage.setItem('loggedInUser', JSON.stringify({ 
          role: 'employee', 
          data: employee // Store the complete employee data
        }));
        setLoggedIn(true);
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      {!loggedIn ? (
        <Login handleLogin={handleLogin} />
      ) : (
        user === "admin" ? <AdminDashboard /> : <EmployeeDashboard data ={loggedInUserData} />
      )}
    </>
  );
};

export default App;
