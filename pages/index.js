import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🍉 Zaytri Space 🍉</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap' rel='stylesheet' />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='🍉 Zaytri Space 🍉' />
        <meta property='og:url' content='https://zaytri.com/' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://zaytri.com/instascreme.png' />
        <meta property="og:description" content="Hi! I'm Zay (she/her and he/him), a nonbinary variety streamer, coder, and melon devourer!" />
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
            href='https://streamelements.com/dashboard/overlays/share/60d90ef30fcb3e75ea529f37'>
            <div className={styles.icon} />
            <p>Dynamic Chat Bubbles</p>
            <div className={styles.icon} />
          </a>
          <a className={[styles.twitch, styles.widget, styles.social, 'row'].join(' ')}
            href='https://strms.net/chat_leaderboard_by_zaytri'>
            <div className={styles.icon} />
            <p>Chat Leaderboard</p>
            <div className={styles.icon} />
          </a>
          <a className={[styles.twitch, styles.widget, styles.social, 'row'].join(' ')}
            href='https://github.com/zaytri/stream-elements-widgets/tree/main/LevelUp/themes'>
            <div className={styles.icon} />
            <p>Chat Leaderboard Themes</p>
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
            href='https://www.youtube.com/channel/UC3dubq21i8gOD03BSOL-CbA'>
            <div className={styles.icon} />
            <p>YouTube</p>
            <div className={styles.icon} />
          </a>
          <a className={[styles['fanhouse'], styles.social, 'row'].join(' ')}
            href='https://fanhouse.app/zaytri'>
            <div className={styles.icon} />
            <p>Support me on Fanhouse</p>
            <div className={styles.icon} />
          </a>
          <a className={[styles['ko-fi'], styles.social, 'row'].join(' ')}
            href='https://ko-fi.com/zaytri'>
            <div className={styles.icon} />
            <p>Donate to me on Ko-fi</p>
            <div className={styles.icon} />
          </a>
          <a className={[styles.github, styles.social, 'row'].join(' ')}
            href='https://github.com/zaytri'>
            <div className={styles.icon} />
            <p>Github</p>
            <div className={styles.icon} />
          </a>
        </div>
        <footer className={styles.footer}><p>Business Contact: business🍉zaytri.com</p></footer>
      </main>
    </div>
  )
}
