import axios from "axios";
import { Repository, GithubAPIResponse, ProjectsData } from 'apps/types';

export const get_projects = async () => {
  const data = (await axios.get<GithubAPIResponse>(process.env.REACT_APP_PROJECTS_URL!)).data.data;
  const repositories: {[key: string]: Repository} = data.user.repositories.nodes.reduce((a, x) => ({...a, [x.id]: x}), {})

  return {
    pinned_repos: data.user.pinnedItems.edges.map((pinned_node) => repositories[pinned_node.node.id]),
    other_repos: data.user.repositories.nodes
    .filter((node) => !data.user.pinnedItems.edges.some((pinned_node) => pinned_node.node.id === node.id))
  } as ProjectsData;
}
