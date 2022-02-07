import React from 'react'

import Box from '@mui/material/Box'

export const EngineerImage = () => {
  return (
    <Box
      component="img"
      alt="The house from the offer."
      src="/images/image-anousheh-ansari.png"
      sx={{ width: '120%' }}
    />
  )
}

const Engineer = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mt: 20 }}>
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
          width: '33rem',
          marginTop: '1rem',
          textAlign: 'justify',
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
