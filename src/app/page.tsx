'use client'

import clsx from 'clsx'

export default function Home() {
  return (
    <main className='flex h-full w-full flex-col items-center bg-gradient-to-b from-[#A9E694] to-white px-3 pt-16'>
      <h1 className='bg-gradient-to-b from-emerald-700 to-green-600 bg-clip-text text-center font-grandstander text-6xl font-extrabold text-transparent'>
        Zaytri Zone
      </h1>
      <p className='mt-1 font-grandstander text-3xl font-bold text-emerald-700'>
        glitch witch of twitch
      </p>
      <div className='flex flex-1 flex-col gap-5 py-10 text-white'>
        {groups.map(group => {
          const { name, links } = group

          return (
            <Group key={name} name={name}>
              {links.map(link => {
                const { url, text, image, color } = link
                return (
                  <a
                    key={text}
                    href={url}
                    className='group flex w-24 flex-col items-center gap-1'
                  >
                    <div
                      style={{ backgroundColor: color }}
                      className={clsx(
                        'relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border-[3px] border-emerald-800 bg-white p-[14px] [box-shadow:3px_3px_theme(colors.emerald[800]/50%)] after:absolute after:left-0 after:top-0 after:h-1/2 after:w-full after:bg-white/20 after:content-[""] group-hover:border-white group-hover:after:h-full group-hover:after:bg-gradient-to-b group-hover:after:from-white/40 group-hover:after:to-white/10',
                        text === 'instagram' && 'instagram',
                      )}
                    >
                      <img
                        className='drop-shadow-[3px_3px_theme(colors.black/10%)]'
                        src={image}
                        alt=''
                      />
                    </div>
                    <p className='-mx-2 text-center text-lg font-bold [text-shadow:2px_2px_theme(colors.emerald[800]/50%)]'>
                      {text}
                    </p>
                  </a>
                )
              })}
            </Group>
          )
        })}
        <p className='pb-5 text-center font-grandstander text-xl font-bold text-emerald-700'>
          business🍉zaytri.com
        </p>
      </div>
    </main>
  )
}

type GroupProps = {
  name: string
}

function Group({ name, children }: React.PropsWithChildren<GroupProps>) {
  return (
    <section className='flex flex-col gap-3 rounded-xl border-[3px] border-emerald-800 bg-gradient-to-b from-emerald-700 to-green-600 p-5 font-nunito [box-shadow:4px_4px_theme(colors.emerald[800]/25%)]'>
      <h2 className='text-4xl font-extrabold text-lime-100 [text-shadow:2px_2px_theme(colors.emerald[800]/50%)]'>
        {name}
      </h2>
      <div className='grid grid-cols-3 flex-wrap gap-5 md:grid-cols-4 lg:grid-cols-6'>
        {children}
      </div>
    </section>
  )
}

