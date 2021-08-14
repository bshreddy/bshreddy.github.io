import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import "styles/sections/about/index.scss"

function About() {
  let age = Math.abs((new Date(Date.now() - (new Date('1999/07/15')).getTime())).getUTCFullYear() - 1970);

  return (
    <Container maxWidth="lg" className="about-root">
      <div className="about-head">
        <Typography variant="h4" className="about-title">About Me</Typography>
      </div>
      <hr />
      <div className="about-content">
        <Container maxWidth="md" className="about-terminal">
          <div className="title-bar">saihemanthbr - aboutme</div>
          <div className="body">
            <dl>
              <dd>Hemanth.origin</dd>
              <dt>"Hyderabad, Telangana, India"</dt>

              <dd>Hemanth.experience.order_by("start_date", in.desc)</dd>
              <dt>{"[{"} <br />
                &nbsp;&nbsp;"organization": "Oracle Corporation", <br />
                &nbsp;&nbsp;"job title": "Associate Software Engineer", <br />
                &nbsp;&nbsp;"location": "Hyderabad, Telangana, India" <br />
                &nbsp;&nbsp;"time": "Jul 2021 - Present" <br />
                {"}]"}
              </dt>

              <dd>Hemanth.education</dd>
              <dt>{"{"} <br />
                &nbsp;&nbsp;"institute": "CVR College of Engineering", <br />
                &nbsp;&nbsp;"major": "Computer Science and Engineering (CSE)", <br />
                &nbsp;&nbsp;"graduation": "2021" <br />
                {"}"}
              </dt>

              <dd>Hemanth.resume</dd>
              <dt><a href={`${process.env.PUBLIC_URL}/static/resume.pdf`}>résumé.pdf</a></dt>

              <dd>Hemanth.contact.linkedin</dd>
              <dt><a href="https://www.linkedin.com/in/saihemanthbr/">linkedin.com/in/saihemanthbr/</a></dt>

              <dd>Hemanth.age</dd>
              <dt>{age}</dt>

              <dd>Hemanth.languages</dd>
              <dt>["English","Telugu", "Hindi"]</dt>

              <dd>Hemanth.interests</dd>
              <dt>["Coding", "Cycling", "Listening to Music", "Reading Books"]</dt>

              <dd>Hemanth.strengths</dd>
              <dt>["I Never Give Up", "Autodidact", "Quick Learner"]</dt>
            </dl>
          </div>
        </Container>
      </div>
    </Container>
  );
}

export default About;
