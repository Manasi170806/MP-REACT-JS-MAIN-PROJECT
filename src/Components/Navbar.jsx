import { NavLink } from "react-router-dom"

const linkdata = [{
    id: 1,
    path: "/",
    text: "Home"
},
{
    id: 2,
    path: "/Product",
    text: "Product"
}, {
    id: 3,
    path: "/AddProduct",
    text: "AddProduct"
},
{
    id: 4,
    path: "/Edit",
    text: "Edit"
},
{
    id: 5,
    path: "/Login",
    text: "Login"
},
]

const Navbar = () => {
    return (
        <div className="Navbar">
            {linkdata.map((el) => (
                <div key={el.id}>
                    <NavLink style={({ isActive }) => (isActive ? {backgroundColor:"black", color: "white", padding:"10px" } : { color: "black" })} to={el.path}>{el.text}</NavLink>
                </div>
            ))}
            {/* <NavLink to={"/Home"}>Home</NavLink>
            <NavLink to={"/Product"}>Product</NavLink>
            <NavLink to={"/Addproduct"}>Addproduct</NavLink>
            <NavLink to={"/Edit"}>Edit</NavLink>
            <NavLink to={"/Login"}>Login</NavLink> */}
        </div>
    )
}

export default Navbar