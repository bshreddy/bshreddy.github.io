import NavBar from '../src1/components/NavBar';
import BackToTop from './back-to-top';
import {SectionComponents} from './sections';
import sections from '../src1/json/sections.json';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <NavBar
        sections={sections.slice(1)}
      />

      <div className="container">
        {sections.map((section) =>
          <>{SectionComponents[section.name]}</>
        )}
      </div>

      <BackToTop goto={sections[0].id} />
    </div>
  );
}

export default App;
