import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const handleLogin = async(e) => {
    e.preventDefault();
    let userData = { email, password };
    try {
      const res =await axios.post("https://reqres.in/api/login", userData,{
      headers:{
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1"
      }
      });
      console.log(res.data.token);
      toast.success("Login successful");
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.error || "Login failed");
    }
  }
  return (
    <div>
      <form action="" onSubmit={handleLogin}>
        <div className="container-login">
          <input className='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />{" "}
          <br />
          <input className='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />{" "}
          <br />
          <Button type="submit" className='btn btn-primary'>Login</Button>
        </div>
      </form>

    </div>
  )
}

export default Login