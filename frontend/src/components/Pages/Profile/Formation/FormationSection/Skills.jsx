import { Button } from "react-bootstrap";
import styles from "../../../../../modules/skills.module.css";
import skillList from "../../../../../data/skills.json";
import { IconContext } from "react-icons";
import { BsPencil } from "react-icons/bs";
import { useState, useEffect } from "react";
const Skills = () => {
  const [skills, setSkills] = useState(skillList.skills);
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.header}>Skills & endorsements</h2>
        <div className={styles.innerContainer}>
          <p className={styles.newSkill}>Add a new skill</p>
          <IconContext.Provider value={{ className: styles.icon }}>
            <div>
              <BsPencil />
            </div>
          </IconContext.Provider>
        </div>
        <Button variant="outline-primary">Take skill quiz</Button>
      </div>
    </>
  );
};

export default Skills;
