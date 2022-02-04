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
        break
      case 'mars':
        return <Mars />
        break
      case 'europa':
        return <Europa />
        break
      case 'titan':
        return <Titan />
        break
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
        break
      case 'mars':
        return <MarsImage />
        break
      case 'europa':
        return <EuropaImage />
        break
      case 'titan':
        return <TitanImage />
        break
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
        top: '12rem',
        width: '100%',
        pl: 35
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
        <ImageDisplayer destinationImage={state} />
        <Box
          sx={{
            color: '#ffffff',
            width: '30rem'
          }}
        >
          <Box sx={{ textTransform: 'uppercase', display: 'flex' }}>
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
