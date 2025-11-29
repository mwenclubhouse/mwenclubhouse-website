import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Box, List, ListItem, ListItemButton, ListItemText, Container } from '@mui/material'
import Header from '../components/header'

const Home: NextPage = () => {
  const fakeGames = [
    { id: 1, title: 'chess', description: 'Coming Soon', href: '/chess' },
    { id: 2, title: 'search', description: 'Coming Soon', href: '/search' },
    { id: 3, title: 'database', description: 'Coming Soon', href: '/database' },
  ]

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Head>
        <title>MWENCLUBHOUSE</title>
        <meta name="description" content="
          The MWENCLUBHOUSE are services organized by
          Matthew Wen. Check us out to try some of our
          upcoming Projects
        " />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <Box sx={{ flex: 1, overflow: 'auto' }}>
        <Container maxWidth={false} sx={{ maxWidth: 1080, py: 2 }}>
          <List>
            {fakeGames.map((game, index) => (
              <ListItem
                key={game.id}
                disablePadding
                divider={index < fakeGames.length - 1}
              >
                <Link href={game.href} passHref style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                  <ListItemButton>
                    <ListItemText
                      primary={game.title}
                      secondary={game.description}
                      primaryTypographyProps={{
                        variant: 'h6',
                        fontWeight: 600,
                      }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>
    </Box>
  )
}

export default Home
