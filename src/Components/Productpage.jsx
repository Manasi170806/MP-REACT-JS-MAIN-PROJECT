import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import { toast } from 'react-toastify'




const Productpage = () => {
  const [products, setProducts] = useState([])

  async function fetchProducts() {
    try {
      const response = await axios.get('http://localhost:3000/products')
      setProducts(response.data)
      toast.success('Products fetched successfully!')
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (  
    <div>
      <h1 style={{ textAlign: 'center',marginTop:"20px" }}>Product Page</h1>
      {products.map((el) => (
        <ProductCard key={el.id} {...el} />
      ))}
    </div>
  )
}

export default Productpage
