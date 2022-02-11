import { useState, ReactElement } from "react";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { marked } from "marked";
import GitHubIcon from "assets/icons/GitHubIcon";
import GitHubStarIcon from "assets/icons/GitHubStarIcon";
import GitHubForkIcon from "assets/icons/GitHubForkIcon";
import GitHubLicenseIcon from "assets/icons/GitHubLicenseIcon";
import GitHubRepoIcon from "assets/icons/GitHubRepoIcon";
import GitHubOrgIcon from "assets/icons/GitHubOrgIcon";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import LanguagesStrip from "contents/sections/projects/list/LanguagesStrip";
import { Repository } from "apps/types";
import { getLanguages, getIconType } from "apps/sections/projects/list/RepoCard";

import "styles/sections/projects/list/RepoCard.scss";

type RepoCardProps = {
  repo: Repository,
  elevation: number,
  hoverElevation: number
}

const iconsTypeMap: Record<string, ReactElement> = {
  "default": <GitHubRepoIcon />,
  "org": <GitHubOrgIcon />,
  "fork": <GitHubForkIcon />
}

function RepoCard({ repo, elevation, hoverElevation }: RepoCardProps) {
  const [cardElevation, setCardElevation] = useState(elevation);

  return (
    <div className="repo-card-root">
      <Card className="repo-card" elevation={cardElevation}
        onMouseOver={() => setCardElevation(hoverElevation)}
        onMouseOut={() => setCardElevation(elevation)}
      >
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
                  from <Link href={`https://github.com/${repo.nameWithOwner}`}>{repo.nameWithOwner}</Link>
                </Typography>
              }
            </div>
          </div>

          <div className="description">
            {repo.description &&
              <Typography variant="body1" className="description-body">{repo.description}</Typography>
            }

            { (!repo.description && repo.readme?.text) &&
              <div className="description-body">
                <Link href={repo.url}>
                  <Typography variant="caption" className="description-body-heading">README.md</Typography>
                </Link>
                <div className="description-readme" dangerouslySetInnerHTML={{__html: marked.parse(repo.readme.text, { breaks: true })}}></div>
              </div>
            }
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
            {/* #TODO: Added contributers and issues open */}
            <div className="left">
              {repo.stargazerCount > 0 &&
                <IconButton size="small" className="footer-buttons" aria-label="github stars">
                  <GitHubStarIcon className="github-star-icon" fontSize="small" color="primary" />
                  <Typography className="icon-text" variant="caption" color="primary">{repo.stargazerCount}</Typography>
                </IconButton>
              }

              {repo.forkCount > 0 &&
                <IconButton size="small" className="footer-buttons" aria-label="github stars">
                  <GitHubForkIcon className="github-fork-icon" fontSize="small" color="primary" />
                  <Typography className="icon-text" variant="caption" color="primary">{repo.forkCount}</Typography>
                </IconButton>
              }
            </div>

            <div className="center">
              {repo.isArchived &&
                <Typography variant="caption" component="div" className="archived-text">Archived</Typography>
              }

              {(!repo.isArchived && repo.licenseInfo) &&
                <Button
                  size="small"
                  className="license-button"
                  aria-label="github stars"
                  href={(repo.licenseInfo.name.toLowerCase() === "other")
                          ? `${repo.url}/blob/master/LICENSE.md`
                          : repo.licenseInfo!.url}
                  target="_blank"
                >
                  <GitHubLicenseIcon className="license-icon" fontSize="small" color="primary" />
                  <Typography variant="caption" component="div" className="license-text">{repo.licenseInfo.name}</Typography>
                </Button>
              }
            </div>

            <div className="right">
              <IconButton
                size="small"
                className="footer-buttons"
                aria-label="open github repo"
                href={repo.url}
              >
                <GitHubIcon className="github-icon" color="primary" fontSize="small" />
              </IconButton>

              {repo.homepageUrl &&
                <IconButton
                  size="small"
                  className="footer-buttons"
                  aria-label="open project homepage"
                  href={repo.homepageUrl}
                >
                  <OpenInNewIcon className="link-icon" fontSize="small" />
                </IconButton>
              }
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

RepoCard.defaultProps = {
  elevation: 6,
  hoverElevation: 24
};

export default RepoCard;
