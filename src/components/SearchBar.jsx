import React, { useContext, useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, ShowSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const [Visible, setVisible] = useState(false)

  useEffect(()=>{
    if(location.pathname.includes('collection') && ShowSearch){
      setVisible(true)
    }else{
      setVisible(false)
    }

  })

  return ShowSearch && Visible ? (
    <div className="mt-4 bg-white shadow-md rounded-2xl px-4 py-3 flex items-center gap-4 ">
      
      {/* Input Box */}
      <div className="flex items-center gap-3 flex-1 bg-gray-100 px-4 py-2 rounded-xl border border-gray-300">
        <img src={assets.search_icon} alt="search" className="w-4 opacity-70" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for products..."
          className="flex-1 bg-transparent outline-none text-sm"
        />
      </div>

      {/* Close icon */}
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        alt="close"
        className="w-4 cursor-pointer hover:scale-110 transition"
      />
    </div>
  ) : null
}

export default SearchBar
