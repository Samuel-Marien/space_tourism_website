import React from 'react'

import Box from '@mui/material/Box'

const desktopBg = `/images/image-spaceport-portrait.jpg`
const tabletBg = `/images/image-spaceport-landscape.jpg`

export const SpaceportImage = () => {
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

const Spaceport = () => {
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
        Spaceport
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
        A spaceport or cosmodrome is a site for launching (or receiving)
        spacecraft, by analogy to the seaport for ships or airport for aircraft.
        Based in the famous Cape Canaveral, our spaceport is ideally situated to
        take advantage of the Earth’s rotation for launch. pad!
      </Box>
    </Box>
  )
}

export default Spaceport
