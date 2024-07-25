import "./Skills.css";
import SkillCard from "./SkillCard/SkillCard.jsx";
import { SKILLS } from "../../utils/data";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard.jsx";
import { useState } from "react";
const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);


  const handleSelecteSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className="skills-container">
      <h5>Technical Proficiency</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelecteSkill(item);
              }}
            />
          ))}
        </div>

        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
