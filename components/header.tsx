import Link from 'next/link'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ maxWidth: 1080, width: '100%', margin: '0 auto', textAlign: 'center' }}>
          <Link href="/" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 700,
                letterSpacing: '0.1em',
                cursor: 'pointer',
              }}
            >
              mwenclubhouse
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
