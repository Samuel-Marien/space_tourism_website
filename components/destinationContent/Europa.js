import React from 'react'

import Box from '@mui/material/Box'

export const EuropaImage = () => {
  return (
    <Box
      component="img"
      alt="The house from the offer."
      src="/images/image-europa.png"
      sx={{
        width: '35rem',
        height: '35rem'
      }}
    />
  )
}

const Europa = () => {
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
        Europa
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
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a
        winter lover’s dream. With an icy surface, it’s perfect for a bit of ice
        skating, curling, hockey, or simple relaxation in your snug wintery
        cabin.
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
            628 mil. km
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
            3 years
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Europa
