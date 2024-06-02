import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

const AddEmployee = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    // emp data
    const [EmpData, SetEmpData] = useState({
        empID: '',
        empEmail: '',
        Initials: '',
        Surname: '',
        Phone: '',
        NIC: '',
        Address: '',
        Category: '',
        dob: '',
        emgContact: '',
        Type: '',
        CivilState: '',
        Gender: '',
        Religion: '',
    })

    // headleSubmit

    const headleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const res = await axios.post('http://localhost:5000/Employee/AddEmp', EmpData)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Employee Added Successful")
                    navigate('/Dashboard')
                    window.location.reload()
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch (err) {
            console.log(err)
        }

    }

    if(RoleUser !== null && EmailUser !== null && RoleUser === "SuperAdmin"){
        return (
            <div className='bg-gray-200 min-h-screen py-12 px-8'>
                <div className="bg-white py-8 px-10 rounded shadow-md">
                    <h1 className="text-gray-500 font-semibold text-xl">Add New Employee</h1>
                    <hr className="my-4" />
                    <Link to={'/Dashboard'}>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded duration-500 hover:bg-blue-600 shadow-md">Back</button>
                    </Link>

                    <form onSubmit={headleSubmit}>
                        <div className="">
                            <div className="md:grid grid-cols-3 gap-4">
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Employee ID : </label>
                                    <input type="text" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Employee ID' 
                                    onChange={e => SetEmpData({...EmpData, empID:e.target.value})}/>
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Email : </label>
                                    <input type="email" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Employee Email' 
                                    onChange={e => SetEmpData({...EmpData, empEmail:e.target.value})}/>
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Initials : </label>
                                    <input type="text" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Employee Initials' 
                                    onChange={e => SetEmpData({...EmpData, Initials:e.target.value})}/>
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Surname : </label>
                                    <input type="text" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Employee Surname' 
                                    onChange={e => SetEmpData({...EmpData, Surname:e.target.value})}/>
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Phone : </label>
                                    <input type="text" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Employee Phone' 
                                    onChange={e => SetEmpData({...EmpData, Phone:e.target.value})}/>
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">NIC : </label>
                                    <input type="text" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Employee NIC' 
                                    onChange={e => SetEmpData({...EmpData, NIC:e.target.value})}/>
                                </div>
                            </div>
                            <div className="my-4">
                                <label htmlFor="" className="text-gray-500">Address : </label>
                                <input type="text" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Employee Address' 
                                onChange={e => SetEmpData({...EmpData, Address:e.target.value})}/>
                            </div>
                            <div className="md:grid grid-cols-3 gap-4">
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Job Category</label>
                                    <select className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required
                                    onChange={e => SetEmpData({...EmpData, Category:e.target.value})}>
                                        <option >Select Option</option>
                                        <option value="HOD">Head</option>
                                        <option value="TO">TO</option>
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
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Date of Birth : </label>
                                    <input type="date" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Date of Birth' 
                                    onChange={e => SetEmpData({...EmpData, dob:e.target.value})}/>
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Emergency Contact : </label>
                                    <input type="text" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Emergency Contact' 
                                    onChange={e => SetEmpData({...EmpData, emgContact:e.target.value})}/>
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Type : </label>
                                    <select className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required
                                    onChange={e => SetEmpData({...EmpData, Type:e.target.value})}>
                                        <option>Select Option</option>
                                        <option value="Permanent">Permanent</option>
                                        <option value="Contract">Contract</option>
                                        <option value="Assignment">Assignment</option>
                                        <option value="Visiting">Visiting</option>
                                        <option value="Temporary">Temporary</option>     
                                    </select>
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Civil Status</label>
                                    <select className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required
                                    onChange={e => SetEmpData({...EmpData, CivilState:e.target.value})}>
                                        <option>Select Option</option>
                                        <option value="Married">Married</option>
                                        <option value="Single">Single</option>   
                                    </select>
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Gender</label>
                                    <select className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required
                                    onChange={e => SetEmpData({...EmpData, Gender:e.target.value})}>
                                        <option>Select Option</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-gray-500">Religion : </label>
                                    <input type="text" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2 my-2 shadow-md" required placeholder='Enter Employee Religion' 
                                    onChange={e => SetEmpData({...EmpData, Religion:e.target.value})}/>
                                </div>
                            </div>
                            <div className="">
                                <button type="submit" className="bg-green-500 text-white py-4 px-8 rounded duration-500 hover:bg-green-600 shadow-md">Add Employeee</button>
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