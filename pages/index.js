import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SocialButton from './components/SocialButton'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🍉 Zaytri Space 🍉</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='🍉 Zaytri Space 🍉' />
        <meta property='og:url' content='https://zaytri.com/' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://zaytri.com/instascreme.png'
        />
        <meta
          property='og:description'
          content="Hi! I'm Zaytri (she/her), a nonbinary glitch witch, variety streamer, and melon devourer!"
        />
        <meta name='theme-color' content='#a9e694'></meta>
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
          <p>business🍉zaytri.com</p>
        </div>

        <div className={[styles.socialBox, 'column'].join(' ')}>
          <SocialButton
            classes={[styles.gold, styles.widget]}
            url='https://twitter.com/imzaytri/status/1576789605411479553'
            label='Commission Info'
          />

          <SocialButton
            classes={[styles.widget]}
            url='https://streamelements.com/dashboard/overlays/share/60d90ef30fcb3e75ea529f37'
            label='Chat Bubbles'
          />

          <SocialButton
            classes={[styles.widget]}
            url='https://strms.net/chat_leaderboard_by_zaytri'
            label='Chat Leaderboard'
          />

          <SocialButton
            classes={[styles.widget]}
            url='https://github.com/zaytri/stream-elements-widgets/tree/main/LevelUp/themes'
            label='Chat Leaderboard Themes'
          />

          <SocialButton
            classes={[styles.widget]}
            url='https://strms.net/animated_gradient_frame_by_zaytri'
            label='Animated Gradient Frame'
          />

          <SocialButton
            classes={[styles['ko-fi']]}
            url='https://ko-fi.com/zaytri'
            label='Tip me on Ko-fi'
          />

          <SocialButton
            classes={[styles.twitter]}
            url='https://twitter.com/imZaytri'
            label='Twitter'
          />

          <SocialButton
            classes={[styles.tiktok]}
            url='https://www.tiktok.com/@imzaytri'
            label='TikTok'
          />

          <SocialButton
            classes={[styles.twitch]}
            url='https://www.twitch.tv/zaytri'
            label='Twitch'
          />

          <SocialButton
            classes={[styles.discord]}
            url='https://discord.gg/EbHbBFBcyy'
            label='Discord'
          />

          <SocialButton
            classes={[styles.instagram]}
            url='https://www.instagram.com/imzaytri'
            label='Instagram'
          />

          <SocialButton
            classes={[styles.youtube]}
            url='https://www.youtube.com/channel/@imZaytri'
            label='YouTube'
          />

          <SocialButton
            classes={[styles.github]}
            url='https://github.com/zaytri'
            label='Github'
          />
        </div>
      </main>
    </div>
  )
}
