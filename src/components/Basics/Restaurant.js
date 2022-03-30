import React,{useState} from 'react'
import './style.css'
import Menu from "./menuApi"
import MenuCard from './MenuCard'
import Navbar from '../Navbar'

const uniqueList =[ //as we want the values to be an array.
    ...new Set(               //Set is used as we dont want the category to repeat. ... is spread operator 
        Menu.map((curElem)=>{ 
            return curElem.category
        })
    ),"All"
]
console.log(uniqueList) //it will show all our categories.

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu)
     const [menuList, setMenuList] = useState(uniqueList)
const filterItem = (category) =>{
  if (category==="All"){
      setMenuData(Menu)
      return;
  }  
    
    const updatedList = Menu.filter((curElem) =>{
        return curElem.category ===category;
    })
    setMenuData(updatedList)
}  

    return (
        <>
<Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData}/>
        </>
    )
}

export default Restaurant