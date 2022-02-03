import React from 'react'
import Link from 'next/link'
import { styled } from '@mui/material/styles'

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

import Box from '@mui/material/Box'

const MyA = styled('a')`
    cursor: pointer;
    font-size: 1.3rem;
    padding: 2.5rem 0 2.5rem 0;

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
const MySpan = styled('span')`
  font-weight: bold;
  margin-right: 1rem;
`

const Mylink = (props) => {
  const { title, href } = props

  return (
    <Link href={href}>
      <MyA>
        <MySpan>{title.slice(0, 2)}</MySpan>
        {title.slice(2)}
      </MyA>
    </Link>
  )
}

const Navbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: 5,
        pl: 15
      }}
    >
      {' '}
      <Link href="/">
        <RocketLaunchIcon
          sx={{ color: '#AEAFBB ', fontSize: '4rem', cursor: 'pointer' }}
        />
      </Link>
      <Box
        sx={{
          display: 'block',
          borderBottom: '1px solid #6E719B',
          width: '40%',
          transform: 'translate(10%)',
          zIndex: 'tooltip'
        }}
      ></Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          background: 'rgba(255,255,255,.1)',
          backdropFilter: 'blur(25px)',
          width: '60rem',
          pr: 15,
          pl: 15
        }}
      >
        <Mylink href="/" title="00 HOME" />
        <Mylink href="/destinations/moon" title="01 DESTINATION" />
        <Mylink href="/" title="02 CREW" />
        <Mylink href="/" title="03 TECHNOLOGY" />
      </Box>
    </Box>
  )
}

export default Navbar
