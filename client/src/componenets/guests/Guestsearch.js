import React,{useContext,useRef} from 'react'
import GuestContext from '../../context/guestcontext/guestContext'
const GuestSearch = () => {
  const {  searchGuest,clearSearch} =  useContext(GuestContext)
  const searchValue =  useRef('')
  const handleChange= e=>{
    if(searchValue.current.value !== ''){
      searchGuest(e.target.value)
    } else{
      clearSearch()
    }
  }
  return (
    <div>
      <input ref={searchValue} type="text" onChange={handleChange} className="search" placeholder=" Search Guest by name ..." />
      <i className="fas fa-search search-icon" />
    </div>
  )
}

export default GuestSearch