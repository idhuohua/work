import React, { useState } from 'react';
import img01 from '../img/img01.png';
import img02 from '../img/img02.png';
import img from '../img/img.png';
import img03 from '../img/img03.png';
import img04 from '../img/img04.png';
import img05 from '../img/img05.png';
import img06 from '../img/img06.png';
import img07 from '../img/img07.png';
import img08 from '../img/资源 1.png';
import img09 from '../img/资源 7.png';
import img10 from '../img/资源 8.png';
import img11 from '../img/资源 9.png';
import img12 from '../img/资源 10.png';
import img13 from '../img/资源 12.png';
import img14 from '../img/资源 13.png';
// import img04 from '../img/img04.png';
import '../styles/page3.css';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [imagePosition, setImagePosition] = useState(0);

  const showModal = (imageSrc) => {
    setModalImageSrc(imageSrc);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleImageClick = () => {
    setImagePosition(imagePosition - 10);
  };

  return (
    <div>
      <div className="sidebar">
        {/* <img src={img01} alt="Sidebar" /> */}
      </div>
      <div className="topbar">
        <img src={img} className="img0" alt="wrong" />
      </div>
      <article>
        <div className="section">
          <div className="left-column">
            {/* <h1>传统制香技艺是制香者选择花、草、果、木等天然材料，通过手工研磨、搅拌、压制等工艺制成天然香。在中国，香文化源远流长，香制作技艺也是一门非常古老的手艺。传统香制作技艺主要分为三个步骤：选料、研磨和制香。</h1>
            <h2>Traditional incense making techniques are divided into three main steps: selecting the ingredients, grinding and making the incense.</h2> */}
          </div>
          <div className="vertical-nav">
            <ul>
              <li onClick={() => showModal(img08)}>
                <img src={img01} className="imgx" alt="制香的基础步骤" />
              </li>
              <li onClick={() => showModal(img09)}>
                <img src={img02} className="imgx" alt="香膏制作工艺" />
              </li>
              <li onClick={() => showModal(img10)}>
                <img src={img03} className="imgx" alt="盘香制作工艺" />
              </li>
              <li onClick={() => showModal(img11)}>
                <img src={img04} className="imgx" alt="塔香制作工艺" />
              </li>
              <li onClick={() => showModal(img12)}>
                <img src={img05} className="imgx" alt="香饼制作工艺" />
              </li>
              <li onClick={() => showModal(img13)}>
                <img src={img06} className="imgx" alt="线香制作工艺" />
              </li>
              <li onClick={() => showModal(img14)}>
                <img src={img07} className="imgx" alt="篆香制作工艺" />
              </li>
            </ul>
          </div>
          {modalVisible && (
            <div onClick={handleModalClick}>
              <img
                className={`modal-content ${modalVisible ? 'visible' : ''}`}
                style={{ top: `${imagePosition}px` }}
                src={modalImageSrc}
                alt="Modal"
                onClick={handleImageClick}
              />
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

export default App;
