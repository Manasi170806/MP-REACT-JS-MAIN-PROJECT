import React from 'react'
import Homepage from './Homepage'
import Productpage from './Productpage'
import Addproductpage from './Addproductpage'
import Editpage from './Editpage'
import Loginpage from './Loginpage'
import { Routes, Route } from 'react-router-dom'

const Allroutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/Addproducts" element={<Addproductpage />} />
        <Route path="/Editproducts" element={<Editpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="*" element={
            <h1 style={{ color: "red", textAlign: "center" ,marginTop:"50px",fontSize:"50px",fontFamily:"monospace"}}>⚠️ 404 Not Found</h1>
        } />
      </Routes>
  )
}

export default Allroutes
