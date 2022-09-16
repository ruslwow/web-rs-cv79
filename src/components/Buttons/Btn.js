import React from 'react'
import CV from '../../imgFiles/cv_pdf/Resume _Ruslan_Storonskyi_en.pdf'
import { Link } from 'react-router-dom';
import { t } from 'i18next'
import './Btn.css'

const Btn = () => {
  return (
    <div class="btn_home_wrapper">
    <a href={CV} download className='about_linkBtn'>{t('Download_CV')}</a>
          <button className='about_linkBtn' > 
            <Link id='contacts_btn' to="/contacts"> {t('Contact_Me')}</Link>
        </button>
    </div>
  )
}

export default Btn