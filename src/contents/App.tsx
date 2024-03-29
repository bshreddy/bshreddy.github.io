import NavBar from 'contents/navbar';
import BackToTop from 'contents/back-to-top';
import {SectionComponents} from 'contents/sections';

import sections from 'configs/sections/index.json';
import 'styles/App.scss';

function App() {
  return (
    <div className="App">
      <NavBar
        sections={sections.slice(1)}
      />

      <div className="container">
        {sections.map((section) =>
          <section key={section.id} id={section.id} className="child">{SectionComponents[section.id]}</section>
        )}
      </div>

      <BackToTop goto={sections[0].id} />
    </div>
  );
}

export default App;
