import React from 'react'

import Box from '@mui/material/Box'

export const TitanImage = () => {
  return (
    <Box
      component="img"
      alt="The house from the offer."
      src="/images/image-titan.png"
      sx={{
        width: { xs: '20rem', lg: '35rem' },
        height: { xs: '20rem', lg: '35rem' }
      }}
    />
  )
}

const Titan = () => {
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
        Titan
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
        The only moon known to have a dense atmosphere other than Earth, Titan
        is a home away from home (just a few hundred degrees colder!). As a
        bonus, you get striking views of the Rings of Saturn.
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
            1.6 bil. km
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
            7 years
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Titan
