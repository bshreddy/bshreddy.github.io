import axios from "axios";
import { Repository, GithubAPIResponse, ProjectsData } from 'apps/types';

export const get_projects = async () => {
  const res = (await axios.get<GithubAPIResponse>('https://saihemanthbr-public.s3.ap-south-1.amazonaws.com/saihemanthbr-github-io/projects.json'));
  const data = res.data.data;

  const pinned_repos: Repository[] = [];
  const other_repos: Repository[] = [];

  data.user.repositories.nodes.forEach((node) => {
    if(data.user.pinnedItems.edges.some((pinned_node) => pinned_node.node.id === node.id)) {
      pinned_repos.push(node);
    } else {
      other_repos.push(node);
    }
  });

  return {pinned_repos, other_repos} as ProjectsData;
}
