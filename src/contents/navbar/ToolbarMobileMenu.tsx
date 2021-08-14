import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Section } from 'apps/types';

type ToolbarMobileMenuProps = {
  id: string;
  anchorEl: null | Element | ((element: Element) => Element);
  open: boolean;
  onClose: () => void;
  sections: Array<Section>;
}

function ToolbarMobileMenu({ id, anchorEl, open, onClose, sections }: ToolbarMobileMenuProps) {
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
      {sections.map((section) =>
        <MenuItem key={section.id}>{section.name}</MenuItem>
      )}
    </Menu>
  );
}

export default ToolbarMobileMenu;
