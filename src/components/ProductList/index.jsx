import React, { useContext } from 'react'
import './index.css'
import { primaryContext } from '../../context/PrimaryContext'
import Card from '../Card'

const ProductList = () => {

    const { products } = useContext(primaryContext)

  return (
    <div className="productsList">
        { products.map( (eachProduct) => {
            return <Card key={eachProduct.id} productData={eachProduct} />
        })}

    </div>
  )
}

export default ProductList  