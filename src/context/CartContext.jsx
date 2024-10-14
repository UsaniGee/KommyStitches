import React, {  createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([])

  // Item amounrt state
  const [amount, setAmount] = useState(0)

  // Total price
  const [total, setTotal] = useState(0)

  //  Update Total Amount
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total)
  })
  
  // Update item amount
  useEffect (( ) => {
    if (cart) {
       const amount = cart.reduce((accumulator, currentItem) =>
      {
        return accumulator + currentItem.amount
      }, 0)
      setAmount(amount)
    }
  }, [cart])

  // Add to cart
  const addToCart = (item, id) => {
    const newItem = { ...item, amount: 1}
    
    //Check if the item is already in cart
    const cartItem = cart.find((item) =>{
      return item.id === id
    }) 

    // If item is already in the cart
   if (cartItem) {
    const newCart = [...cart].map((item) => {
     if (item.id == id) {
      return {...item, amount: cartItem.amount + 1}
     } else {
      return item
     }
    })
    setCart(newCart)
   } else {
    setCart([...cart, newItem])
   }    
  }  
  
  // Remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id
    })
    setCart(newCart)
  }

  // Clear Cart
  const clearCart = () => {
    setCart([])
  }

  // increase Amount
  const increaseAmount = (id) => {
    const item = cart.find(item => item.id === id)
    addToCart (item, id)
  }

  // decrease Amount
  const decreaseAmount = (id) => {
    
    const cartItem = cart.findIndex((item) => item.id === id);
  
    
    if (cartItem !== -1 && cart[cartItem].amount >= 2) {
     
      setCart((prevCart) =>
        prevCart.map((item, index) =>
          index === cartItem? { ...item, amount: Math.max(item.amount - 1) } : item
        )
      );
    } 
  };

  return (
   <CartContext.Provider value={{addToCart, cart, setCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, amount, setAmount, total}}>
    {children}
   </CartContext.Provider>
  )
}

export default CartContextProvider
