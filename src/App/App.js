import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


 

import './App.css';

import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Skills from '../pages/Skills/Skills';
import Contacts from '../pages/Contacts/Contacts';

import Side from '../components/SideMenu/Side';

import '../components/i18next/i18next.js'; 
import { useTranslation } from 'react-i18next';






const App = () => {

    const {  i18n } = useTranslation();


    
    return (

     <Router> 
        <div className="container_app">
          
                <div className='side_wrapper'>
                        <Side />     
                </div>
        

        <div className='btn_change_container'>
                <button onClick={() => i18n.changeLanguage('en')}>EN</button>
                <button onClick={() => i18n.changeLanguage('ua')}>UA</button>
                <button onClick={() => i18n.changeLanguage('pl')}>PL</button>
        </div>

                <Routes>

                        <Route path="/" element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/skills" element={<Skills />}/>
                        <Route path="/contacts" element={<Contacts />}/>
                </Routes>
     </div>   
    </Router>
    );
};

export default App;

