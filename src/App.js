import React from 'react'
import NavBar from './Component/NavBar/NavBar';
import SocialLinks from './Component/SocialLinks/SocialLinks';
import MainBody from './Component/MainBody/MainBody';
import Skill from './Component/Skill/Skill';

const App = () => {
  return (
    <>
      <SocialLinks />
      <NavBar className="navbar" />
      <MainBody />
      <Skill/>
    </>
  );
}

export default App
