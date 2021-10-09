import React, { useState } from 'react';
import ModalDemo from '../frontend/components/ModalDemo';

export default function Demo() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="container">
            <ModalDemo

                //event click ok
                onOk = {() => {
                    console.log('call api server')
                }}

                //event click cancel
                onCancel = {() => {
                    setOpenModal(false)
                }}
                //set open/close modal
                isVisible={openModal}
                
                //set show/hindden header (title, button x)
                isRenderHeader = {true}
                
                //set title
                title="Form login"

                //set hindden/show button x
                isRenderCloseIcon={true}

                // //custom footer
                // renderFooter = {() => {
                //     return (
                //         <button onClick={() => {
                //             console.log('call api server')
                //         }}>ok</button>
                //     )
                // }}
            >
                <h2>Demo Modal</h2>
                <form>
                    <input type="text" />
                </form>
            </ModalDemo>

            <button onClick={() => {
                setOpenModal(true);
            }}>open Modal</button>
        </div>
    )
}