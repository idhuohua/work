import React, { useState } from 'react';

import left1 from '../img2/mg.png';
import left2 from '../img2/mg3.png';
import img4 from '../img2/mg4.png';

const ImageGallery = () => {
  const [showImage4, setShowImage4] = useState(false);

  const handleMouseEnter = (imageIndex) => {
    if (imageIndex === 1) {
      setShowImage4(true);
    }
  };

  const handleMouseLeave = () => {
    setShowImage4(false);
  };

  return (
    <div onMouseLeave={handleMouseLeave}>
      <div style={{ display: 'flex', margin: '40px' }}>
        <img
          src={left1}
          style={{ width: '400px', height: 'auto' }}
          alt="First"
          onMouseEnter={() => handleMouseEnter(0)}
        />
        <img
          src={left2}
          style={{ width: '900px', height: 'auto' }}
          alt="Second"
          onMouseEnter={() => handleMouseEnter(1)}
        />
      </div>
      {showImage4 && (
        <div
          style={{
            position: 'absolute',
            top: '280px',
            left: '600px',
            opacity: showImage4 ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        >
          <img src={img4} style={{ height: 'auto', width: '600px' }} alt="Third" />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
