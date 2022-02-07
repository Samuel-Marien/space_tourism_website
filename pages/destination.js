import React from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import DestinationContent from '../components/destinationContent'

const Moon = () => {
  return (
    <div
      style={{
        background: `url(/images/background-destination-desktop.jpg) `,
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        /* Préserve le ratio de l'image */
        minWidth: '100%',
        minHeight: '100%',
        backgroundSize: 'cover'
      }}
    >
      <Head>
        <title>Destination</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <DestinationContent />
    </div>
  )
}

export default Moon
