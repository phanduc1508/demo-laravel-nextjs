import React, { useEffect, useState } from "react";
import Button from "../../components/button";

const HookLifeCycle = () => {
    const [counter, setCouter] = useState(0);
    const [visible, setVisible] = useState(true);

    // useEffect (() => {
    //     //giống với DidMount và DidUpdate
    //     console.log('useEffect run')

    //     return () => {
    //         // ComponentWillUnmount <=> Component se bi remove khoi cau truc DOM
    //     }
    // });

    useEffect(() => {

        //chay bat ke state co thay doi hay khong neu khong truyen array vao
        console.log('userEffect run - khong truyen array vao')
    })

    useEffect(() => {

        //chay 1 lan duy nhat sau khi render lan dau tien neu truyen [] rong (không có phần tử nào thay đổi)
        console.log('userEffect run - truyen []')
    }, [])
    
    useEffect(() => {

        //chạy sau khi render vào có tham số truyền vào [counter]
        // chỉ chạy khi counter thay đổi
        console.log('lắng nghe sự thay đổi của counter')
    }, [counter])

    useEffect(() => {

        //chạy sau khi render vào có tham số truyền vào [visible]
        // chỉ chạy khi visible thay đổi
        console.log('lắng nghe sự thay đổi của visible')
    }, [visible])

    useEffect(() => {

        //chạy khi có sự thay đổi của counter và visible
        console.log('lắng nghe sự thay đổi của visible, counter')
    },  [counter, visible])


    console.log('truoc khi return <=> Render')
    return (
        <div className='container'>
            <h1>Play Ground - Life Cycle - React Hooks</h1>
            <button onClick={() => {
                setCouter(counter + 1)
            }}>Counter Add</button>
            <p>{counter}</p> 
            <button onClick={() => {
                setVisible(false)
            }}>hide button</button>
            {
                visible &&  <Button />
            }
        </div>
    )
}

export default HookLifeCycle