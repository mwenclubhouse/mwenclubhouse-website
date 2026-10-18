import { Box, Card, Typography } from '@mui/material';
import type { Destination } from '@/lib/destinations';

type LinkCardProps = {
  destination: Destination;
};

export default function LinkCard({ destination }: LinkCardProps) {
  return (
    <Card
      component="a"
      href={destination.href}
      variant="outlined"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        minWidth: 0,
        p: { xs: 2.5, sm: 3.5 },
        borderRadius: 3,
        color: 'text.primary',
        textDecoration: 'none',
        backgroundImage: 'none',
        '&:hover': { borderColor: 'primary.light', bgcolor: 'action.hover' },
        '&:focus-visible': { outline: '3px solid', outlineColor: 'primary.light', outlineOffset: 4 },
      }}
    >
      <Box component="span" aria-hidden="true" sx={{ fontSize: 32, flexShrink: 0 }}>
        {destination.emoji}
      </Box>
      <Box sx={{ minWidth: 0, flex: 1 }}>
        <Typography component="h2" variant="h6" sx={{ fontSize: '1rem', fontWeight: 600 }}>
          {destination.label}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ overflowWrap: 'anywhere', mt: 0.5 }}>
          {destination.href.replace('https://', '')}
        </Typography>
      </Box>
      <Box component="span" aria-hidden="true" sx={{ color: 'text.secondary' }}>↗</Box>
    </Card>
  );
}
