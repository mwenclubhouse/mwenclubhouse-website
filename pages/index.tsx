import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Link, Typography } from '@mui/material'
import LinkCard from '@/components/link-card'
import { destinations } from '@/lib/destinations'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MWENCLUBHOUSE</title>
        <meta name="description" content="Matthew Wen's corner of the internet. Find my personal site, metrics, Excalidraw, and docs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box component="main" sx={{ px: { xs: 2, sm: 3 }, py: { xs: 5, sm: 9 } }}>
        <Link
          href="https://www.instagram.com/mwenclubhouse/"
          variant="overline"
          color="primary.light"
          underline="hover"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            minHeight: 44,
            letterSpacing: '0.15em',
            '&:focus-visible': { outline: '3px solid', outlineColor: 'primary.light', outlineOffset: 4 },
          }}
        >
          @mwenclubhouse
        </Link>
        <Typography component="h1" variant="h3" sx={{ mt: 1, fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 700, letterSpacing: '-0.03em' }}>
          A few places to find me.
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 2, mb: { xs: 4, sm: 5 }, fontSize: '0.95rem' }}>
          My personal site, tools, and docs. All in one place.
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))' }, gap: 2 }}>
          {destinations.map((destination) => (
            <LinkCard key={destination.id} destination={destination} />
          ))}
        </Box>
      </Box>
    </div>
  )
}

export default Home
