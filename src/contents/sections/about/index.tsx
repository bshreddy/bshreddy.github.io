import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import about_json from "configs/sections/about/index.json"
import "styles/sections/about/index.scss"

function About() {
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
              {
                about_json.map((item, index) => {
                  /* eslint no-eval: 0 */
                  let result = (item.preprocess) ? eval(item.preprocess)(item.result) : item.result;
                  return (
                    <>
                      <dd key={index}>{item.prompt}</dd>
                      <dt key={index} {...item.result_attr}>
                        {result}
                      </dt>
                    </>
                  );
                })
              }
            </dl>
          </div>
        </Container>
      </div>
    </Container>
  );
}

export default About;
