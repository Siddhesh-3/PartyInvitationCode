import React,{useContext} from 'react'
import GuestContext from "../../context/guestcontext/guestContext"

export const Guestfilter = () => {

  const {toggleFilter} = useContext(GuestContext)
  
    return (
        <div className="toggle">
      <label className="switch">
        <input type="checkbox" onChange={()=> toggleFilter()} />
        <span className="slider round"></span>
      </label>
      <p className="lead">Show attending only!</p>
    </div>
    )
}

export default Guestfilter