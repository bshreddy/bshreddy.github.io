import { useState, useEffect } from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { get_about } from 'apps/sections/about';

import fixtures from "configs/sections/about/index.json";
import { AboutData } from 'apps/types';
import "styles/sections/about/index.scss";

function About() {
  const queryParams = Object.fromEntries((window.location.href.split('?')[1] || '').split('&').map((item) => item.split('=')))
  const [aboutData, setAboutData] = useState(fixtures as unknown as AboutData);

  useEffect(() => {
    if(queryParams.fixtures) return;

    get_about().then((data) => {
      setAboutData(data);
    }).catch((err) => {
      setAboutData(fixtures as unknown as AboutData);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="lg" className="about-root">
      <div className="about-head">
        <Typography variant="h4" className="about-title">About Me</Typography>
      </div>
      <hr />
      <div className="about-content">
        <Container maxWidth="md" className="about-terminal">
          <div className="title-bar">bshreddy - aboutme</div>
          <div className="body">
            <dl>
              {
                aboutData.map((item, index) => {
                  /* eslint no-eval: 0 */
                  let result = (item.preprocess) ? eval(item.preprocess)(item.result) : item.result;
                  return (
                    <>
                      <dd key={`prompt-${index}`}>{item.prompt}</dd>
                      <dt key={`result_attr-${index}`} {...item.result_attr}>
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
