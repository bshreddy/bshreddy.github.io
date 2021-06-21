import NavBar from './components/NavBar';
import BackToTop from './components/BackToTop';
import {SectionComponents} from './sections';
import sections from './json/sections.json';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <NavBar 
        sections={sections.slice(1)}
      />

      <div className="container">
        {sections.map((section) => 
          <section key={section.id} id={section.id} className="child">{SectionComponents[section.name]}</section>
        )}
      </div>

      <BackToTop />
    </div>
  );
}

export default App;
