import { useState, useEffect } from 'react';
import { get_projects } from 'apps/sections/projects';
import List from 'contents/sections/projects/list';
import Loading from 'contents/sections/projects/Loading';
import Error from 'contents/sections/projects/Error';

import fixtures from 'configs/sections/projects/index.json';
import { ProjectsData } from 'apps/types';

function Projects() {
  const queryParams = Object.fromEntries((window.location.href.split('?')[1] || '').split('&').map((item) => item.split('=')))
  const [data, setData] = useState(queryParams.fixtures ? (fixtures as unknown as ProjectsData) : null);
  const [loading, setLoading] = useState(!queryParams.fixtures);
  const [error, setError] = useState<Error | null>(null);


  useEffect(() => {
    if(queryParams.fixtures) return;

    get_projects().then((data) => {
      setData(data);
    }).catch((err) => {
      setError(err);
    }).finally(() => {
      setLoading(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return (<Loading />);
  if (data) return (<List loading={loading} data={data} />);
  return (<Error error={error} />);
}

export default (Projects);
