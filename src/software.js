const software = [
  {
    title: 'Cube With Me',
    variant: 'blue',
    tags: [ 'Javascript', 'Express', 'MongoDB', 'WebSockets' ],
    desc: `
      A place for speed cubers to race head-to-head in real time!
      The site has over 200 registered users, and has support
      for realtime play/chat via WebSockets, spectating, and 2FA.
    `,
    href: 'https://cubewithme.com'
  },
  {
    title: 'Just Listen',
    variant: 'pink',
    tags: [ 'PHP', 'Custom Framework', 'MySQL' ],
    desc: `
      A website for musicians to consolidate their entire discography. Link
      to new releases, where fans can decide which platform to listen on, or
      link your profile to find everything! This is written in a
      <a href="https://github.com/jonahisadev/vvphp">custom framework</a>.
    `,
    href: 'https://justlisten.me'
  },
  {
    title: 'Now Playing',
    variant: 'green',
    tags: [ 'Javascript', 'Express', 'Spotify', 'MongoDB' ],
    desc: `
      This was a small project I made, mostly as a proof-of-concept. You can
      connect your Spotify account to the application, and then link an
      overlay in software like OBS to display on a live stream the song you're
      currently listening to on Spotify.
      <a href="https://github.com/jonahisadev/nowplaying">Here is the repository</a>.
    `,
    href: 'https://nowplaying.me'
  },
  {
    title: 'JEngine2D',
    variant: 'purple',
    tags: [ 'C++', 'Game Engine', 'OpenGL', 'GLFW' ],
    desc: `
      This is a homebrew game engine I created mostly for Ludum Dare
      game jams. It runs on OpenGL 3.3. Some features include spritesheets,
      font loading / rendering, audio playback, and controller input.
    `,
    href: 'https://github.com/jonahisadev/jengine'
  },
  {
    title: 'TreeMe',
    variant: 'orange',
    tags: [ 'Java', 'Minecraft', 'Algorithms', 'OSS' ],
    desc: `
      This Minecraft plugin allows users to break trees with one axe cut.
      There were no comparable plugins at the time. I implemented a DFS
      algorithm to find tree and leaf blocks connected to the block the player
      broke. Project received OSS support.
    `,
    href: 'https://github.com/jonahisadev/TreeMe'
  },
  {
    title: 'LittleXML',
    variant: 'red',
    tags: ['C', 'Parser', 'Tutorial'],
    desc: `
      I created a very basic XML parser in C, that was under 500 lines. I
      created it for a video I put up on
      <a href="https://youtu.be/kPFYfTvMRs8">YouTube</a>.
      The video currently has around 15k views.
      There are some memory leak issues with this project, but I still think
      it's cool!
    `,
    href: 'https://github.com/jonahisadev/littlexml'
  },
  {
    title: 'This Website!',
    variant: 'gray',
    tags: ['React', 'Vite', 'Tailwind'],
    desc: `
      I sadly do not have any public projects where I can showcase my
      React expertise, so I figured it well to update my portfolio website
      to showcase that better for me! This page should also look nice on mobile.
      Click this card for the source code.
    `,
    href: 'https://github.com/jonahisadev/portfolio'
  }
]

export default software;
