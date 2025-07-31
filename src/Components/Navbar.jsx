import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
  
  const linkData = [{ id: 1, path: "/", text: "Home" },
  { id: 2, path: "/products", text: "Products" },
  { id: 3, path: "/Addproducts", text: "Add Products" },
  { id: 4, path: "/Editproducts", text: "Edit Products" },
  { id: 5, path: "/login", text: "Login" }

  ]
  return (
    <div className="navbar">
      {linkData.map((el) => (
        <NavLink style={({ isActive }) => (
          isActive ? {backgroundColor: "#0d6efd",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "8px",
          fontFamily: "Segoe UI, sans-serif",
          fontWeight: "500"} : {color: "#333",
          padding: "10px 20px",
          fontFamily: "Segoe UI, sans-serif"}
        )} key={el.id} to={el.path}>{el.text}</NavLink>
      ))}
    </div>
  )
}

export default Navbar
