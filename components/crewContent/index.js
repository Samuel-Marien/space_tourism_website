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
      <Box
        sx={{
          width: { xs: '.8rem', lg: '1rem' },
          height: { xs: '.8rem', lg: '1rem' }
        }}
      ></Box>
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
        flexDirection: { xs: 'column', lg: 'row' },
        position: 'absolute',
        top: { xs: '10rem', lg: '12rem' },
        width: '100%'
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            textTransform: 'uppercase',
            color: '#ffffff',
            marginBottom: { xs: '3rem', lg: '5rem' },
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
            02
          </Box>
          meet your crew
        </Box>
        <Box
          sx={{
            pl: { xs: 0, lg: 25 }
          }}
        >
          <ContentDisplayer crewMember={state} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', lg: 'start' },
            pl: { xs: 5, lg: 25 },
            mt: { xs: '2rem', lg: '7rem' }
          }}
        >
          <MyButton onClick={() => setState('commander')} />
          <MyButton onClick={() => setState('specialist')} />
          <MyButton onClick={() => setState('pilot')} />
          <MyButton onClick={() => setState('engineer')} />
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: { xs: 'center', lg: 'justify' }
        }}
      >
        <ImageDisplayer crewImage={state} />
      </Box>
    </Box>
  )
}

export default CrewContent
