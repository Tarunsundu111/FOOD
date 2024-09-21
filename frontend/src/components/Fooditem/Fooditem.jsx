import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../context/Storecontext';

const Fooditem = ({id,name,price,description,image}) => {
    const {cartitems,addToCart,removeFromCart,url} = useContext(Storecontext)
    
  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img src={url+"/images/"+image} alt="" className="food-item-image" />
            {!cartitems[id]
            ?<img onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" className="add" />
            :<div className='food-item-container'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartitems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-description">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default Fooditem