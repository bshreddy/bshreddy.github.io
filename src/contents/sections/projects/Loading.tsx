import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import 'styles/sections/projects/Loading.scss';

function Loading() {
  return (
    <Container maxWidth="sm" className="projects-loading-root">
      <div className="projects-loading">
        <CircularProgress color="secondary" size={48} className="spinner" />
        <Typography variant="caption" component="div" className="technical-message">Loading projects from <a href="https://github.com/SaiHemanthBR">github.com/SaiHemanthBR</a>.</Typography>
      </div>
    </Container>
  );
}

export default Loading;
