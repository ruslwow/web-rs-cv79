import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from "react-icons/fa";

import { IoHomeOutline } from 'react-icons/io5';
import { ImUserTie } from 'react-icons/im';
import { TiThLargeOutline } from 'react-icons/ti';
import { AiFillContacts } from 'react-icons/ai';

import '../../components/i18next/i18next';
import { useTranslation } from 'react-i18next';
import './Side.css'

const Side = () => {


    const { t } = useTranslation();

    const[isOpen, setIsOpen] = useState(false);
    const toggle = () =>  setIsOpen (!isOpen);
       


    
    

    const menuItem=[
        {
            path:"/",
            name:(t("Home")),
            icon:<IoHomeOutline />
        },
        {
            path:"/about",
            name:(t("About")),
            icon:<ImUserTie/>
        },
        {
            path:"/skills",
            name:(t("Skills")),
            icon:<TiThLargeOutline/>
        },
        {
            path:"/contacts",
            name:(t('Contacts')),
            icon:<AiFillContacts/>
        }
       
    ]
  return (
    
    
    
            <div className='side_menu'  onMouseEnter={toggle} onMouseLeave={() => setIsOpen (!isOpen)} >
                <div  style={{width: isOpen ? "200px" : "50px"}} className="sidebar" >  
                     
                <div className="top_section" >
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">{t('Menu')}</h1>
                        <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                            <FaBars  />
                        </div>
               </div>
              
               
                        { 
                            menuItem.map((item, index)=>(
                                <NavLink to={item.path} key={index} className="link" activeclassname="active">
                                    <div className="icon">{item.icon}</div>
                                    <div style={{display: (isOpen ? "block" : "none" )}} className="link_text">{item.name}</div>
                                </NavLink>
                            
                            ))
                        }
                
                </div>
           </div>
   
    
  )
};

export default Side;