import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import { getRandomInt } from 'apps/helpers';

import heros from 'configs/sections/hero/index.json';
import 'styles/sections/hero/index.scss';

function Hero() {
  const hero = heros[getRandomInt(heros.length)];
  const backgroundImage = `${process.env.PUBLIC_URL}/images/heros/${hero.filename}`;

  return (
    <div className="hero-image" id="hero-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container maxWidth="xl" className="hero-text" style={{ color: hero.color }}>
        <Typography variant="h4" component="div" className="hero-title-before">Hello, My name is</Typography>
        <Typography variant="h1" component="div" className="hero-title">Sai Hemanth Bheemreddy</Typography>
        <Typography variant="h4" component="div" className="hero-title-after">I love engineering things for fun!</Typography>
      </Container>

      <div className="hero-footer" style={{ color: hero.color }}>
        <Typography variant="body1" gutterBottom className="name">{hero.name}</Typography>
        <div className="flex-grow"></div>
        <Typography variant="caption" gutterBottom className="copyright">{hero.copyright}</Typography>
      </div>
    </div>
  );
}

export default Hero;
