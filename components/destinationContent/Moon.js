import React from 'react'

import Box from '@mui/material/Box'

export const MoonImage = () => {
  return (
    <Box
      component="img"
      alt="The house from the offer."
      src="/images/image-moon.png"
      sx={{
        width: '35rem',
        height: '35rem'
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
          fontSize: '6rem',
          letterSpacing: 15,
          fontWeight: 'light'
        }}
      >
        Moon
      </Box>
      <Box
        sx={{
          fontSize: 'h6.fontSize',
          letterSpacing: 1,
          lineHeight: 2,
          width: '30rem',
          marginTop: '1rem',
          textAlign: 'justify'
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
          marginTop: '2rem'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', mr: 5 }}>
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
          <Box sx={{ textTransform: 'uppercase' }}>Est. travel time</Box>
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