const groups = [
  {
    name: 'socials',
    links: [
      {
        text: 'twitch',
        url: 'https://www.twitch.tv/zaytri',
        image: '/twitch.svg',
        color: '#9146ff',
      },
      {
        text: 'twitter',
        url: 'https://twitter.com/imZaytri',
        image: '/twitter.svg',
        color: '#1d9bf0',
      },
      {
        text: 'tiktok',
        url: 'https://www.tiktok.com/@imzaytri',
        image: '/tiktok.svg',
        color: '#000000',
      },
      {
        text: 'youtube',
        url: 'https://www.youtube.com/@imZaytri',
        image: '/youtube.svg',
        color: '#ffffff',
      },
      {
        text: 'instagram',
        url: 'https://www.instagram.com/imzaytri',
        image: '/instagram.svg',
        color: '#ea33aa',
      },
      {
        text: 'discord',
        url: 'https://discord.gg/EbHbBFBcyy',
        image: '/discord.svg',
        color: '#5865f2',
      },
    ],
  },
  {
    name: 'support me',
    links: [
      {
        text: 'etsy shop',
        url: 'https://zaytri.etsy.com/',
        image: '/etsy.png',
        color: '#f1641d',
      },
      {
        text: 'ko-fi shop',
        url: 'https://ko-fi.com/zaytri/shop',
        image: '/ko-fi.svg',
        color: '#13c3ff',
      },

      {
        text: 'tips',
        url: 'https://ko-fi.com/zaytri',
        image: '/ko-fi.svg',
        color: '#13c3ff',
      },
      {
        text: 'commissions',
        url: 'https://ko-fi.com/zaytri/commissions',
        image: '/ko-fi.svg',
        color: '#13c3ff',
      },
    ],
  },
  {
    name: 'stream widgets',
    links: [
      {
        text: 'villager chat',
        url: 'https://ko-fi.com/s/203846e8fd',
        image: '/slime2.svg',
        color: '#399118',
      },
      {
        text: 'simple chat',
        url: 'https://ko-fi.com/s/29673d4dbf',
        image: '/slime2.svg',
        color: '#399118',
      },
      {
        text: 'scrolling chat',
        url: 'https://ko-fi.com/s/86ce7a796b',
        image: '/slime2.svg',
        color: '#399118',
      },
      {
        text: 'chat bubbles',
        url: 'https://streamelements.com/dashboard/overlays/share/60d90ef30fcb3e75ea529f37',
        image: '/streamelements.png',
        color: '#020923',
      },
      {
        text: 'chat leaderboard',
        url: 'https://strms.net/chat_leaderboard_by_zaytri',
        image: '/streamelements.png',
        color: '#020923',
      },
      {
        text: 'gradient frame',
        url: 'https://strms.net/animated_gradient_frame_by_zaytri',
        image: '/streamelements.png',
        color: '#020923',
      },
    ],
  },

  {
    name: 'projects',
    links: [
      {
        text: 'slime2',
        url: 'https://slime2.stream/',
        image: '/slime2.svg',
        color: '#399118',
      },
      {
        text: 'palia garden planner',
        url: 'https://docs.google.com/spreadsheets/d/1z60kAOtJTESQocGVLz33tv1u2Y9jilwtNU6f67Ww42g/edit#gid=0',
        image: '/palia.png',
        color: '#61b5da',
      },
      {
        text: 'github',
        url: 'https://github.com/zaytri',
        image: '/github.svg',
        color: '#24292f',
      },
    ],
  },
]

// <SocialButton
//             classes={[styles.gold, styles.widget]}
//             url='https://ko-fi.com/s/203846e8fd'
//             label='Villager Chat'
//           />

//           <SocialButton
//             classes={[styles.gold, styles.widget]}
//             url='https://ko-fi.com/zaytri/commissions'
//             label='Chat Commissions'
//           />

//           <SocialButton
//             classes={[styles['ko-fi']]}
//             url='https://ko-fi.com/zaytri'
//             label='Ko-fi Shop and Tips'
//           />

//           <SocialButton
//             classes={[styles.widget]}
//             url='https://slime2.stream/'
//             label='slime2'
//           />

//           <SocialButton
//             classes={[styles.widget]}
//             url='https://docs.google.com/spreadsheets/d/1z60kAOtJTESQocGVLz33tv1u2Y9jilwtNU6f67Ww42g/edit#gid=0'
//             label='Palia Garden Planner'
//           />

//           <SocialButton
//             classes={[styles.widget]}
//             url='https://streamelements.com/dashboard/overlays/share/60d90ef30fcb3e75ea529f37'
//             label='Chat Bubbles'
//           />

//           <SocialButton
//             classes={[styles.widget]}
//             url='https://strms.net/chat_leaderboard_by_zaytri'
//             label='Chat Leaderboard'
//           />

//           <SocialButton
//             classes={[styles.widget]}
//             url='https://github.com/zaytri/stream-elements-widgets/tree/main/LevelUp/themes'
//             label='Chat Leaderboard Themes'
//           />

//           <SocialButton
//             classes={[styles.widget]}
//             url='https://strms.net/animated_gradient_frame_by_zaytri'
//             label='Animated Gradient Frame'
//           />

//           <SocialButton
//             classes={[styles.twitter]}
//             url='https://twitter.com/imZaytri'
//             label='Twitter'
//           />

//           <SocialButton
//             classes={[styles.tiktok]}
//             url='https://www.tiktok.com/@imzaytri'
//             label='TikTok'
//           />

//           <SocialButton
//             classes={[styles.twitch]}
//             url='https://www.twitch.tv/zaytri'
//             label='Twitch'
//           />

//           <SocialButton
//             classes={[styles.discord]}
//             url='https://discord.gg/EbHbBFBcyy'
//             label='Discord'
//           />

//           <SocialButton
//             classes={[styles.instagram]}
//             url='https://www.instagram.com/imzaytri'
//             label='Instagram'
//           />

//           <SocialButton
//             classes={[styles.youtube]}
//             url='https://www.youtube.com/@imZaytri'
//             label='YouTube'
//           />

//           <SocialButton
//             classes={[styles.github]}
//             url='https://github.com/zaytri'
//             label='Github'
//           />
