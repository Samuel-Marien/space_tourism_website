import React from 'react'

import Box from '@mui/material/Box'

const desktopBg = `/images/image-launch-vehicle-portrait.jpg`
const tabletBg = `/images/image-launch-vehicle-landscape.jpg`

export const LauchImage = () => {
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

const Lauch = () => {
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
        Launch vehicle
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
