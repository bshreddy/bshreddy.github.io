import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import socials from '../json/socials.json';
import "./styles/Contact.scss";

function Contact() {
  const social_icon_baseurl = `${process.env.PUBLIC_URL}/images/socials`

  return (
    <div className="contact-root">
      <Container maxWidth="sm" className="container">
        <div className="title-container">
          <Typography variant="h3" gutterBottom align="center" className="title">Get In Touch</Typography>
          <Typography variant="h6" gutterBottom align="center" className="subtitle">
            My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to DM me about any relevant job updates.
          </Typography>
        </div>

        <div className="social-container">
          {socials.map((social) =>
            <Card key={social.id} className="social-card" elevation={4}>
              <CardActionArea className="social-card-action" href={social.link}>
                <img src={`${social_icon_baseurl}/${social.filename}`}/>
                <Typography variant="subtitle1" align="center" component="span">{social.name}</Typography>
              </CardActionArea>
            </Card>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Contact;
