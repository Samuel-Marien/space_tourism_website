import React from 'react'

import Box from '@mui/material/Box'

export const LauchImage = () => {
  return (
    <Box
      component="img"
      alt="The house from the offer."
      src="/images/image-launch-vehicle-portrait.jpg"
      sx={{
        width: '35rem',
        height: '35rem'
      }}
    />
  )
}

const Lauch = () => {
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
        Launch vehicle
      </Box>
      <Box
        sx={{
          textAlign: 'justify',
          lineHeight: 1.5,
          fontSize: 'h5.fontSize',
          marginTop: '1rem'
        }}
      >
        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
        carry a payload from Earth's surface to space, usually to Earth orbit or
        beyond. Our WEB-X carrier rocket is the most powerful in operation.
        Standing 150 metres tall, it's quite an awe-inspiring sight on the
        launch pad!
      </Box>
    </Box>
  )
}

export default Lauch
