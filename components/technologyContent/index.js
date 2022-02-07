import React, { useState } from 'react'
import { styled } from '@mui/material/styles'

import Box from '@mui/material/Box'

import Lauch, { LauchImage } from './Lauch'
import Spaceport, { SpaceportImage } from './Spaceport'
import Capsule, { CapsuleImage } from './Capsule'

const MyDiv = styled('div')`
    cursor: pointer;
    font-size: 1.6rem;
    width:5rem;
    height:5rem;
    border: 1px solid gray;
    color: #ffffff;
    border-radius: 2.5rem;
    display:flex;
    flex-direction:column;
    align-items: center;
    padding-top:1.5rem;
    font-family: 'Cinzel';
    margin-right:5rem;

    :hover {
      transition: all .3s ease-out;
      color: black;
      background-color:#ffffff;
    }
    :active {
      color: #ffffff;
      background-color: transparent;
  `

const MyButton = (props) => {
  const { title, onClick } = props

  return <MyDiv onClick={onClick}>{title}</MyDiv>
}

const ContentDisplayer = (props) => {
  const { typeOfTechno } = props

  const mySwitcher = (typeOfTechno) => {
    switch (typeOfTechno) {
      case '1':
        return <Lauch />
      case '2':
        return <Spaceport />
      case '3':
        return <Capsule />

      default:
        console.log('problem with switch')
        break
    }
  }
  return <div>{mySwitcher(typeOfTechno)}</div>
}

const ImageDisplayer = (props) => {
  const { technoImage } = props

  const mySwitcher = (technoImage) => {
    switch (technoImage) {
      case '1':
        return <LauchImage />
        break
      case '2':
        return <SpaceportImage />
        break
      case '3':
        return <CapsuleImage />
        break

      default:
        console.log('problem with switch')
        break
    }
  }
  return <div>{mySwitcher(technoImage)}</div>
}

const TechnologyContent = () => {
  const [state, setState] = useState('1')

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '12rem',
        width: '100%',
        color: '#ffffff',
        pl: 25
      }}
    >
      <Box
        sx={{
          display: 'flex',
          textTransform: 'uppercase',
          marginBottom: '2rem',
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
          03
        </Box>
        space launch 101
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'space-between' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'space-between',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '18rem'
            }}
          >
            <MyButton title="1" onClick={() => setState('1')} />
            <MyButton title="2" onClick={() => setState('2')} />
            <MyButton title="3" onClick={() => setState('3')} />
          </Box>
          <Box>
            <ContentDisplayer typeOfTechno={state} />
          </Box>
        </Box>
        <Box>
          <ImageDisplayer technoImage={state} />
        </Box>
      </Box>
    </Box>
  )
}

export default TechnologyContent
