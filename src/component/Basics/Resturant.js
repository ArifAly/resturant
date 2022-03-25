import React, { useState } from 'react';
import "./Style.css";
import menu from './menuApi';
import MenuCart from './MenuCart';
import Navbar from './Navbar';

const uniqueList =[ 
    ...new Set(
    menu.map((curElem) => {
    return curElem.category;
})
), "All",
];
console.log(uniqueList);
const Resturant = () => {
    const [menuData, setMenuData] = useState(menu);
    const [menuList, setmenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if(category==="All"){
            setMenuData (menu);
            return;
        }
        const updatedList = menu.filter((curElem)=> {
            return curElem.category===category;

        });
        setMenuData(updatedList);
    };

  return (
     <>
     <Navbar filterItem ={filterItem} menuList={menuList}/>
     <MenuCart menuData={menuData}/>
     </>
  )
}

export default Resturant
