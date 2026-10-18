import { useState } from 'react';
import { Box, IconButton, Link, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { destinations } from '@/lib/destinations';

export default function Navbar() {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const menuOpen = Boolean(menuAnchor);

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
        '& a:focus-visible': {
          outline: '3px solid',
          outlineColor: 'primary.light',
          outlineOffset: 2,
        },
      }}
    >
      <Box sx={{ maxWidth: 1080, mx: 'auto', px: { xs: 2, sm: 3 }, py: 1.5, display: 'flex', alignItems: 'center', flexWrap: 'wrap', columnGap: 4, rowGap: 1 }}>
        <Link
          href="/"
          color="inherit"
          underline="none"
          sx={{ display: 'inline-flex', alignItems: 'center', minHeight: 44, fontWeight: 700, letterSpacing: '0.06em', mr: 'auto' }}
        >
          MWENCLUBHOUSE
        </Link>
        <IconButton
          aria-label="Open navigation menu"
          aria-controls={menuOpen ? 'mobile-navigation' : undefined}
          aria-haspopup="menu"
          aria-expanded={menuOpen}
          onClick={(event) => setMenuAnchor(event.currentTarget)}
          sx={{ display: { xs: 'inline-flex', md: 'none' }, width: 44, height: 44 }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="mobile-navigation"
          anchorEl={menuAnchor}
          open={menuOpen}
          onClose={() => setMenuAnchor(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          slotProps={{ list: { 'aria-label': 'Destinations' } }}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {destinations.map((destination) => (
            <MenuItem
              key={destination.id}
              component="a"
              href={destination.href}
              onClick={() => setMenuAnchor(null)}
              sx={{ gap: 1.5, minHeight: 44, minWidth: 200 }}
            >
              <span aria-hidden="true">{destination.emoji}</span>
              {destination.label}
            </MenuItem>
          ))}
        </Menu>
        <Box component="nav" aria-label="Destinations" sx={{ display: { xs: 'none', md: 'flex' }, flexWrap: 'wrap', gap: 0.5 }}>
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={destination.href}
              color="text.secondary"
              underline="none"
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, minHeight: 44, px: 1.25, borderRadius: 1, fontSize: 14, '&:hover': { color: 'text.primary', bgcolor: 'action.hover' } }}
            >
              <span aria-hidden="true">{destination.emoji}</span>
              {destination.label}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
