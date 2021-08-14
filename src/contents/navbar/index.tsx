import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { default as NavBarToolbar } from './Toolbar'
import { default as NavBarToolbarMenu } from './ToolbarMenu'
import { default as NavBarToolbarMobileMenu } from './ToolbarMobileMenu'

import { Section } from 'apps/types';

import 'styles/navbar/index.scss';

type NavBarProps = {
  sections: Array<Section>;
}

function NavBar({ sections }: NavBarProps) {
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
    <>
      <AppBar position="fixed" elevation={8} className="navbar">
        <Toolbar>
          <Typography className='navbar-title' variant="h6" noWrap>Sai Hemanth Bheemreddy</Typography>
          <div className='navbar-grow' />

          <NavBarToolbar
            menuId={menuId}
            mobileMenuId={mobileMenuId}
            onMobileMenuOpen={handleMobileMenuOpen}
            sections={sections}
          />
        </Toolbar>
      </AppBar>

      <NavBarToolbarMobileMenu
        anchorEl={mobileMoreAnchorEl}
        id={mobileMenuId}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        sections={sections}
      />

      <NavBarToolbarMenu
        anchorEl={anchorEl}
        id={menuId}
        open={isMenuOpen}
        onClose={handleMenuClose}
        sections={sections}
      />
    </>
  );
}

export default NavBar;
