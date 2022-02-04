import React from 'react'

import Box from '@mui/material/Box'

export const MarsImage = () => {
  return (
    <Box
      component="img"
      alt="The house from the offer."
      src="/images/image-mars.png"
      sx={{
        width: '35rem',
        height: '35rem'
      }}
    />
  )
}

const Mars = () => {
  return (
    <div>
      <Box
        sx={{
          textTransform: 'uppercase',
          fontFamily: 'Cinzel',
          fontSize: '6rem',
          letterSpacing: 15,
          fontWeight: 'light'
        }}
      >
        Mars
      </Box>
      <Box
        sx={{
          fontSize: 'h6.fontSize',
          letterSpacing: 1,
          lineHeight: 2,
          width: '30rem',
          marginTop: '1rem',
          textAlign: 'justify'
        }}
      >
        Don’t forget to pack your hiking boots. You’ll need them to tackle
        Olympus Mons, the tallest planetary mountain in our solar system. It’s
        two and a half times the size of Everest!
      </Box>
      <Box
        sx={{
          display: 'block',
          borderBottom: '1px solid #6E719B',
          width: '100%',
          marginTop: '2rem'
        }}
      ></Box>
      <Box
        sx={{
          display: 'flex',
          marginTop: '2rem'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', mr: 5 }}>
          <Box sx={{ textTransform: 'uppercase' }}>Avg. distance</Box>
          <Box
            sx={{
              fontFamily: 'Cinzel',
              fontSize: '2rem',
              marginTop: '1rem'
            }}
          >
            225 mil. km
          </Box>
        </Box>
        <Box>
          <Box sx={{ textTransform: 'uppercase' }}>Est. travel time</Box>
          <Box
            sx={{
              fontFamily: 'Cinzel',
              fontSize: '2rem',
              marginTop: '1rem'
            }}
          >
            9 months
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Mars
