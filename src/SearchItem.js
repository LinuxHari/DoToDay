import React from 'react'
import './SearchItem.css'

const SearchItem = ({search,setSearch}) => {
  return (
    <div>
        <input className='search' type="text" value = {search} onChange={(e) => setSearch(e.target.value)} placeholder='search'/>
    </div>
  )
}

export default SearchItem