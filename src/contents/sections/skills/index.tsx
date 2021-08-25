import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Category from "./Category";

import skillsData from "configs/sections/skills/index.json";
import "styles/sections/skills/index.scss";

function Skills() {
  return (
    <Container maxWidth="lg" className="skills-root">
      <div className="skills-head">
        <Typography variant="h4" className="skills-title">My Skills</Typography>
        <Typography variant="caption" className="skills-subtitle">Some of my Coding / Technical Skills</Typography>
      </div>
      <hr />
      <div className="skills-content">
        <div className="skills-catogeries-root">
          {skillsData.map((category, index) =>
            <Category category={category} />
          )}
        </div>
      </div>
    </Container>
  );
}

export default Skills;
