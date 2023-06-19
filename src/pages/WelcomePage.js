import React, { useState, useEffect } from 'react';
// import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/WelcomePage.css'
import path_to_image from "../img/1.png";
import'../App.css';

const WelcomePage = () =>{
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 在组件挂载后延迟一段时间，然后将 isVisible 设置为 true，使图片逐渐出现
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 延迟1秒

    return () => {
      clearTimeout(timeoutId); // 在组件卸载时清除定时器
    };
  }, []);
  return (
    <div className='background'>
      <Link to="/main">
      <img src={path_to_image} className={`text ${isVisible ? 'appear' : ''}`} alt="Click to go to MainPage" />
      </Link>
    </div>
  );
};

export default WelcomePage;
