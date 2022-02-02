import React from 'react'
import Link from 'next/link'
import { styled } from '@mui/material/styles'

import Box from '@mui/material/Box'

const Mylink = (props) => {
  const { title, href } = props

  const MyA = styled('a')`
    cursor: pointer;
    font-size: 1.3rem;
    padding: 2.5rem 0 2.5rem 0;
    font-family: 'Barlow Condensed', sans-serif;
    color: #ffffff;
    :hover {
      transition: all .3s ease-out;
      color: #AEAFBB;
      border-bottom: 4px solid #AEAFBB;
    }
    :active {
      color: #ffffff;
       border-bottom: 4px solid #ffffff;
  `
  const MySpan = styled('span')`
    font-weight: bold;
    margin-right: 1rem;
  `

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
      <img
        src="images/logo.svg"
        alt="un triangle aux trois côtés égaux"
        height="60px"
        width="60px"
      />
      <Box
        sx={{
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
        <Mylink href="/" title="01 DESTINATION" />
        <Mylink href="/" title="02 CREW" />
        <Mylink href="/" title="03 TECHNOLOGY" />
      </Box>
    </Box>
  )
}

export default Navbar
