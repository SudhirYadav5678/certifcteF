import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setImages } from '../../store/imagesSlice.js'
function Usercertificate() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [input, setInput] = useState({
        certificate: "",
        institute: "",
        achiver: "",
        issued: "",
        date: '',
        templates: ""
    })
    const inputHandle = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const submit = (e) => {
        dispatch(setImages(input))
        navigate('/get')
    }
    return (
        <>
            <div className='pt-20'>
                <form onSubmit={submit} >
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="certificate" id="name" onChange={inputHandle}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label htmlFor='certificate'
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Certificate of
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="institute" id="name" onChange={inputHandle}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label htmlFor='institute'
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Name of Institute
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="achiver" id="name" onChange={inputHandle}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label htmlFor='achiver'
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Name of achiver
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="issued" id="name" onChange={inputHandle}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label htmlFor='issued'
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Issued by
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="date" name="date" id="name" onChange={inputHandle}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label htmlFor='date'
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Date
                        </label>
                    </div>
                    <select name="templates" id="templates" onChange={inputHandle}>
                        <option value="">Select Your Template</option>
                        <option value="src/assets/1.png">Template 1</option>
                        <option value="src/assets/2.png">Template 2</option>
                        <option value="src/assets/3.png">Template 3</option>
                    </select>
                    <button type='submit'>Submit</button>
                </form>



            </div>

        </>
    )
}

export default Usercertificate