# obsidian-vite

This is a template repository for an [Obsidian](obsidian.com) plugin bundled with [Vitejs](https://vitejs.dev).

## Out of the box support

- [Typescript](https://www.typescriptlang.org)
- [React](https://react.dev) or [Solid](https://solidjs.com)
- [Tailwindcss](https://tailwindcss.com)

## Usage

> [!NOTE]
> You must run `npm run build` to bundle and be able to use the plugin. Eventually, I would like to have a way to write to a file instead of the default dev server approach vite takes for dev builds.

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
