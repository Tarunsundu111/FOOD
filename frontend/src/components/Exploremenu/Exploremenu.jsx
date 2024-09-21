import React from 'react'
import './Exploremenu.css'
import {menu_list} from '../../assets/assets'

const Exploremenu = ({category,setcategory}) => {
  return (
    <div className="Explore-menu" id="Explore-menu">
        <h1>Explore Our Menu</h1>
        <p className="explore-menu-text">Order your favourite food from our wide variety of cuisines</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setcategory(prev => prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default Exploremenu