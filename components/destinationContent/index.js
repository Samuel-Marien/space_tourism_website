import React, { useState } from 'react'
import { styled } from '@mui/material/styles'

import Box from '@mui/material/Box'

import Moon, { MoonImage } from './Moon'
import Mars, { MarsImage } from './Mars'
import Europa, { EuropaImage } from './Europa'
import Titan, { TitanImage } from './Titan'

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
  const { title, onClick } = props

  return <MyDiv onClick={onClick}>{title}</MyDiv>
}

const ContentDisplayer = (props) => {
  const { destinationName } = props

  const mySwitcher = (destinationName) => {
    switch (destinationName) {
      case 'moon':
        return <Moon />
      case 'mars':
        return <Mars />
      case 'europa':
        return <Europa />
      case 'titan':
        return <Titan />
      default:
        console.log('problem with switch')
        break
    }
  }
  return <div>{mySwitcher(destinationName)}</div>
}

const ImageDisplayer = (props) => {
  const { destinationImage } = props

  const mySwitcher = (destinationImage) => {
    switch (destinationImage) {
      case 'moon':
        return <MoonImage />
      case 'mars':
        return <MarsImage />
      case 'europa':
        return <EuropaImage />
      case 'titan':
        return <TitanImage />
      default:
        console.log('problem with switch')
        break
    }
  }
  return <div>{mySwitcher(destinationImage)}</div>
}

const DestinationContent = () => {
  const [state, setState] = useState('moon')

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: { xs: '10rem', lg: '12rem' },
        width: '100%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          textTransform: 'uppercase',
          color: '#ffffff',
          marginBottom: '5rem',
          fontSize: { xs: '1.4rem', lg: '2rem' },
          letterSpacing: 5,
          pl: { xs: 5, lg: 25 }
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
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '0 5rem 0 5rem'
        }}
      >
        <ImageDisplayer destinationImage={state} />
        <Box
          sx={{
            color: '#ffffff',
            width: '30rem'
          }}
        >
          <Box
            sx={{
              textTransform: 'uppercase',
              display: 'flex',
              justifyContent: { xs: 'center', lg: 'start' },
              mt: { xs: '4rem', lg: 0 }
            }}
          >
            <MyButton title="Moon" onClick={() => setState('moon')} />
            <MyButton title="Mars" onClick={() => setState('mars')} />
            <MyButton title="Europa" onClick={() => setState('europa')} />
            <MyButton title="Titan" onClick={() => setState('titan')} />
          </Box>
          <ContentDisplayer destinationName={state} />
        </Box>
      </Box>
    </Box>
  )
}

export default DestinationContent
