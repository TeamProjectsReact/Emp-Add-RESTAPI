import React, {useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

const AddEmployee = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    if(RoleUser !== null && EmailUser !== null && RoleUser === "SuperAdmin"){
        return (
            <div className='bg-gray-200 min-h-screen py-12 px-8'>
                <div className="bg-white py-8 px-10 rounded shadow-md">
                    <h1 className="text-gray-500 font-semibold text-xl">Add New Employee</h1>
                    <hr className="my-4" />
                    <Link to={'/Dashboard'}>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded duration-500 hover:bg-blue-600 shadow-md">Back</button>
                    </Link>

                    <form >
                        <div className="">
                            <div className="md:grid grid-cols-4 gap-4">
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Employee ID : </label>
                                    <input type="text" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Employee ID' />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Initials : </label>
                                    <input type="text" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Employee Initials' />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }else{
        useEffect(() => {
            localStorage.clear()
            navigate('/')
        }, [])
    }
}

export default AddEmployee