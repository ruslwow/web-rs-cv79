import React from 'react'
import './Experience.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import imgHtml from '../../imgFiles/images/HTML_logo.jpg'
import imgCss from '../../imgFiles/images/CSS_3_logo.jpg'
import imgJs from '../../imgFiles/images/JS_logo2.jpg'
import imgReact from '../../imgFiles/images/React_logo2.jpg'
import imgNpm from '../../imgFiles/images/npm_logo.jpg'
import imgGitHub from '../../imgFiles/images/Git_Hub_logo.jpg'
import imgVS from '../../imgFiles/images/Visual_Studio_Code_logo.jpg'




const Experience = () => {

    const dataImgSlider = [
        {
            id: 1,
            name: 'HTML',
            linkImg: imgHtml,
            linkUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
        },
    
        {
            id: 2,
            name: 'CSS',
            linkUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            linkImg: imgCss
        },
    
        {
            id: 3,
            name: 'JS',
            linkUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            linkImg: imgJs
        },
    
        {
            id: 4,
            name: 'REACT',
            linkUrl: 'https://uk.reactjs.org/',
            linkImg: imgReact
        },
    
        {
            id: 5,
            name: 'npm',
            linkUrl: 'https://www.npmjs.com/',
            linkImg: imgNpm
        },
    
        {
            id: 6,
            name: 'GitHub',
            linkUrl: 'https://github.com/',
            linkImg: imgGitHub
        },
    
        {
            id: 7,
            name: 'VisualStudioCode',
            linkUrl: 'https://code.visualstudio.com/',
            linkImg: imgVS
        }
    ];

    const settings = {
        dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      };
   

  return (
    <div  className='experience_container'>
         
        <Slider {...settings}>
        {dataImgSlider.map((item, index) =>(
            <a className='experience_link' href={item.linkUrl} key={index}>
                <img className='experience_img' src={item.linkImg} alt="name_img"/>
             </a> 
        ))}
        </Slider>

         
    </div>
  )
}

export default Experience

