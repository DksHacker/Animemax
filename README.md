# Animemax

A modern anime streaming web app built with React + Vite. Powered by [Animemax API](https://github.com/DksHacker/Animemax-API).

## Features

- 🏠 Homepage with spotlight, trending, latest episodes
- 📺 Watch episodes with HLS player
- 🔍 Search & filter anime
- 🎭 Character & people info
- 📱 Responsive design with Tailwind CSS
- 🌙 Dark / Light theme toggle

## Tech Stack

- [React 18](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router v6](https://reactrouter.com)
- [TanStack Query](https://tanstack.com/query)
- [Zustand](https://zustand-demo.pmnd.rs)
- [Artplayer](https://artplayer.org) + HLS.js

## Getting Started

### Prerequisites

- Node.js 18+ or [Bun](https://bun.sh)
- Yarn

### Install

```bash
git clone https://github.com/DksHacker/Animemax
cd Animemax
yarn install
```

### Environment Variables

Create a `.env` file:

```env
VITE_API_URL=http://localhost:3030
```

### Run

```bash
# Development
yarn dev

# Build
yarn build

# Preview build
yarn preview
```

App runs at `http://localhost:5000`

## Related

- [Animemax API](https://github.com/DksHacker/Animemax-API) — Backend API

## License

MIT © [DksHacker](https://github.com/DksHacker)
