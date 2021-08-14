import { useQuery } from "@apollo/client";
import {default as ProjectsLoading} from './Loading';
import {default as ProjectsError} from './Error';
import {default as ProjectsList} from './List';

import { GithubReposQuery, ProjectsQueryResult } from 'apps/graphql';

import fixtures from 'configs/sections/projects/list.json';
import 'styles/sections/projects/index.scss';

function Projects() {
  const queryParams = Object.fromEntries((window.location.href.split('?')[1] || '').split('&').map((item) => item.split('=')))
  var { loading, error, data } = useQuery<ProjectsQueryResult>(GithubReposQuery, { skip: queryParams.fixtures || false })
  if(queryParams.fixtures) { data = (fixtures.data as ProjectsQueryResult); loading = false; }
  loading = queryParams.fixtures ? queryParams.loading || false : loading;

  if (loading) return <ProjectsLoading />;
  if(data) return <ProjectsList loading={loading} data={data} />;
  return <ProjectsError error={error} />;
}

export default (Projects);
