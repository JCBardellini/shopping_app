import { useContext, useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import axios from 'axios'
import { primaryContext } from './context/PrimaryContext'

function App() {

  const {setProducts} = useContext(primaryContext)

  useEffect( () => {
    const apiURL = "https://fakestoreapi.com/products/"
    axios(apiURL).then((response) => {
      console.log(response);
      const data = response.data;
      setProducts(data)
    })
  },[])


  return (
    <>
      <div className="app">
        <Navbar />
        <Sidebar />
        <Dashboard />
        <Footer />
      </div>
    </>
  )
}

export default App
