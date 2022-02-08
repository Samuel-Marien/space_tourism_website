import React, { useState } from 'react'
import Link from 'next/link'
import { styled } from '@mui/material/styles'

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import CloseIcon from '@mui/icons-material/Close'

import Box from '@mui/material/Box'

const MyA = styled('a')`
    cursor: pointer;
    font-size: 1.3rem;
    display: flex;
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

const Mylink = (props) => {
  const { title, href } = props

  return (
    <Link href={href}>
      <MyA>
        <Box
          sx={{
            display: 'flex',
            marginRight: { xs: 0, lg: '1rem' },
            fontWeight: 'bold',
            padding: { xs: 2, sm: '2.5rem 0 2.5rem 0' }
          }}
        >
          {title.slice(0, 2)}
          <Box
            sx={{
              fontWeight: 'light',
              ml: 2
            }}
          >
            {title.slice(2)}
          </Box>
        </Box>
      </MyA>
    </Link>
  )
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    if (toggle) {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: { xs: 0, lg: 5 },
        pl: { xs: 2, sm: 10, lg: 15 }
      }}
    >
      <Link href="/">
        <RocketLaunchIcon
          sx={{
            color: '#AEAFBB ',
            fontSize: { xs: '2.5rem', sm: '4rem' },
            mt: { xs: 2 },
            alignSelf: 'start',
            cursor: 'pointer',
            zIndex: '1000'
          }}
        />
      </Link>
      <Box
        sx={{
          display: { xs: 'none', lg: 'block' },
          borderBottom: '1px solid #6E719B',
          width: '40%',
          transform: 'translate(10%)',
          zIndex: 'tooltip'
        }}
      ></Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'space-between',
          background: 'rgba(255,255,255,.1)',
          backdropFilter: 'blur(10px)',
          width: { xs: '32rem', lg: '60rem' },
          pr: { xs: 2, lg: 15 },
          pl: { xs: 2, lg: 15 }
        }}
      >
        <Mylink href="/" title="00 HOME" />
        <Mylink href="/destination" title="01 DESTINATION" />
        <Mylink href="/crew" title="02 CREW" />
        <Mylink href="/technology" title="03 TECHNOLOGY" />
      </Box>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' }
        }}
      >
        {!toggle ? (
          <MenuOpenIcon
            sx={{
              color: '#6E719B',
              fontSize: '2rem',
              mr: 1,
              mt: { xs: 2 },
              cursor: 'pointer'
            }}
            onClick={() => handleToggle()}
          />
        ) : null}

        {toggle ? (
          <Box
            sx={{
              display: 'block',
              background: 'rgba(255,255,255,.1)',
              backdropFilter: 'blur(10px)',
              width: '16rem',
              height: '100vh',
              zIndex: '999'
            }}
          >
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  color: '#6E719B',
                  fontSize: '2.5rem',
                  cursor: 'pointer',
                  mr: 1,
                  mt: { xs: 2 }
                }}
              >
                <CloseIcon onClick={() => handleToggle()} />
              </Box>
              <Box sx={{ ml: 4, mt: { xs: 10, sm: 0 } }}>
                <Mylink href="/" title="00 HOME" />
                <Mylink href="/destination" title="01 DESTINATION" />
                <Mylink href="/crew" title="02 CREW" />
                <Mylink href="/technology" title="03 TECHNOLOGY" />
              </Box>
            </Box>
          </Box>
        ) : null}
      </Box>
    </Box>
  )
}

export default Navbar
