import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { ApolloError } from "@apollo/client";
import { getRandomInt } from '../../helpers';

import jsonData from '../../json/ProjectsError.json';
import '../styles/Projects.scss';

type ProjectsErrorProps = {
  error: ApolloError | undefined;
}

function ProjectsError({ error }: ProjectsErrorProps) {
  const { titles, emojies, messages } = jsonData;
  
  const title = titles[getRandomInt(titles.length)];
  const emoji = emojies[getRandomInt(emojies.length)];
  const message = messages[getRandomInt(messages.length)];

  return (
    <Container maxWidth="sm" className="projects-error-root">
      <div className="projects-error">
        <Typography variant="h3" gutterBottom className="title">{title} {emoji}</Typography>
        <Typography variant="h6" gutterBottom className="message">{message}</Typography>


        <Typography variant="subtitle2" className="technical-message">Unable to retrive projects from <a href="https://github.com/SaiHemanthBR">github.com/SaiHemanthBR</a>.</Typography>
        <Typography variant="caption" className="error-message">Error: {error?.message}</Typography>
      </div>
    </Container>
  );
}

export default ProjectsError;
