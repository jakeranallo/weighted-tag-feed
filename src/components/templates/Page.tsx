import Head from 'next/head'
import Nav from '../organisms/Nav'
import { ReactChild } from 'react';

interface IPage {
  children: ReactChild
  title: string
}

export default ({ children, title = 'This is the default title' }: IPage) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/static/favicon.png" />
    </Head>
    <Nav />
    {children}
    <footer>Footer</footer>
  </div>
)
