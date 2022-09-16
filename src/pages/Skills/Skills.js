import React from 'react'
import './Skills.css'
import { t } from 'i18next'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Experience from '../../components/Experience/Experience'



const Skills = () => {
  

  return (
      
          <div className="container_skills" >
           
                <h1 className='exp_tittle'>{t('My_Hard_Skills')}</h1>
                
            
                <div className='skills_card'>
                  
                    <Experience  />
                  
                </div>
          
           
           </div>
   
         
    
  )
}

export default Skills;






