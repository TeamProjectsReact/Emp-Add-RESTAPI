import React, {useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

const Dashboard = () => {
  const navigate = useNavigate()
  const EmailUser = secureLocalStorage.getItem("Login1");
  const RoleUser = secureLocalStorage.getItem("Login2");

  if(RoleUser !== null && EmailUser !== null && RoleUser === "SuperAdmin"){
    return (
      <div className='bg-gray-200 py-8 px-12 min-h-screen'>
        <div className="bg-white rounded shadow-md py-8 px-12">
          <div className="flex justify-between">
            <h1 className="text-gray-500 font-semibold text-xl">
              Dashboard
            </h1>
            <p className="text-red-500 font-semibold text-xl">LogOut</p>
          </div>
          <hr className='my-4'/>
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