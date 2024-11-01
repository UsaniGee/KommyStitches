import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { CiSearch } from 'react-icons/ci'
import { CgClose } from 'react-icons/cg'
import { Link, useLocation } from 'react-router-dom'

const Searchbar = () => {
    const {data, search, setSearch, showSearch, setShowSearch} = useContext(ProductContext)
    const [visible, setVisible] = useState(false)
    const location = useLocation()
    const [filteredData, setfilteredData] = useState([])
    // const [input, setInput] = useState(false)

    const handleSearch = (e) => {
        setSearch(e.target.value)
        // setInput(true)
        // input===""? setInput(false):""
    }

    useEffect(() => {
        const filteredProducts = data?.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );
        setfilteredData(filteredProducts);
      }, [data, search]);

    useEffect(() => {
        if (location.pathname.includes('shop')){
            setVisible(true)
        } else {
            setVisible(false)
        }
        
    },[location])

   



  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center '>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 '>
            <div className='w-4'><CiSearch /></div>
            <input value={search} onChange={handleSearch} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search Shop' />
            <div onClick={()=> setShowSearch(false)} className='cursor-pointer'><CgClose /></div>            
        </div>
        {search && (
        <div className="absolute w-full bg-white border shadow-md ">
          {filteredData.length > 0 ? (
            <ul className="list-non p-4">
              {filteredData.map((item) => (
                <Link to={`/product/${item.id}`}>
                     <li key={item.id} className="hover:underline ">{item.title}</li>
                </Link>
              ))}
            </ul>
          ) : (
            <p className="p-4 text-center">No results found.</p>
          )}
        </div>
      )}
    </div>
  ) : null
}

export default Searchbar
