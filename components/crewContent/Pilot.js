import React from 'react'

import Box from '@mui/material/Box'

export const PilotImage = () => {
  return (
    <Box
      component="img"
      alt="The house from the offer."
      src="/images/image-victor-glover.png"
      sx={{
        width: { xs: '64%', lg: '90%' },
        ml: { xs: 0, lg: 20 },
        mt: { xs: 5, lg: 4 }
      }}
    />
  )
}

const Pilot = () => {
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
        Pilot
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
        Victor Glover
      </Box>
      <Box
        sx={{
          width: { xs: '45rem', lg: '35rem' },
          marginTop: '1rem',
          textAlign: { xs: 'center', lg: 'justify' },
          color: '#ffffff',
          lineHeight: 1.5,
          fontSize: 'h5.fontSize'
        }}
      >
        Pilot on the first operational flight of the SpaceX Crew Dragon to the
        International Space Station. Glover is a commander in the U.S. Navy
        where he pilots an F/A-18.He was a crew member of Expedition 64, and
        served as a station systems flight engineer.
      </Box>
    </Box>
  )
}

export default Pilot
