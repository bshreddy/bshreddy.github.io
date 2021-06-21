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
      <div className="hero-text" style={{color: hero.color}}>
        <Typography variant="h4" component="div"className="hero-title-before">Hello, My name is</Typography>
        <Typography variant="h1" component="div" className="hero-title">Sai Hemanth Bheemreddy</Typography>
        <Typography variant="h4" component="div"className="hero-title-after">I love engineering things for fun!</Typography>
      </div>

      <div className="hero-footer" style={{color: hero.color}}>
        <Typography variant="body1" gutterBottom className="name">{hero.name}</Typography>
        <div className="flex-grow"></div>
        <Typography variant="caption" gutterBottom className="copyright">{hero.copyright}</Typography>
      </div>
    </div>
  );
}

export default Hero;
