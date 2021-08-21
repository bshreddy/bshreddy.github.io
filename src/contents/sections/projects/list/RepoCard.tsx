import { ReactElement } from "react";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';

import LanguagesStrip from "contents/sections/projects/list/LanguagesStrip";
import { Repository } from "apps/types";
import { getLanguages, getIconType } from "apps/sections/projects/list/RepoCard";

import "styles/sections/projects/list/RepoCard.scss";


type RepoCardProps = {
  repo: Repository
}

const iconsTypeMap: Record<string, ReactElement> = {
  "default": <BookOutlinedIcon />,
  "org": <BusinessOutlinedIcon />,
  "fork": <AccountTreeOutlinedIcon />
}

function RepoCard({ repo }: RepoCardProps) {
  return (
    <div className="repo-card-root">
      <Card className="repo-card" elevation={4}>
        <LanguagesStrip data={getLanguages(repo)} />
        <div className="content">
          <div className="content-header">
            <div className="icon-root">{iconsTypeMap[getIconType(repo)]}</div>
            <div className="title-root">
              <Link href={repo.url}>
                <Typography variant="h6" className="title">{repo.name}</Typography>
              </Link>
              {(repo.isFork || repo.isInOrganization) ??
                <Typography variant="caption" className="subtitle">
                  from <Link href={`https://github.com/${repo.nameWithOwner}`} >{repo.nameWithOwner}</Link>
                </Typography>
              }
            </div>
          </div>

          <div className="description">
            description
          </div>

          <div className="topics">
            {repo.repositoryTopics.nodes.map(node => {
              return (
                <div key={node.topic.name} className="topic">
                  <Link href={node.url}>
                    <Typography variant="caption" className="title" color="secondary">{node.topic.name}</Typography>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="content-footer">
            footer
          </div>
        </div>
      </Card>
    </div>
  );
}

export default RepoCard;
