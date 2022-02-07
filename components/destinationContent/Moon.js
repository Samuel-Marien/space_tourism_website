import React from 'react'

import Box from '@mui/material/Box'

export const MoonImage = () => {
  return (
    <Box
      component="img"
      alt="The house from the offer."
      src="/images/image-moon.png"
      sx={{
        width: { xs: '20rem', lg: '35rem' },
        height: { xs: '20rem', lg: '35rem' }
      }}
    />
  )
}

const Moon = () => {
  return (
    <div>
      <Box
        sx={{
          textTransform: 'uppercase',
          fontFamily: 'Cinzel',
          fontSize: { xs: '5rem', lg: '6rem' },
          letterSpacing: 15,
          fontWeight: 'light',
          textAlign: { xs: 'center', lg: 'justify' }
        }}
      >
        Moon
      </Box>
      <Box
        sx={{
          fontSize: 'h6.fontSize',
          letterSpacing: 1,
          lineHeight: 2,

          marginTop: '1rem',
          textAlign: { xs: 'center', lg: 'justify' }
        }}
      >
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </Box>
      <Box
        sx={{
          display: 'block',
          borderBottom: '1px solid #6E719B',
          width: '100%',
          marginTop: '2rem'
        }}
      ></Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', lg: 'start' },
          marginTop: '2rem'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', lg: 'start' },
            mr: { xs: 15, lg: 5 }
          }}
        >
          <Box sx={{ textTransform: 'uppercase' }}>Avg. distance</Box>
          <Box
            sx={{
              fontFamily: 'Cinzel',
              fontSize: '2rem',
              marginTop: '1rem'
            }}
          >
            384,400 km
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              textTransform: 'uppercase',
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', lg: 'start' }
            }}
          >
            Est. travel time
          </Box>
          <Box
            sx={{
              fontFamily: 'Cinzel',
              fontSize: '2rem',
              marginTop: '1rem'
            }}
          >
            3 days
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Moon
