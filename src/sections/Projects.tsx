import { useQuery } from "@apollo/client";
import {default as ProjectsLoading} from '../components/Projects/Loading';
import {default as ProjectsError} from '../components/Projects/Error';
import {default as ProjectsList} from '../components/Projects/List';
import { GithubReposQuery, ProjectsQueryResult } from '../graphql';

import fixtures from '../json/ProjectsList.json';

function Projects() {
  const queryParams = Object.fromEntries((window.location.href.split('?')[1] || '').split('&').map((item) => item.split('=')))
  var { loading, error, data } = useQuery<ProjectsQueryResult>(GithubReposQuery, { skip: queryParams.fixtures || false }) 
  if(queryParams.fixtures) { data = (fixtures.data as ProjectsQueryResult); loading = false; } 

  if (loading) return <ProjectsLoading />;
  if(data) return <ProjectsList data={data} />;
  return <ProjectsError error={error} />;
}

export default (Projects);
