import Typography from "@material-ui/core/Typography";

import heros from "../json/heros.json"
import './styles/Hero.scss'

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
}

function Hero() {
  const hero = heros[getRandomInt(heros.length)];
  const backgroundImage = `${process.env.PUBLIC_URL}/images/heros/${hero.filename}`;
  
  return (
    <div className="hero-image" id="hero-image" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="hero-text">
        {/* <div className="hero-title" id="hero-title">Sai Hemanth Bheemreddy</div> */}
        <Typography variant="h1" gutterBottom className="hero-title">Sai Hemanth Bheemreddy</Typography>
      </div>

      <div className="hero-footer">
      <Typography variant="body1" gutterBottom className="name">{hero.name}</Typography>
        <div className="flex-grow"></div>
        <Typography variant="caption" gutterBottom className="copyright">{hero.copyright}</Typography>
      </div>
    </div>
  );
}

export default Hero;
