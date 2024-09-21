import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const Storecontext = createContext(null);
const Storecontextprovider = (props)=>{

    const [cartitems,setcartitems] = useState({});
    const url = "http://localhost:4000";
    const [token,setToken] = useState("");
    const [food_list,setFoodlist] = useState([]);

    const addToCart = async (itemId) =>{
        if(!cartitems[itemId]){
            setcartitems((prev)=>({...prev,[itemId]:1}))
        }else{
            setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}});
        }
    }

    const removeFromCart =  async (itemId) =>{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
        }
    }

    const getTotalCartAmount = ()=>{
        let total = 0;
        for(let item in cartitems){
            if(cartitems[item] > 0){
                let iteminfo = food_list.find((product)=>product._id === item)
                total += iteminfo.price*cartitems[item];
            }
        }
        return total;
    }

    const fetchFoodlist = async ()=>{
        const response = await axios.get(url + "/api/food/list");
        setFoodlist(response.data.data);
    }

    const loadcartData = async (token)=>{
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setcartitems(response.data.cartData);
    }
    useEffect(()=>{
        console.log(fetchFoodlist());
        async function loadData() {
            await fetchFoodlist();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadcartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])


    const contextvalue = {
        food_list,
        cartitems,
        addToCart,
        removeFromCart,
        setcartitems,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return(
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
    )
}
export default Storecontextprovider