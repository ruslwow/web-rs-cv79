import React from 'react'
import my_foto from '../../imgFiles/images/my_img.jpg'
import './Home.css'

import { t } from 'i18next'
import Btn from '../../components/Buttons/Btn';




const Home = () => {
  return (
    <div className='home'>

      <div className='home_content'>
              <div className='home_paragraf'>
                      <h3>{t('Hello')}</h3>
                      <h1>{t('Name')}</h1>
                      <h5>{t('developer')}</h5>
              </div>
      </div>    
          <img className='home_foto' src={my_foto} alt="my_foto" />

          <Btn />
      
    </div>

    
  )
}

export default Home;
