import React, {useEffect, useNavigate} from 'react'
import secureLocalStorage from 'react-secure-storage';

const AddEmployee = () => {
    const navigate = useNavigate();
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div>AddEmployee</div>
        )
    }else{
        useEffect(() => {
            localStorage.clear()
            navigate('/')
        }, [])
    }
}

export default AddEmployee