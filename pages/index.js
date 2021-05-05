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
        <meta property='og:url' content='https://zaytri.com/' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://zaytri.com/instascreme.png' />
        <meta property="og:description" content="Hi! I'm Zay (she/her and he/him), 26-year-old nonbinary variety streamer!" />
        <meta name="theme-color" content="#a9e694"></meta>
      </Head>

      <div className={styles.spotlight}>
        <div /><div /><div /><div /><div /><div />
      </div>

      <main className={styles.main}>
        <div className={styles.message}>
          <p>You Have Entered</p>
          <p>[Zaytri Space]</p>
        </div>

        <div className={[styles.socialBox, 'column'].join(' ')}>
          <a className={[styles.twitch, styles.social, 'row'].join(' ')}
            href='https://www.twitch.tv/zaytri/profile'>
            <div className={styles.icon} />
            <p>Twitch</p>
            <div className={styles.icon} />
          </a>
          <a className={[styles.twitch, styles.widget, styles.social, 'row'].join(' ')}
            href='https://strms.net/animated_gradient_frame_by_zaytri'>
            <div className={styles.icon} />
            <p>Animated Gradient Frame</p>
            <div className={styles.icon} />
          </a>
          <a className={[styles.discord, styles.social, 'row'].join(' ')}
            href='https://discord.gg/EbHbBFBcyy'>
            <div className={styles.icon} />
            <p>Discord</p>
            <div className={styles.icon} />
          </a>
          <a className={[styles.twitter, styles.social, 'row'].join(' ')}
            href='https://twitter.com/imzaytri'>
            <div className={styles.icon} />
            <p>Twitter</p>
            <div className={styles.icon} />
          </a>
          <a className={[styles.tiktok, styles.social, 'row'].join(' ')}
            href='https://www.tiktok.com/@imzaytri'>
            <div className={styles.icon} />
            <p>TikTok</p>
            <div className={styles.icon} />
          </a>
          <a className={[styles.instagram, styles.social, 'row'].join(' ')}
            href='https://www.instagram.com/imzaytri'>
            <div className={styles.icon} />
            <p>Instagram</p>
            <div className={styles.icon} />
          </a>
          <a className={[styles.youtube, styles.social, 'row'].join(' ')}
            href='https://www.youtube.com/channel/UCIp9bzUH8ylhSZ7e8-Gc_Cg'>
            <div className={styles.icon} />
            <p>YouTube</p>
            <div className={styles.icon} />
          </a>
          <a className={[styles.github, styles.social, 'row'].join(' ')}
            href='https://github.com/zaytri'>
            <div className={styles.icon} />
            <p>Github</p>
            <div className={styles.icon} />
          </a>
        </div>
        <footer class={styles.footer}><p>Business Contact: business🍉zaytri.com</p></footer>
      </main>


    </div>
  )
}
