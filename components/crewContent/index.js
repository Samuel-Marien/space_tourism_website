import React, { useState } from 'react'
import { styled } from '@mui/material/styles'

import Box from '@mui/material/Box'

import Commander, { CommanderImage } from './Commander'

const MyDiv = styled('div')`
    cursor: pointer;
    margin-right: 2rem;
    margin-top: 7rem;
    background-color: gray;
    border-radius:2rem;

    :hover {
      transition: all .3s ease-out;
      background-color:  #ffffff;
    }
    :active {
      color: #ffffff;
      background-color: gray;
  `

const MyButton = (props) => {
  const { onClick } = props

  return (
    <MyDiv onClick={onClick}>
      <Box sx={{ width: '1.2rem', height: '1.2rem' }}></Box>
    </MyDiv>
  )
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
        pl: 35
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
          <Commander />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <MyButton onClick={() => setState('commander')} />
          <MyButton onClick={() => setState('specialist')} />
          <MyButton onClick={() => setState('pilot')} />
          <MyButton onClick={() => setState('engineer')} />
        </Box>
      </Box>
      <Box sx={{ ml: 20 }}>
        <CommanderImage />
      </Box>
    </Box>
  )
}

export default CrewContent
