import { useQuery } from "@apollo/client";
import {default as ProjectsLoading} from '../components/Projects/Loading';
import {default as ProjectsError} from '../components/Projects/Error';

import { GithubReposQuery } from '../graphql';

function Projects() {
  const { loading, error, data } = useQuery(GithubReposQuery);

  if (loading) return <ProjectsLoading />;
  if (error) return <ProjectsError error={error} />;

  return <>Projects</>;
}

export default (Projects);
