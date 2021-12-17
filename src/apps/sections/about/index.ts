import axios from "axios";
import { AboutData } from 'apps/types';

export const get_about = async () => {
  return (await axios.get<AboutData>(process.env.REACT_APP_ABOUT_URL!)).data;
}
