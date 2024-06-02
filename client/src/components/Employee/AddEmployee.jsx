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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veritatis qui hic dolorum quo repudiandae, assumenda soluta reprehenderit cum commodi magnam, quaerat alias voluptatibus aliquid sint suscipit nostrum, iure officia.
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