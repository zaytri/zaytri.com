import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

function getRealHeight() {
  let height = '1vh'
  if (typeof document !== 'undefined' && document.documentElement) {
    height = `${document.documentElement.clientHeight / 100}px`
  } else if (typeof window !== 'undefined') {
    height = `${window.innerHeight / 100}px`
  }
  return height
}

export default function Home() {
  const [height, setHeight] = useState('1vh')
  const [refresh, setRefresh] = useState(false)

  function handleResize() { setHeight(getRealHeight()) }

  useEffect(() => {
    if (!refresh) {
      setRefresh(true)
      handleResize()
    }
  }, [refresh])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })


  return (
    <div className={styles.container} style={{ '--realHeight': height }}>
      <Head>
        <title>🍉 Zaytri Space 🍉</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap' rel='stylesheet' />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='🍉 Zaytri Space 🍉' />
        <meta property='og:site_name' content='Zaytri' />
        <meta property='og:url' content='https://zaytri.com/' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://zaytri.com/instascreme.png' />
        <meta property="og:description" content="Hi!! I am a Twitch streamer with chill vibes, and my pronouns are she/her and he/him!" />
        <meta name="theme-color" content="#a9e694"></meta>
      </Head>

      <div className={styles.spotlight}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>

      <main className={styles.main}>
        <div className={styles.message}>
          <p>You Have Entered</p>
          <p>[Zaytri Space]</p>
        </div>

        <div className={styles.social}>
          <a href='https://www.instagram.com/imzaytri/'>
            <img src='/circle-instagram.png' alt='Instagram Link' />
          </a>
          <a href='https://www.youtube.com/channel/UCIp9bzUH8ylhSZ7e8-Gc_Cg'>
            <img src='/circle-youtube.png' alt='YouTube Link' />
          </a>
          <a href='https://www.twitch.tv/zaytri'>
            <img src='/circle-twitch.png' alt='Twitch Link' />
          </a>
          <a href='https://twitter.com/imzaytri'>
            <img src='/circle-twitter.png' alt='Twitter Link' />
          </a>
          <a href='https://www.tiktok.com/@imzaytri'>
            <img src='/circle-tiktok.png' alt='TikTok Link' />
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          <img src='/screme.png' alt='Screaming Toad' className={styles.toad} />
      </footer>
    </div>
  )
}
