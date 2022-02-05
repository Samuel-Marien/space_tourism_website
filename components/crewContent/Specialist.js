import React from 'react'

import Box from '@mui/material/Box'

export const SpecialistImage = () => {
  return (
    <Box
      component="img"
      alt="The house from the offer."
      src="/images/image-mark-shuttleworth.png"
      sx={{ width: '120%' }}
    />
  )
}

const Specialist = () => {
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
        Mission Specialist
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
        Mark Shuttleworth
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
        Mark Richard Shuttleworth is the founder and CEO of Canonical, the
        company behind the Linux-based Ubuntu operating system. Shuttleworth
        became the first South African to travel to space as a space tourist.
      </Box>
    </Box>
  )
}

export default Specialist
