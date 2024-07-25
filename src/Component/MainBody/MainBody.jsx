import React from "react";
import TypeWriter from "typewriter-effect";
import profile from "../../assets/Img/main-one.jpg";
import Icons from "./TechnologyIcons.jsx";
import "./MainBody.css";
const MainBody = () => {
  return (
    <div className="main-body-container">
      <div className="main-body-content">
        <div className="main-body-container">
          <div className="main-body-content">
            <div className="main-text-area">
              <h4 className="I-am">
                <TypeWriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: ["HI, I am..."],
                  }}
                />
              </h4>
              <h1>Haylemeskel Haylemariam</h1>
              <p>
                A passionate Software Engineering student currently in my 3rd
                year at AASTU. With a keen interest in full-stack web
                development and Python, I’m dedicated to creating innovative
                solutions that simplify and enhance everyday processes.
              </p>
              <p>
                I’m always open to new connections and opportunities, so feel
                free to reach out if you'd like to collaborate or just have a
                chat about technology!
              </p>
              <div className="main-buttons">
                <img src={Icons.code}></img>
                <img src={Icons.css}></img>
                <img src={Icons.js}></img>
                <img src={Icons.nodejs}></img>
                <img src={Icons.react}></img>
                <img src={Icons.mongoDB}></img>
                <img src={Icons.python}></img>
                <img src={Icons.html}></img> <br />
              </div>
              <div className="download-resume">
                <button className="download">Download CV</button>
                <button className="hire-mre">I am not sure</button>
              </div>
            </div>
            <div className="profile-image">
              <img src={profile} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
