import React, { useMemo, useState } from "react";

const demoUseMemo = () => {
    // truyền vào mảng rỗng [] -> giống như constructor
    useMemo(() => {
        console.log('UseMemo run <=> constructor')
    }, []);

    //vừa chạy phía client vừa chạy phía server
    console.log("constructor")

    const [user, setUser] = useState(
        {
            firstName: 'duc',
            lastName: 'phan'
        }
    )

    //useMemo
    // không được lạm dụng
    const fullName = useMemo(() => {
        return user.firstName + ' ' + user.lastName
    }, [user]);


    return (
        <div className='container'>
            <h1>Play Ground - Life Cycle - React Hooks </h1>
            <h2>Hello: {fullName}</h2>
        </div>
    )
}

export default demoUseMemo