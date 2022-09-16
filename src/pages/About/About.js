import React from 'react'
import './About.css';
import { t } from 'i18next';
import Btn from '../../components/Buttons/Btn'

const About = () => {
  return (
    <div className='about'>
       <div className='text_content'>
            <h1>{t('About')}</h1>
            <p className='about_text'>  
                    {t('Main_text.1')}<br />
                    {t('Main_text.2')}<br />
                    {t('Main_text.3')}<br />
                    {t('Main_text.4')}<br />
                    {t('Main_text.5')}<br />
                    {t('Main_text.6')}<br />
                    {t('Main_text.7')}<br />
              </p>

                  <Btn />
        </div>

    </div>
  )
}

export default About;
