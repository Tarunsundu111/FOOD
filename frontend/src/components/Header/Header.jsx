import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <div className="header-contents">
        <h1>Order Your Favourite Food Here</h1>
        <p>Order your favourite food from our wide variety of cuisines</p>
        <button onClick={()=>navigate("/#Explore-menu")}>view menu</button>
      </div>
    </div>
  )
}

export default Header