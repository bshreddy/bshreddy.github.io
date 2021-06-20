import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

import '../styles/NavBar.scss';

type ToolbarProps = {
  menuId: string;
  mobileMenuId: string;
  onMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
};

function Toolbar({menuId, mobileMenuId, onMobileMenuOpen}: ToolbarProps) {
  return (
    <>
      <div className='navbar-section-desktop'>
        <Button variant="text" className="navbar-button">About</Button>
      </div>

      <div className='navbar-section-mobile'>
        <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={onMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>
    </>
  )
}

export default Toolbar;
