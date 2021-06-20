import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import '../styles/NavBar.scss';

type ToolbarMobileMenuProps = {
  id: string;
  anchorEl: null | Element | ((element: Element) => Element);
  open: boolean;
  onClose: () => void;
}

function ToolbarMobileMenu({id, anchorEl, open, onClose}: ToolbarMobileMenuProps) {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={id}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={onClose}
    >
      <MenuItem><p>About</p></MenuItem>
    </Menu>
  );
}

export default ToolbarMobileMenu;
