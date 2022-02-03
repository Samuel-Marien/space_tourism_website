import React from 'react'

import Box from '@mui/material/Box'

const MoonContent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '15rem',
        width: '100%',
        pl: 15
      }}
    >
      <Box
        sx={{
          display: 'flex',
          textTransform: 'uppercase',
          color: '#ffffff',
          marginBottom: '5rem',
          fontSize: '2rem',
          letterSpacing: 5
        }}
      >
        <Box
          sx={{
            color: 'gray',
            marginRight: '1rem',
            fontWeight: 'bolder'
          }}
        >
          01
        </Box>
        pick your destination
      </Box>
      <Box
        sx={{
          display: 'flex'
        }}
      >
        <Box
          component="img"
          alt="The house from the offer."
          src="/images/image-moon.png"
        />
        <Box
          sx={{
            color: '#ffffff'
          }}
        >
          ici le contenu
        </Box>
      </Box>
    </Box>
  )
}

export default MoonContent
