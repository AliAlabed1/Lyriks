import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FiSearch} from 'react-icons/fi'
const Searchbar = () => {
  const navigate=useNavigate()
  const [searchTerm, setsearchTerm] = useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    navigate(`/search/${searchTerm}`)
    setsearchTerm("")
  }
  return(
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
      <label htmlFor="search-feild" className="sr-only">Search all Songs</label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className='w-5 h-5 ml-4'/>
        <input 
        type="text" 
        name='search-feild' 
        id='search-feild' 
        autoComplete="off" 
        placeholder="Search" 
        value={searchTerm}
        onChange={(e )=>setsearchTerm(e.target.value)} 
        className="flex-1 bg-transparent placeholder-gray-600 outline-none text-base text-white p-4"
        />
      </div>
    </form> 
)};

export default Searchbar;
