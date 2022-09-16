import React from 'react'
import './Contacts.css'

import { useState } from 'react'
import { send } from 'emailjs-com';
import { t } from 'i18next';




const Contacts = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        email_id: '',
      });



      const onSubmit = (e) => {

        e.preventDefault();

        send(
          'service_yim6wbw',
          'template_lqkeblu',
          toSend,
          'CxFVCtNpQDgES-1vF'
        )
        e.target.reset()
          setToSend('');
 
      };

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });

      };

  return (
    
     <div className="contact__container">
     <h2 className='contact_tittle'>{t('Contact_Me')}</h2>
        <form onSubmit={onSubmit} >
                <input
                    type="text"   
                    name='from_name' 
                    value={toSend.from_name} 
                    onChange={handleChange} 
                    placeholder='Your Full Name' required 
                />
                <input 
                    type="email"  
                    name='email_id' 
                    value={toSend.email_id} 
                    onChange={handleChange} 
                    placeholder='Your Email' required 
                />
                <textarea
                    name="message" 
                    rows="7" 
                    value={toSend.message} 
                    onChange={handleChange} 
                    placeholder='Your Message' required>
                </textarea>

             <button type='submit' className='btn-primary form_btn'>{t('Send_Message')}</button>
         </form>

         <div className="contact__options">
             <article className='contact__option'>
                 <h4>Email</h4>
                 <h5>rslwow79@gmail.com</h5>
                 <a href="mailto:rslwow79@gmail.com" className='btn-social'>{t('Send_Message')}</a>
             </article>

             <article className='contact__option'>
                 <h4>Viber</h4>
                 <h5>+380967959909</h5>
                 <a href="viber://chat?number=380967959909" className='btn-social'>{t('Send_Message')}</a>
             </article>

             <article className='contact__option'>
                 <h4>WhatsUp</h4>
                 <h5>+380967959909</h5>
                 <a href="https://api.whatsapp.com/send?phone=380967959909" className='btn-social'>{t('Send_Message')}</a>
             </article>

         </div>
     </div>
    
   
  )
}

export default Contacts;
