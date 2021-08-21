import Card from "@material-ui/core/Card";
import LanguagesStrip from "contents/sections/projects/list/LanguagesStrip";
import { Repository } from "apps/types";
import { getLanguages } from "apps/sections/projects/list/RepoCard";

import "styles/sections/projects/list/RepoCard.scss";

type RepoCardProps = {
  repo: Repository
}

function RepoCard({ repo }: RepoCardProps) {
  return (
    <div className="repo-card-root">
      <Card className="repo-card" elevation={4}>
        <LanguagesStrip data={getLanguages(repo)} />
        <div className="content">{repo.name}</div>
      </Card>
    </div>
  );
}

export default RepoCard;
