import React from 'react'

import Box from '@mui/material/Box'

export const SpaceportImage = () => {
  return (
    <Box
      component="img"
      alt="The house from the offer."
      src="/images/image-spaceport-portrait.jpg"
      sx={{
        width: '35rem',
        height: '35rem'
      }}
    />
  )
}

const Spaceport = () => {
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
        Spaceport
      </Box>
      <Box
        sx={{
          textAlign: 'justify',
          lineHeight: 1.5,
          fontSize: 'h5.fontSize',
          marginTop: '1rem'
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
