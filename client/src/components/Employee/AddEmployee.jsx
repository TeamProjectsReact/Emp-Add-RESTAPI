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
                            <div className="md:grid grid-cols-3 gap-4">
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Employee ID : </label>
                                    <input type="text" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Employee ID' />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Email : </label>
                                    <input type="email" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Employee Email' />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Initials : </label>
                                    <input type="text" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Employee Initials' />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Surname : </label>
                                    <input type="text" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Employee Surname' />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Phone : </label>
                                    <input type="text" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Employee Phone' />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">NIC : </label>
                                    <input type="text" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Employee NIC' />
                                </div>
                            </div>
                            <div className="my-4">
                                <label htmlFor="" className="text-gray-500">Address : </label>
                                <input type="email" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Employee Address' />
                            </div>
                            <div className="md:grid grid-cols-3 gap-4">
                                <div className="my-2">
                                    <label htmlFor="">Job Category</label>
                                    <select className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required
                                    >
                                        <option>Select Option</option>
                                        <option value="HOD">Head</option>
                                        <option value="HOD">Head</option>
                                        <option value="HOD">Head</option>
                                        <option value="TO">Transport Office</option>
                                        <option value="Librarian">Librarian</option>
                                        <option value="Labmanager">Labmanager</option>
                                        <option value="Accountant">Accountant</option> 
                                        <option value="PostDoc">PostDoc</option>
                                        <option value="Scientist">Scientist</option>
                                        <option value="NonAcademic Staff">NonAcademic Staff</option>
                                        <option value="RA">RA</option>   
                                        <option value="Driver">Driver</option>      
                                    </select>
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