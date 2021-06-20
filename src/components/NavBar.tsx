import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {default as NavBarToolbar} from './NavBar/Toolbar'
import {default as NavBarToolbarMenu} from './NavBar/ToolbarMenu'
import {default as NavBarToolbarMobileMenu} from './NavBar/ToolbarMobileMenu'

import './styles/NavBar.scss';

function NavBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'dashboard-search-account-menu';
  const mobileMenuId = 'dashboard-search-account-menu-mobile';
  
  return (
    <div className='navbar-grow'>
      <AppBar position="static" elevation={8}>
        <Toolbar>
          <Typography className='navbar-title' variant="h6" noWrap>Sai Hemanth Bheemreddy</Typography>
          <div className='navbar-grow' />

          <NavBarToolbar 
            menuId={menuId}
            mobileMenuId={mobileMenuId}
            onMobileMenuOpen={handleMobileMenuOpen}
          />
        </Toolbar>
      </AppBar>

      <NavBarToolbarMobileMenu 
        anchorEl={mobileMoreAnchorEl} 
        id={mobileMenuId} 
        open={isMobileMenuOpen} 
        onClose={handleMobileMenuClose} 
      />

      <NavBarToolbarMenu 
        anchorEl={anchorEl} 
        id={menuId} 
        open={isMenuOpen} 
        onClose={handleMenuClose} 
      />      
    </div>
  );
}

export default NavBar;