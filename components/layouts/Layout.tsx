import * as React from 'react';
import Head from 'next/head'
import { Navbar } from '../ui';

type Props = {
  children?: React.ReactNode
  title?: String
};

export const Layout: React.FC<Props> = ({ children, title }) => {

  const origin = (typeof window === 'undefined') ? '' : window.location.origin;

  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Jota'></meta>
        <meta name='description' content={`Info about pokemon ${title}`} />
        <meta name='keywords' content={`${title} pokemon, pokedex`}></meta>

        <meta property="og:title" content={`Information about ${title}`} />
        <meta property="og:description" content={`This is the page about ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar></Navbar>
      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>
    </>
  )
}
