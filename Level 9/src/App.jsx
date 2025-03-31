import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import './App.css'
import Contact from './Pages/Contact'
import Help from './Component/Help'
import RootLayout from './Layout/RootLayout'
import InfoLayout from './Layout/InfoLayout'
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/info' element={<InfoLayout />}>
      <Route path='help' element={<Help />}/>
      </Route>
    </Route>
  ))
  return <RouterProvider router={router}></RouterProvider>
}

export default App