import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Typography, Container } from '@mui/material'
import Header from '../components/header'

const Chess: NextPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Head>
        <title>Chess - MWENCLUBHOUSE</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <Box sx={{ flex: 1, overflow: 'auto' }}>
        <Container maxWidth={false} sx={{ maxWidth: 1080, py: 4 }}>
          <Typography variant="h4">Chess</Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default Chess
