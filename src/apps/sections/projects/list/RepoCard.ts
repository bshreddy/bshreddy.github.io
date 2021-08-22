import { LanguagesStripData } from "./types";
import { LanguageEdge, Repository } from 'apps/types';

export const getLanguages = (repo: Repository): LanguagesStripData => {
  const total = repo.languages.edges
              .reduce((acc, edge) => ({ size: acc.size + edge.size} as LanguageEdge), { size: 0 } as LanguageEdge)
              .size;

  const height: string[] = []

  repo.languages.edges.forEach(edge => {
    height.push(Math.round((edge.size / total) * 100).toString());
  });

  const languages: LanguagesStripData  = [];
  repo.languages.nodes.forEach((language, index) => {
    languages.push({
      id: language.id,
      name: language.name,
      color: language.color,
      height: height[index] + "%"
    });
  });

  return languages;
}

export const getIconType = (repo: Repository) => {
  if (repo.isFork) {
    return "form";
  } else if (repo.isInOrganization) {
    return "org";
  } else {
    return "default";
  }
}
