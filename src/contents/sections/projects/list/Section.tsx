import { ReactElement } from "react";
import Typography from "@material-ui/core/Typography";
import { Repository } from "apps/types";

import "styles/sections/projects/list/Section.scss";

type SectionProps = {
  title: string;
  subtitle: string | ReactElement;
  repos: Repository[]
}

function Section({ title, subtitle, repos }: SectionProps) {
  return (
    <div className="projects-section-root">
      <div className="section-head">
        <Typography variant="h4" component="div" className="section-title">{title}</Typography>
        <Typography variant="caption" component="div" className="section-subtitle">{subtitle}</Typography>
      </div>
      <hr />
      <div className="section-content">
        <div className="section-repos">

        </div>
      </div>
    </div>
  );
}

export default Section;
