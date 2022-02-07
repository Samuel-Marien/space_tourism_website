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
    <Box>
      <Box>The terminology...</Box>
      <Box>Launch vehicle</Box>
      <Box>
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
