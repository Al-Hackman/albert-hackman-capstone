import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './subMenu.scss'


const SubMenu = ( {item} ) => {

    const [subnav, setSubnav] = useState(false)



    const showSubnav = () => setSubnav(!subnav)



    return(

        <>
        <Link to={item.path} className="side-bar" onClick={item.subNav && showSubnav} >
            
            <div>
                {item.icon}
                <span>{item.title}</span>
            </div>
            <div>
                {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
            </div>

         </Link>  

         {subnav && item.subNav.map((item, index) => {
             return (
                 <Link to={item.path} key={index} className="side-bar__submenu" >
                     <span className="side-bar__subtitle">{item.title}</span>
                 </Link>
             )


         })}

        </>
    );

};

export default SubMenu;


