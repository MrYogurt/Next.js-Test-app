import Head from 'next/head'
import {Component} from 'react';
// import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps /*, AppContext */ } from 'next/app'
import _app from './_app'

export default function Home({ Component, pageProps }: AppProps) {
  return (
      <_app {...pageProps}/>

  )
}
