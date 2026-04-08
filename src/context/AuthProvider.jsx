import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null);
  
  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setuserData({ employees, admin });
  }, []);

  const updateEmployeeData = (updatedEmployees) => {
    // Update localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    
    // Update context state
    setuserData(prev => ({
      ...prev,
      employees: updatedEmployees
    }));
  };

  const contextValue = {
    ...userData,
    updateEmployeeData
  };

  return (
    <div>
      <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
