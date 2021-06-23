import { useQuery } from "@apollo/client";
import {default as ProjectsLoading} from '../components/Projects/Loading';
import {default as ProjectsError} from '../components/Projects/Error';
import {default as ProjectsList} from '../components/Projects/List';

import { GithubReposQuery, ProjectsQueryResult } from '../graphql';

function Projects() {
  const { loading, error, data } = useQuery<ProjectsQueryResult>(GithubReposQuery);

  if (loading) return <ProjectsLoading />;
  if(data) return <ProjectsList data={data} />;
  
  return <ProjectsError error={error} />;
}

export default (Projects);
