import Container from '@material-ui/core/Container';
import { ProjectsData } from 'apps/types';
import Section from './Section';

import "styles/sections/projects/list/index.scss";

type ListProps = {
  loading: boolean;
  data: ProjectsData;
}

function List({ loading, data }: ListProps) {
  return (
    <Container maxWidth="lg" className="projects-list-root">
      <div className="projects-list-section featured">
        <Section
          title="Some Things I've Built"
          subtitle="Featured Projects"
          repos={data.pinned_repos}
        />
      </div>

      <div className="projects-list-section other">
        <Section
          title="Other Projects"
          subtitle={<>View All Repositories on <a href='https://github.com/SaiHemanthBR'>My GitHub</a></>}
          repos={data.other_repos}
        />
      </div>
    </Container>
  );
}

export default List;
