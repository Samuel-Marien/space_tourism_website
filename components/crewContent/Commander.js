import React from 'react'

import Box from '@mui/material/Box'

export const CommanderImage = () => {
  return (
    <Box
      component="img"
      alt="The house from the offer."
      src="/images/image-douglas-hurley.png"
      sx={{ width: '110%' }}
    />
  )
}

const Commander = () => {
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
          width: '30rem',
          marginTop: '1rem',
          textAlign: 'justify',
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
