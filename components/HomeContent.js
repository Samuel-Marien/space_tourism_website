import React from 'react'

import Link from 'next/link'

import Box from '@mui/material/Box'

const HomeContent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'center', lg: 'end' },
        position: 'absolute',
        top: { xs: '10rem', lg: '25rem' },
        width: '100%',
        pl: { xs: 0, lg: 15 },
        textAlign: 'center'
      }}
    >
      <Box
        sx={{
          color: '#ffffff',
          padding: { xs: 0, lg: '0 0 0 10rem' }
        }}
      >
        <Box
          sx={{
            textTransform: 'uppercase',
            fontSize: { sx: 'h5.fontSize', lg: 'h4.fontSize' },
            letterSpacing: { xs: 3, lg: 5 },
            fontWeight: 'light'
          }}
        >
          So, you want to travel to
        </Box>
        <Box
          sx={{
            textTransform: 'uppercase',
            fontFamily: 'Cinzel',
            fontSize: { xs: '12rem', lg: '8rem' },
            letterSpacing: { xs: 5, lg: 15 },
            fontWeight: 'light',
            marginTop: { xs: '.5rem', lg: '2rem' }
          }}
        >
          Space
        </Box>
        <Box
          sx={{
            fontSize: 'h6.fontSize',
            letterSpacing: 1,
            lineHeight: 2,
            width: { xs: '40rem', lg: '30rem' },
            marginTop: '2rem'
          }}
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Box>
      </Box>
      <Link href="/destination">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            textTransform: 'uppercase',
            backgroundColor: '#ffffff',
            fontFamily: 'Cinzel',
            fontSize: '2rem',
            fontWeight: 'medium',
            width: '20rem',
            height: '20rem',
            padding: '5rem',
            borderRadius: '10rem',
            marginRight: { xs: '0', lg: '12rem' },
            marginTop: { xs: '10rem', lg: 0 },
            textAlign: 'left',
            cursor: 'pointer',
            boxShadow: 3
          }}
        >
          explore
        </Box>
      </Link>
    </Box>
  )
}

export default HomeContent
