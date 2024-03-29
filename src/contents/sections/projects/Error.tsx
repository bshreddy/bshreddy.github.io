import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { getRandomInt } from 'apps/helpers';

import jsonData from 'configs/sections/projects/error.json';
import 'styles/sections/projects/Error.scss';

type ErrorProps = {
  error: Error | null;
}

function Error({ error }: ErrorProps) {
  const { titles, emojies, messages } = jsonData;

  const title = titles[getRandomInt(titles.length)];
  const emoji = emojies[getRandomInt(emojies.length)];
  const message = messages[getRandomInt(messages.length)];

  return (
    <Container maxWidth="sm" className="projects-error-root">
      <div className="projects-error">
        <Typography variant="h3" gutterBottom className="title">{title} {emoji}</Typography>
        <Typography variant="h6" gutterBottom className="message">{message}</Typography>


        <Typography variant="subtitle2" className="technical-message">Unable to retrive projects from <a href="https://github.com/bshreddy">github.com/bshreddy</a>.</Typography>
        <Typography variant="caption" className="error-message">Error: {error?.message ?? "Unknown Error"}</Typography>
      </div>
    </Container>

  );
}

export default Error;
