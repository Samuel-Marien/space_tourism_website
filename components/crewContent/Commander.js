import React from 'react'

import Box from '@mui/material/Box'

export const CommanderImage = () => {
  return (
    <Box
      component="img"
      alt="The house from the offer."
      src="/images/image-douglas-hurley.png"
      sx={{
        width: { xs: '60%', lg: '90%' },
        ml: { xs: 0, lg: 20 },
        mt: { xs: 5, lg: 0 }
      }}
    />
  )
}

const Commander = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', lg: 'start' },
        mt: { xs: 0, lg: 20 }
      }}
    >
      <Box
        sx={{
          textTransform: 'uppercase',
          fontFamily: 'Cinzel',
          fontSize: '2rem',
          color: 'gray'
        }}
      >
        Commander
      </Box>
      <Box
        sx={{
          textTransform: 'uppercase',
          fontFamily: 'Cinzel',
          fontSize: '3.5rem',
          color: '#ffffff',
          mt: 1
        }}
      >
        Douglas Hurley
      </Box>
      <Box
        sx={{
          width: { xs: '40rem', lg: '31rem' },
          marginTop: '1rem',
          textAlign: { xs: 'center', lg: 'justify' },
          color: '#ffffff',
          lineHeight: 1.5,
          fontSize: 'h5.fontSize'
        }}
      >
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
        and former NASA astronaut. He launched into space for the third time as
        commander of Crew Dragon Demo-2.
      </Box>
    </Box>
  )
}

export default Commander
