import React from 'react'

import Box from '@mui/material/Box'

export const EuropaImage = () => {
  return (
    <Box
      component="img"
      alt="The house from the offer."
      src="/images/image-europa.png"
      sx={{
        width: { xs: '20rem', lg: '35rem' },
        height: { xs: '20rem', lg: '35rem' }
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
          fontSize: { xs: '5rem', lg: '6rem' },
          letterSpacing: 15,
          fontWeight: 'light',
          textAlign: { xs: 'center', lg: 'justify' }
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
          textAlign: { xs: 'center', lg: 'justify' }
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
            628 mil. km
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
            3 years
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Europa
