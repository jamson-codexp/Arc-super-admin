import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import AdminPage from './pages/AdminPage'
import LoginPage from './pages/LoginPage'

export default function App() {
  return (
    <div className="">
    <Routes>
      <Route path="/" element={<Outlet />} >
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Route>
    </Routes>
  </div>
  )
}
