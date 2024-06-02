import React, {useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

const Dashboard = () => {
  const navigate = useNavigate()
  const EmailUser = secureLocalStorage.getItem("Login1");
  const RoleUser = secureLocalStorage.getItem("Login2");

  // headleLogOut
  const headleLogOut = () => {
    localStorage.clear()
    navigate('/')
    window.location.reload()
  }

  if(RoleUser !== null && EmailUser !== null && RoleUser === "SuperAdmin"){
    return (
      <div className='bg-gray-200 py-8 px-12 min-h-screen'>
        <div className="bg-white rounded shadow-md py-8 px-12">
          <div className="flex justify-between">
            <h1 className="text-gray-500 font-semibold text-xl">
              Dashboard
            </h1>
            <p className="text-red-500 font-semibold text-xl cursor-pointer" onClick={headleLogOut}>LogOut</p>
          </div>
          <hr className='my-4'/>
          <Link to={'/AddEmployee'}>
            <button className="py-4 px-8 bg-green-500 text-white rounded duration-500 hover:bg-green-600 shadow-md">Add New Employee</button>
          </Link>
          <Link to={'/SignUp'}>
            <button className="py-4 px-8 bg-green-500 text-white rounded duration-500 hover:bg-green-600 shadow-md mx-4">Add System User</button>
          </Link>

          <div className="my-12">
            <h1 className="text-gray-500 font-semibold text-xl">
              Employees
            </h1>


            
          </div>
        </div>
      </div>
    )
  }
  else{
    useEffect(() => {
      localStorage.clear()
      navigate('/')
    }, [])
  }
}

export default Dashboard