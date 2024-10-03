import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import Get from './pages/certificate/Get.jsx'
import Usercertificate from './pages/certificate/Usercertificate.jsx'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/get' element={<Get />} />
        <Route path='/userCertificate' element={<Usercertificate />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>

    </>
  )
}

export default App
