import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import longimage from '../images/Birla-Uttam-Cement-Dangler-Advert1.jpg';
import longimage2 from '../images/jindallong.jpg';
import longimage3 from '../images/wonderlong.webp';
import longimage4 from '../images/jindallongsteel.jpg';
// import longimage5 from '../images/mstmt long.jpg'
import longimage6 from '../images/saillong.jpeg'
import longimage7 from '../images/tmtbarlong.avif'
import longimage8 from '../images/tmtbarlong1.jpg'
import longimage9 from '../images/sail.jpg'
import longimage10 from '../images/birlacement1.jpg'
import longimage11 from '../images/birlacement.jpg'

// Array of images and captions
const slideImages = [
  { url: longimage, caption: 'Slide 1' },
  { url: longimage2, caption: 'Slide 2' },
  { url: longimage3, caption: 'Slide 3' },
  { url: longimage4, caption: 'Slide 4' },
  // { url: longimage5, caption: 'Slide 5' },
  { url: longimage6, caption: 'Slide 6' },
  { url: longimage7, caption: 'Slide 7' },
  { url: longimage8, caption: 'Slide 8' },
  { url: longimage9, caption: 'Slide 9' },
  { url: longimage10, caption: 'Slide 10' },
  { url: longimage11, caption: 'Slide 11' }
];


const Slideshow = () => {
  return (
    <div className='border-t-[6px] border-black border-b-[6px] ' >
      <div className="slide-container">
      <Slide autoplay={true} duration={2000} arrows={false} infinite={true}>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="w-full h-[500px] flex justify-center items-center">
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
              }}
            >

            </div>
          </div>
        ))}
      </Slide>
    </div>
    </div>
  );
};

export default Slideshow;
