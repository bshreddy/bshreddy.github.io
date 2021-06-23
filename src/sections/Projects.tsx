import { useQuery } from "@apollo/client";
import ProjectsLoading from '../components/Projects/ProjectsLoading';
import ProjectsError from '../components/Projects/ProjectsError';

import { GithubReposQuery } from '../graphql';

function Projects() {
  const { loading, error, data } = useQuery(GithubReposQuery);

  if (loading) return <ProjectsLoading />;
  if (error) return <ProjectsError error={error} />;

  return <>Projects</>;
}

export default (Projects);
