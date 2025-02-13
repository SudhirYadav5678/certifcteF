import React, { useRef } from 'react'
import { RiCloseLargeLine } from "react-icons/ri";
function ModalBox({
    onClose,
    children
}) {
    const modal = useRef(null)
    const closeModal = (e) => {
        if (modal.current === e.target) {
            onClose();
        }
    }
    return (
        <>
            <div ref={modal} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center '>
                <div className='mt-10 flex flex-col gap-5'>
                    <RiCloseLargeLine onClick={onClose} className='text-2xl text-black place-self-end cursor-pointer' />
                    <div className='border-2 bg-gradient-to-br from-pink-100 via-orange-200 to-transparent w-[600px] h-[500px] rounded-3xl'>{children}</div>
                </div>
            </div>
        </>
    )
}

export default ModalBox