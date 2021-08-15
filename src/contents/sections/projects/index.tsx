import fixtures from 'configs/sections/projects/list.json';
import 'styles/sections/projects/index.scss';

function Projects() {
  const queryParams = Object.fromEntries((window.location.href.split('?')[1] || '').split('&').map((item) => item.split('=')))

  return (
    <>Projects</>
  );
}

export default (Projects);
