import React from 'react'
import { styled } from '@mui/material/styles'

import Box from '@mui/material/Box'

const MyDiv = styled('div')`
    cursor: pointer;
    font-size: 1.3rem;
    padding: 1rem 0 1rem 0;
    margin-right: 2rem;

    color: #ffffff;
    :hover {
      transition: all .3s ease-out;
      color: gray;
      
      box-shadow: 0px -3px 0px gray inset;
    }
    :active {
      color: #ffffff;
        box-shadow: 0px -3px 0px #AEAFBB inset;
  `

const MyButton = (props) => {
  const { title } = props
  return <MyDiv>{title}</MyDiv>
}

const DestinationContent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '12rem',
        width: '100%',
        pl: 25
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
          display: 'flex',
          justifyContent: 'space-around',
          padding: '0 5rem 0 5rem'
        }}
      >
        <Box
          component="img"
          alt="The house from the offer."
          src="/images/image-moon.png"
          sx={{
            width: '35%',
            height: '35%'
          }}
        />
        <Box
          sx={{
            color: '#ffffff',
            width: '30rem'
          }}
        >
          <Box sx={{ textTransform: 'uppercase', display: 'flex' }}>
            <MyButton title="Moon" />
            <MyButton title="Mars" />
            <MyButton title="Europa" />
            <MyButton title="Titan" />
          </Box>
          <Box
            sx={{
              textTransform: 'uppercase',
              fontFamily: 'Cinzel',
              fontSize: '6rem',
              letterSpacing: 15,
              fontWeight: 'light'
            }}
          >
            Moon
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
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
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
                384,400 km
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
                3 days
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default DestinationContent
