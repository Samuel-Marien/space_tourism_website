import React from 'react'

import Box from '@mui/material/Box'

export const CapsuleImage = () => {
  return (
    <Box
      component="img"
      alt="The house from the offer."
      src="/images/image-space-capsule-portrait.jpg"
      sx={{
        width: '35rem',
        height: '35rem'
      }}
    />
  )
}

const Capsule = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '18rem',
        marginRight: '10rem'
      }}
    >
      <Box
        sx={{
          textTransform: 'uppercase',
          fontSize: '1.3rem',
          color: 'gray'
        }}
      >
        The terminology...
      </Box>
      <Box
        sx={{
          textTransform: 'uppercase',
          fontFamily: 'Cinzel',
          fontSize: '3.5rem',
          marginTop: '.5rem'
        }}
      >
        Space capsule
      </Box>
      <Box
        sx={{
          textAlign: 'justify',
          lineHeight: 1.5,
          fontSize: 'h5.fontSize',
          marginTop: '1rem'
        }}
      >
        A space capsule is an often-crewed spacecraft that uses a blunt-body
        reentry capsule to reenter the Earth's atmosphere without wings. Our
        capsule is where you'll spend your time during the flight. It includes a
        space gym, cinema, and plenty of other activities to keep you
        entertained.
      </Box>
    </Box>
  )
}

export default Capsule
