import { useQuery } from '@tanstack/react-query';
import React, { createContext } from 'react'


export const ProductContext = createContext()

const ProductProvider = ({children}) => {
  const {isPending, error, data} = useQuery({
    queryKey: ['data'],
    queryFn: async() => {
      const res = await fetch ('https://fakestoreapi.com/products');
      return res.json()      
    }    
  });
  return (
    <ProductContext.Provider value={{isPending, error, data}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
