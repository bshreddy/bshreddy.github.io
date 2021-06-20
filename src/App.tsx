import NavBar from './components/NavBar';
import './styles/App.scss';
import {SectionComponents} from './sections';
import sections from './json/sections.json';

function App() {
  return (
    <div className="App">
      <NavBar 
        sections={sections.slice(1)}
      />

      <div className="container">
        {sections.map((section) => 
          <section key={section.id} className="child">{SectionComponents[section.name]}</section>
        )}
      </div>
    </div>
  );
}

export default App;
