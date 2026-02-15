'use client'

import clsx from 'clsx'

export default function Home() {
  return (
    <main className='flex h-full w-full flex-col items-center px-6 pt-16 md:px-3'>
      <h1 className='bg-gradient-to-b from-emerald-700 to-green-600 bg-clip-text text-center font-grandstander text-6xl font-extrabold text-transparent'>
        <span className='text-7xl'>Z</span>aytri
      </h1>
      <p className='font-grandstander font-bold text-emerald-700'>
        nonbinary (she/her)
      </p>
      <img
        src='/zaytri.webp'
        className='my-3 h-48 w-48 rounded-xl border-[3px] border-emerald-800 bg-gradient-to-b from-emerald-700 to-green-600 [box-shadow:4px_4px_theme(colors.emerald[800]/25%)] md:h-60 md:w-60'
        alt='profile picture'
      />
      <p className='mt-1 font-grandstander text-3xl font-bold text-emerald-700'>
        Glitch Witch
      </p>
      <p className='text-center font-grandstander font-bold text-emerald-700'>
        business🍉zaytri.com
      </p>

      <div className='flex flex-1 flex-col gap-5 pb-16 pt-5 text-white'>
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
                        'relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border-[3px] border-emerald-800 bg-white p-3 after:absolute after:left-0 after:top-0 after:h-1/2 after:w-full after:bg-white/20 after:content-[""] group-hover:border-white group-hover:after:h-full group-hover:after:bg-gradient-to-b group-hover:after:from-white/40 group-hover:after:to-white/10 md:h-20 md:w-20',
                        text === 'instagram' && 'instagram',
                      )}
                    >
                      <img src={image} alt='' className='h-full' />
                    </div>
                    <p className='text-center text-sm font-bold [text-shadow:2px_2px_theme(colors.emerald[800]/50%)] md:-mx-2 md:text-lg'>
                      {text}
                    </p>
                  </a>
                )
              })}
            </Group>
          )
        })}
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
      <h2 className='text-3xl font-extrabold text-lime-100 [text-shadow:2px_2px_theme(colors.emerald[800]/50%)] md:text-4xl'>
        {name}
      </h2>
      <div className='grid grid-cols-3 flex-wrap gap-3 md:grid-cols-4 md:gap-5 lg:grid-cols-6'>
        {children}
      </div>
    </section>
  )
}

const groups = [
  {
    name: 'Socials',
    links: [
      {
        text: 'twitch',
        url: 'https://www.twitch.tv/zaytri',
        image: '/twitch.svg',
        color: '#9146ff',
      },
      {
        text: 'bluesky',
        url: 'https://bsky.app/profile/zaytri.com',
        image: '/bluesky.svg',
        color: '#1185fe',
      },
      {
        text: 'youtube',
        url: 'https://www.youtube.com/@imZaytri',
        image: '/youtube.svg',
        color: '#ffffff',
      },
      {
        text: 'discord',
        url: 'https://discord.gg/GWVwJ2ePuk',
        image: '/discord.svg',
        color: '#5865f2',
      },
    ],
  },
  {
    name: 'Support Me',
    links: [
      {
        text: 'shop',
        url: 'https://ko-fi.com/zaytri/shop',
        image: '/ko-fi.svg',
        color: '#13c3ff',
      },
      {
        text: 'commissions',
        url: 'https://vgen.co/Zaytri',
        image: '/vgen.png',
        color: '#B8FF26',
      },
      {
        text: 'tips',
        url: 'https://ko-fi.com/zaytri',
        image: '/ko-fi.svg',
        color: '#13c3ff',
      },
    ],
  },
  {
    name: 'Stream Widgets',
    links: [
      {
        text: 'slime chat',
        url: 'https://forums.slime2.stream/resources/slime-chat.10/',
        image: '/slime2.svg',
        color: '#399118',
      },
      {
        text: 'villager chat',
        url: 'https://forums.slime2.stream/resources/villager-chat.9/',
        image: '/slime2.svg',
        color: '#399118',
      },
      {
        text: 'scrolling chat',
        url: 'https://forums.slime2.stream/resources/scrolling-chat.13/',
        image: '/slime2.svg',
        color: '#399118',
      },
      {
        text: 'dvd bounce',
        url: 'https://forums.slime2.stream/resources/dvd-bounce.16/',
        image: '/slime2.svg',
        color: '#399118',
      },
      {
        text: 'animated gradient',
        url: 'https://forums.slime2.stream/resources/animated-gradient-frame-rounded-border-mask.17/',
        image: '/slime2.svg',
        color: '#399118',
      },
    ],
  },
  {
    name: 'Projects',
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
