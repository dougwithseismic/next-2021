import React from 'react'
import Head from 'next/head'
import { Layout } from '@components/Layout'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Broadband Deals in [POSTCODE]</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <>
        <div className="container px-4 mx-auto">
          <h1>Finding the best broadband deals for you.</h1>
          <p>
            Heading One - The centerpiece Right Hook. Powerful and commanding,
            but not unwelcoming, either. Come on in, the party is just getting
            started.{' '}
          </p>

          <h2>Your Broadband Deals for BS3 3AW</h2>
          <p>
            Heading Two is equally striking, but with far less power behind it.
            Think jab, jab to pierce the reader’s defense. Dolor Schlitz
            sapiente twee stumptown ex. Duis Carles pickled, cornhole.
          </p>

          <h3>Heading Three</h3>
          <p>Thundercats McSweeneys minim PBR vegan Tumblr irony.</p>

          <h4>Heading Four - Tag Lines</h4>
        </div>
      </>
    </Layout>
  )
}

export default Home
