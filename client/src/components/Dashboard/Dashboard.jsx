import React, {useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

const Dashboard = () => {
  const navigate = useNavigate()
  const EmailUser = secureLocalStorage.getItem("Login1");
  const RoleUser = secureLocalStorage.getItem("Login2");

  if(RoleUser !== null && EmailUser !== null && RoleUser === "SuperAdmin"){
    return (
      <div>Dashboard</div>
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