import axios from "axios";
import { SkillsData } from 'apps/types';

export const get_skills = async () => {
  return (await axios.get<SkillsData>(process.env.REACT_APP_SKILLS_URL!)).data;
}
