export type PinnedItem = {
  node: {
    id: string;
  };
};

export type Language = {
  id: string;
  name: string;
  color: string;
};

export type LanguageEdge = {
  size: number;
};

export type Languages = {
  nodes: Array<Language>;
  edges: Array<LanguageEdge>;
};

export type Readme = {
  text: string;
};

export type RepositoryTopic = {
  name: string;
};

export type RepositoryTopicNode = {
  topic: RepositoryTopic;
  url: string;
};

export type RepositoryTopics = {
  nodes: Array<RepositoryTopicNode>;
};

export type Repository = {
  id: string;
  name: string;
  nameWithOwner: string;
  description?: string;
  url: string;
  homepageUrl?: string;
  updatedAt?: string;
  stargazerCount: number;
  forkCount: number;
  isArchived: boolean;
  isFork: boolean;
  isInOrganization: boolean;
  languages: Languages;
  readme: Readme;
  repositoryTopics: RepositoryTopics;
};

export type GithubUser = {
  pinnedItems: {
    edges: Array<PinnedItem>;
  };
  repositories: {
    totalCount: number;
    nodes: Array<Repository>;
  };
};

export type ProjectsQueryResult = {
  user: GithubUser;
};
