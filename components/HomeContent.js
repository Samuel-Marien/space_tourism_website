import React from 'react'

import Box from '@mui/material/Box'

const HomeContent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end',
        position: 'absolute',
        top: '25rem',
        width: '100%',
        pl: 15
      }}
    >
      <Box
        sx={{
          color: '#ffffff',
          padding: '0 0 0 10rem'
        }}
      >
        <Box
          sx={{
            textTransform: 'uppercase',

            fontSize: 'h4.fontSize',
            letterSpacing: 5,
            fontWeight: 'light'
          }}
        >
          So, you want to travel to
        </Box>
        <Box
          sx={{
            textTransform: 'uppercase',
            fontFamily: 'Cinzel',
            fontSize: '8rem',
            letterSpacing: 15,
            fontWeight: 'light',
            marginTop: '2rem'
          }}
        >
          Space
        </Box>
        <Box
          sx={{
            fontSize: 'h6.fontSize',
            letterSpacing: 1,
            lineHeight: 2,
            width: '30rem',
            marginTop: '2rem'
          }}
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textTransform: 'uppercase',
          backgroundColor: '#ffffff',
          fontFamily: 'Cinzel',
          fontSize: '2rem',
          fontWeight: 'medium',
          width: '20rem',
          height: '20rem',
          padding: '5rem',
          borderRadius: '10rem',
          marginRight: '12rem',
          textAlign: 'left',
          cursor: 'pointer'
        }}
      >
        explore
      </Box>
    </Box>
  )
}

export default HomeContent
