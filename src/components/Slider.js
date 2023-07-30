
import React from 'react';
import Carosusel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';




const Slider = ({ start }) => {
    return (
      <Carosusel fade>
        {start.map((item, index) => (
          <Carosusel.Item>
            <img
              className='d-block w-100'
              src={item}
              alt='First-slide'
            />
          </Carosusel.Item>
        ))}
      </Carosusel>
    );
  };
  
  export default Slider;
  
