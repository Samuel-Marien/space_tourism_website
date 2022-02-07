import React, { useState } from 'react'
import { styled } from '@mui/material/styles'

import Box from '@mui/material/Box'

import Commander, { CommanderImage } from './Commander'
import Specialist, { SpecialistImage } from './Specialist'
import Pilot, { PilotImage } from './Pilot'
import Engineer, { EngineerImage } from './Engineer'

const MyDiv = styled('div')`
    cursor: pointer;
    margin-right: 2rem;
    margin-top: 7rem;
    background-color: gray;
    border-radius:2rem;

    :hover {
      transition: all .3s ease-out;
      background-color:  #ffffff;
       box-shadow: 0 0 5px 3px rgba(255,255,255, 3); 
    }
    :active {
      color: #ffffff;
      background-color: gray;
      box-shadow: none; 
  `

const MyButton = (props) => {
  const { onClick } = props

  return (
    <MyDiv onClick={onClick}>
      <Box sx={{ width: '1.2rem', height: '1.2rem' }}></Box>
    </MyDiv>
  )
}

const ContentDisplayer = (props) => {
  const { crewMember } = props

  const mySwitcher = (crewMember) => {
    switch (crewMember) {
      case 'commander':
        return <Commander />
      case 'specialist':
        return <Specialist />
      case 'pilot':
        return <Pilot />
      case 'engineer':
        return <Engineer />
      default:
        console.log('problem with ContentDisplayer switch')
        break
    }
  }
  return <div>{mySwitcher(crewMember)}</div>
}

const ImageDisplayer = (props) => {
  const { crewImage } = props

  const mySwitcher = (crewImage) => {
    switch (crewImage) {
      case 'commander':
        return <CommanderImage />
        break
      case 'specialist':
        return <SpecialistImage />
        break
      case 'pilot':
        return <PilotImage />
        break
      case 'engineer':
        return <EngineerImage />
        break
      default:
        console.log('problem with ImageDisplayer switch')
        break
    }
  }
  return <div>{mySwitcher(crewImage)}</div>
}

const CrewContent = () => {
  const [state, setState] = useState('commander')

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'absolute',
        top: '12rem',
        width: '100%',
        pl: 25
      }}
    >
      <Box>
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
            02
          </Box>
          meet your crew
        </Box>
        <Box>
          <ContentDisplayer crewMember={state} />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <MyButton onClick={() => setState('commander')} />
          <MyButton onClick={() => setState('specialist')} />
          <MyButton onClick={() => setState('pilot')} />
          <MyButton onClick={() => setState('engineer')} />
        </Box>
      </Box>
      <Box
        sx={{
          ml: 15,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end'
        }}
      >
        <ImageDisplayer crewImage={state} />
      </Box>
    </Box>
  )
}

export default CrewContent
