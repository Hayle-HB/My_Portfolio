// src/ImageSlider.js
import React from "react";
import Slider from "react-slick";
// src/index.js or src/App.js
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Skill.css' // Custom styles

const skills = [
  {
    icon: "https://via.placeholder.com/50?text=JS",
    title: "JavaScript",
    description:
      "I have extensive experience with JavaScript, developing dynamic and interactive web applications.",
  },
  {
    icon: "https://via.placeholder.com/50?text=Python",
    title: "Python",
    description:
      "Skilled in Python for data analysis, machine learning, and backend development.",
  },
  {
    icon: "https://via.placeholder.com/50?text=React",
    title: "React",
    description:
      "Proficient in React for building responsive and efficient user interfaces.",
  },
  // Add more skills as needed
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="slide">
            <div className="slide-header">
              <img src={skill.icon} alt={skill.title} className="skill-icon" />
            </div>
            <div className="slide-body">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
