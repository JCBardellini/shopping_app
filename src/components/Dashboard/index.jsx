import React from 'react'
import './index.css'
import Menu from '../Menu'
import ProductList from '../ProductList'

const Dashboard = () => {
  return (
    <div id="dashboard">
        <h1>Dashboard - select some products</h1>
        <Menu />
        <ProductList />
    </div>
  )
}

export default Dashboard