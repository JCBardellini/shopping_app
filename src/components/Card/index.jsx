import React, { useContext } from 'react'
import './index.css'
import { primaryContext } from '../../context/PrimaryContext'

const Card = ({productData}) => {

  const { cart, setCart } = useContext(primaryContext)

  const handleClick = () => {
  // setCart to everything that was in cart already, PLUS one item
  // check if this is already in the cart
  let indexInCart = cart.findIndex( (itemInCart) => {
  // return boolean
    if (itemInCart.productId === productData.id ) {
      return true;
    } else {
      return false;
    };
  });
}

  // indexInCart is the index or -1

  const newCart = [...cart]; 
  // not in cart
  if (indexInCart === -1) {
      newCart.push({ productID: productData.id, number: 1 });
  } else {
      newCart[indexInCart].number++;
  }
  
  setCart(newCart);

  return (
    <div className="card">
      <button onClick={handleClick}> Add to Cart</button>
        <h3>{productData.title}</h3>
        <img src={productData.image} alt={productData.title} />
        <div>{productData.description}</div>
    </div>
  )
}

export default Card