import axios from 'axios';
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

  // fetch all Emp data
  const [ViewEmpData, SetViewEmpData] = useState([])

  useEffect(() => {
    try{
      const res = axios.get('http://localhost:5000/Employee/DataEmp')
      .then(res = SetViewEmpData(res.data.Result))
      .catch(err = console.log(err))
    }
    catch(err){
      console.log(err)
    }
  }, [])

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
            <button className="md:my-0 my-2 md:w-auto w-full md:mx-2 mx-0 md:py-4 py-2 px-8 bg-green-500 text-white rounded duration-500 hover:bg-green-600 shadow-md">Add New Employee</button>
          </Link>
          <Link to={'/SignUp'}>
            <button className="md:my-0 my-2 md:w-auto w-full md:mx-2 mx-0 md:py-4 py-2 px-8 bg-green-500 text-white rounded duration-500 hover:bg-green-600 shadow-md">Add System User</button>
          </Link>

          <div className="my-12">
            <h1 className="text-gray-500 font-semibold text-xl">
              Employees
            </h1>

            <div class="overflow-x-auto my-8 bg-white">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    <p className="hidden md:table-cell">Emp No</p>
                                    <p className="md:hidden">Emp Data</p>                                   
                                </th>
                                <th scope="col" class="px-6 py-3 hidden md:table-cell">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3 hidden md:table-cell">
                                    Surname
                                </th>
                                <th scope="col" class="px-6 py-3 hidden md:table-cell">
                                    NIC
                                </th>
                                <th scope="col" class="px-6 py-3 hidden md:table-cell">
                                    Category
                                </th>
                                <th scope="col" class="px-6 py-3 hidden md:table-cell">
                                    Type 
                                </th>
                                <th scope="col" class="px-6 py-3 hidden md:table-cell">
                                    Gender
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>            
                        </thead>
                        <tbody>
                            {
                              ViewEmpData.map((Employee, index) => {
                                return (
                                  <tr key={index}>
                                    <td>
                                      {Employee.EmpID}
                                    </td>
                                  </tr>
                                )
                              })
                            }
                        </tbody>
                    </table>
                </div>   

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