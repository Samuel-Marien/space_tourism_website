import React from 'react'

import Box from '@mui/material/Box'

export const SpecialistImage = () => {
  return (
    <Box
      component="img"
      alt="The house from the offer."
      src="/images/image-mark-shuttleworth.png"
      sx={{
        width: { xs: '50%', lg: '90%' },
        ml: { xs: 0, lg: 20 },
        mt: { xs: 6, lg: 0 }
      }}
    />
  )
}

const Specialist = () => {
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
          width: { xs: '40rem', lg: '31rem' },
          marginTop: '1rem',
          textAlign: { xs: 'center', lg: 'justify' },
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
