import { useState, useEffect } from 'react';
import { get_projects } from 'apps/sections/projects';

import fixtures from 'configs/sections/projects/list.json';
import 'styles/sections/projects/index.scss';
import { ProjectsData } from 'apps/types';

function Projects() {
  const queryParams = Object.fromEntries((window.location.href.split('?')[1] || '').split('&').map((item) => item.split('=')))
  const [projects, setProjects] = useState(queryParams.fixtures ? (fixtures as ProjectsData) : null);

  useEffect(() => {
    if(queryParams.fixtures) return;

    get_projects().then(data => setProjects(data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: Create UI
  return (
    <>Projects</>
  );
}

export default (Projects);
