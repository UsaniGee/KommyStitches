import { useQuery } from '@tanstack/react-query';
import React, { createContext, useState } from 'react'


export const ProductContext = createContext()

const ProductProvider = ({children}) => {
  const {isPending, error, data} = useQuery({
    queryKey: ['data'],
    queryFn: async() => {
      const res = await fetch ('https://fakestoreapi.com/products');
      return res.json()      
    }       
  });
  console.log(data);

  const [search, setSearch ] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  return (
    <ProductContext.Provider value={{isPending, error, data, search, setSearch, showSearch, setShowSearch}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
