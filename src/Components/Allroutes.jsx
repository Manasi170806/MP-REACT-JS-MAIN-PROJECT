import { Route, Routes } from "react-router-dom"
import Login from "../Components/Loginpage"
import Edit from "../Components/Editpage"
import Home from "../Components/Homepage"
import Product from "../Components/Productpage"
import Addproduct from "../Components/Addproductpage"
import Description from "./Description"

const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Product" element={<Product />}></Route>
            <Route path="/AddProduct" element={<Addproduct />}></Route>
            <Route path="/Edit" element={<Edit />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Description/:id" element={<Description />}></Route>
            <Route path="*" element={<h1>404 not found</h1>}></Route>
        </Routes>
    )
}

export default Allroutes