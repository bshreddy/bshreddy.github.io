import { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import "styles/sections/skills/Category.scss";

type CategoryProps = {
  category: {
    id: string;
    title: string;
    skills: string[];
  };
  elevation: number;
  hoverElevation: number;
}

function Category({ category, elevation, hoverElevation }: CategoryProps) {
  const [cardElevation, setCardElevation] = useState(6);

  return (
    <div className="category-root">
      <Card className="category-card" elevation={cardElevation}
        onMouseOver={() => setCardElevation(hoverElevation)}
        onMouseOut={() => setCardElevation(elevation)}
      >
        <div className="card-head">
          <Typography variant="h6" className="title">{category.title}</Typography>
        </div>
        <hr />
        <div className="card-content">
          {category.skills.map((skill) =>
            <Typography variant="body1" component="div" className="skill-item">{skill}</Typography>
          )}
        </div>
      </Card>
    </div>
  )
}

Category.defaultProps = {
  elevation: 6,
  hoverElevation: 24
}

export default Category;
