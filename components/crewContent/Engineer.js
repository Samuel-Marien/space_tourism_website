import React from 'react'

import Box from '@mui/material/Box'

export const EngineerImage = () => {
  return (
    <Box
      component="img"
      alt="The house from the offer."
      src="/images/image-anousheh-ansari.png"
      sx={{
        width: { xs: '70%', lg: '100%' },
        ml: { xs: 0, lg: 20 },
        mt: { xs: 7, lg: 5 }
      }}
    />
  )
}

const Engineer = () => {
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
        Flight Engineer
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
        Anousheh Ansari
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
        Anousheh Ansari is an Iranian American engineer and co-founder of Prodea
        Systems. Ansari was the fourth self-funded space tourist, the first
        self-funded woman to fly to the ISS, and the first Iranian in space.
      </Box>
    </Box>
  )
}

export default Engineer
