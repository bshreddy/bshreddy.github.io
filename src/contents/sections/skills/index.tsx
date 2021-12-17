import { useState, useEffect } from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Category from "./Category";
import { get_skills } from 'apps/sections/skills';

import fixtures from "configs/sections/skills/index.json";
import { SkillsData } from 'apps/types';
import "styles/sections/skills/index.scss";

function Skills() {
  const queryParams = Object.fromEntries((window.location.href.split('?')[1] || '').split('&').map((item) => item.split('=')))
  const [skillsData, setSkillsData] = useState(fixtures as unknown as SkillsData);

  useEffect(() => {
    if(queryParams.fixtures) return;

    get_skills().then((data) => {
      setSkillsData(data);
    }).catch((err) => {
      console.error({'skills': err});
      setSkillsData(fixtures as unknown as SkillsData);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="lg" className="skills-root">
      <div className="skills-head">
        <Typography variant="h4" className="skills-title">My Skills</Typography>
        <Typography variant="caption" className="skills-subtitle">Some of my Coding / Technical Skills</Typography>
      </div>
      <hr />
      <div className="skills-content">
        <div className="skills-catogeries-root">
          {skillsData.map((category) =>
            <Category category={category} />
          )}
        </div>
      </div>
    </Container>
  );
}

export default Skills;
