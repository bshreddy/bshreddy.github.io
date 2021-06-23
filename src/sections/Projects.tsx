import { useQuery } from "@apollo/client";
import ProjectsError from '../components/Projects/ProjectsError';

import { GithubReposQuery } from '../graphql';

function Projects() {
  const { loading, error, data } = useQuery(GithubReposQuery);

  if (loading) return <>Loading...</>;
  if (error) return <ProjectsError error={error} />;

  return <>Projects</>;
}

export default (Projects);
