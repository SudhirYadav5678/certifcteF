import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'
import { GrCertificate } from "react-icons/gr";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { PiSignIn } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import ModalBox from './ModalBox';


function Navbar() {
    const user = false;
    const [log, setLog] = useState(false);
    const [login, setLogin] = useState(false)
    const shoewModal = (type) => {
        setLogin(prev => !prev)
        if (type === 'login') {
            setLog(true)
        } else {
            setLog(false)
        }
    }
    const [theme, setTheme] = useState(false)
    const setThemes = () => {
        setTheme(prev => !prev)
    }

    const [get, setGet] = useState(false);
    const formInputSign = [
        { name: "name", type: "text", label: "Name" },
        { name: "email", type: "text", label: "Email" },
        { name: "password", type: "password", label: "Password" },
        { name: "avatar", type: "file", label: "Avatar" },
    ]
    const formInputLog = [
        { name: "name", type: "text", label: "User Name" },
        { name: "email", type: "text", label: "Email" },
        { name: "password", type: "password", label: "Password" },
    ]
    return (
        <>
            <div className='w-full h-16 rounded-xl border-2 flex justify-between fixed shadow-md'>
                <div className='my-auto ml-3'><GrCertificate className='text-3xl' />Sudhir</div>
                <div className='my-auto'>
                    <ul className='flex justify-evenly '>
                        <li className='px-3'><Link to='/'><button className='font-semibold hover:text-orange-300 hover:underline underline-offset-8'>Home</button></Link></li>
                        <li className='px-3'><Link to='#'><button onClick={() => setGet(true)} className='font-semibold hover:text-orange-300 hover:underline underline-offset-8'>Get</button></Link></li>
                    </ul>
                </div>
                <div className='my-auto'>
                    <ul className='flex justify-evenly'>
                        {user ? (<div className='flex justify-evenly'><li className='px-3'><Link to='#'><button className='font-semibold hover:text-orange-300 hover:underline underline-offset-8'>Profile</button></Link></li>
                            <li className='px-3'><Link to='#'><button className='font-semibold hover:text-orange-300 hover:underline underline-offset-8'>Admin</button></Link></li>
                        </div>) :
                            (<div className='flex justify-evenly'> <li className='px-3'><Link to='#'><button onClick={() => shoewModal("login")} className='font-semibold hover:text-orange-300 hover:underline underline-offset-8 mt-3'>Login</button></Link></li>
                                <li className='px-3'><Link to='#'><button onClick={() => shoewModal("sign")} className='font-semibold rounded-lg border bg-orange-400 hover:bg-orange-300 py-2 px-3 '>Signup</button></Link></li>
                            </div>)
                        }
                        <li>
                            {
                                theme ? (<div onClick={setThemes} className='text-3xl px-2 py-2 cursor-pointer'><MdOutlineLightMode /></div>) : (<div onClick={setThemes} className='text-3xl px-2 py-2 cursor-pointer'><MdOutlineDarkMode /></div>)
                            }
                        </li>
                    </ul>
                </div>
            </div>
            {
                login && <ModalBox onClose={() => setLogin(false)}>
                    {
                        log ? (<div className='w-[400px] mx-auto'>
                            <h1 className='text-4xl font-semibold flex justify-center m-5 p-2'><PiSignIn className='mt-1' />Login</h1>
                            <form>
                                {formInputLog.map((c, i) => <div key={i} class="relative z-0 w-full mb-6 group">
                                    <input type={c.type} name={c.name}
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" " required />
                                    <label for="name"
                                        class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        {c.label}
                                    </label>
                                </div>)}
                                <button className='border w-full p-2 rounded-md text-2xl'>Login</button>
                                <div className='mt-3'>Not have account? <span onClick={() => setLog(false)} className='text-blue-600 cursor-pointer'>Signup</span></div>
                            </form>
                        </div>) : (<div className='w-[400px] mx-auto'>
                            <h1 className='text-4xl font-semibold flex justify-center m-5 p-2'><CgProfile className='mt-1 mr-2' />Register Profile</h1>
                            <form>
                                {formInputSign.map((c, i) => <div key={i} class="relative z-0 w-full mb-6 group">
                                    <input type={c.type} name={c.name}
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" " required />
                                    <label for="name"
                                        class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        {c.label}
                                    </label>
                                </div>)}
                                <button className='border w-full p-2 rounded-md text-2xl'>Signup</button>
                                <div className='mt-3'>Already have an account?<span onClick={() => setLog(true)} className='text-blue-600 cursor-pointer'>Login</span></div>
                            </form>
                        </div>)
                    }
                </ModalBox>
            }
            {
                get && <ModalBox onClose={() => setGet(false)}>
                    <h1 className='flex justify-center mt-12 text-3xl font-semibold'>Get Certificate</h1>
                    <div className='mt-10 mx-auto text-center p-2'>
                        <Link to='/userCertificate'><button onClick={() => setGet(false)} className='font-semibold rounded-lg border bg-orange-400 hover:bg-orange-300 py-2 px-3 '>User</button></Link>
                        <p>One certificate at a one time</p>
                    </div>
                    <div className='mt-10 mx-auto text-center p-2'>
                        <button className='font-semibold rounded-lg border bg-orange-400 hover:bg-orange-300 py-2 px-3 '>Admin</button>
                        <p>Multiple certificate at a one time</p>
                    </div>
                </ModalBox>
            }
        </>

    )
}

export default Navbar