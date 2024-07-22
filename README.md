# obsidian-vite

This is a template repository for an [Obsidian](obsidian.com) plugin bundled with [Vitejs](https://vitejs.dev).

## Out of the box support

- [Typescript](https://www.typescriptlang.org)
- [React](https://react.dev) or [Solid](https://solidjs.com)
- [Tailwindcss](https://tailwindcss.com)

## Usage

- `npm run dev` will automatically watch and build your plugin when you save changes. If using the [hot-reload](https://github.com/pjeby/hot-reload?tab=ISC-1-ov-file#readme) plugin, you may want to use [my PR](https://github.com/pjeby/hot-reload/pull/15) to ensure rendering-related changes are hot reloaded correctly.

- `main.js` and `styles.css` output to the root directory of the repo. Place the repo in `/yourvault/.obsidian/plugins/` to be able to test out your plugin.
- Tailwind is scoped to children of an element with the `twcss` class. Make sure your view/codeblock/whatever has this class to enable tw utility classes for its children.

1. Replace the following words in all files to your liking:
   - obsidian-vite
   - Obsidian Vite
   - Obisidian Vite Plugin
   - ObsidianVite
2. Look over `/manifest.json` and adjust as needed.
3. Look over `/tsconfig.app.json`, `/vite.config.ts`, `/src/main.tsx` and comment/uncomment depending on whether you want to use React or Solid.

# License

MIT

# Contributing

- Open an issue for bugs and feature requests
- PRs welcome!
