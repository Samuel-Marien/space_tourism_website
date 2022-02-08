import React from 'react'

import Box from '@mui/material/Box'

const desktopBg = `/images/image-space-capsule-portrait.jpg`
const tabletBg = `/images/image-space-capsule-landscape.jpg`

export const CapsuleImage = () => {
  return (
    <div>
      <Box
        component="img"
        alt="The house from the offer."
        src={tabletBg}
        sx={{
          width: '100%',
          height: 'auto',
          display: { xs: 'block', lg: 'none' }
        }}
      />
      <Box
        component="img"
        alt="The house from the offer."
        src={desktopBg}
        sx={{
          display: { xs: 'none', lg: 'block' },
          width: '35rem',
          height: '35rem'
        }}
      />
    </div>
  )
}

const Capsule = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', lg: 'start' },
        justifyContent: { xs: 'center', lg: 'start' },
        height: '18rem',
        mr: { xs: 0, lg: '10rem' }
      }}
    >
      <Box
        sx={{
          textTransform: 'uppercase',
          fontSize: { xs: '1.1rem', lg: '1.3rem' },
          color: 'gray',
          mt: { xs: 8, lg: 0 }
        }}
      >
        The terminology...
      </Box>
      <Box
        sx={{
          textTransform: 'uppercase',
          fontFamily: 'Cinzel',
          fontSize: { xs: '2.5rem', lg: '3.5rem' },
          mt: { xs: 3, lg: '.5rem' }
        }}
      >
        Space capsule
      </Box>
      <Box
        sx={{
          textAlign: { xs: 'center', lg: 'justify' },
          lineHeight: 1.5,
          fontSize: 'h5.fontSize',
          marginTop: '1rem',
          width: { xs: '35rem', lg: 'auto' },
          color: 'gray'
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
