import React from 'react'

import Box from '@mui/material/Box'

export const TitanImage = () => {
  return (
    <Box
      component="img"
      alt="The house from the offer."
      src="/images/image-titan.png"
      sx={{
        width: '35rem',
        height: '35rem'
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
          fontSize: '6rem',
          letterSpacing: 15,
          fontWeight: 'light'
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
          textAlign: 'justify'
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
            1.6 bil. km
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
            7 years
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Titan
