import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import { ProjectsQueryResult } from 'apps/graphql';

type ListProps = {
  loading: boolean;
  data: ProjectsQueryResult;
}

function List({ loading, data }: ListProps) {
  const theme = useTheme();
  const isSplit = useMediaQuery(theme.breakpoints.up('lg'));

  if (isSplit) {
    return (
      <Container className="projects-list-root" maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={6} className="featured">
            <div className="title-root">
              <Typography variant="h4" component="div" className="title">Some Things I've Built</Typography>
              <Typography variant="caption" component="div" gutterBottom className="subtitle">Featured Projects</Typography>
            </div>

            <GridList className="repos-root" cols={1.2} cellHeight={256}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((tile) => (
                <GridListTile key={tile} classes={{ root: "repo-card-tile-root", tile: "repo-card-tile" }} cols={1} rows={1}>
                  <Card className="repo-card" elevation={2}>
                    {tile.toString().padStart(30, '0')}
                  </Card>
                </GridListTile>
              ))}
            </GridList>
          </Grid>

          <Grid item lg={6} className="other">
            <div className="title-root">
              <Typography variant="h4" component="div" className="title">Other Projects</Typography>
              <Typography variant="caption" component="div" gutterBottom className="subtitle">
                View All Repositories on <a href="https://github.com/SaiHemanthBR">My GitHub</a>
              </Typography>
            </div>
          </Grid>
        </Grid>

      </Container>
    );
  } else {
    return (
      <>
        a
      </>
    );
  }
}

export default List;
