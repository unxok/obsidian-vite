# obsidian-vite

This is a template repository for an [Obsidian](obsidian.com) plugin bundled with [Vitejs](https://vitejs.dev).

> [!WARNING]
> As of right now, this template <u>is inteded for my use only</u>. You are welcome to use it, however I cannot guarantee the quality of it.
>
> There are a few things I want to do prior to advertising this for others to use:
>
> - [x] Add i18next stuff
> - [ ] Fix up eslint stuff (I don't really use eslint personally)
> - [ ] Make an NPM create script
>   - [ ] inputs for plugin name variations and author name
>   - [ ] Add choice of SCSS or PostCSS
>   - [ ] Add choice for sample code in plugin class
>   - [ ] Add framework choices
>     - [ ] vanilla typescript
>     - [ ] Solid
>     - [ ] React
>     - [ ] Svelte
>     - [ ] Vue
>   - [ ] Add choice for testing framework (choices or just Vitest?) (I haven't really used unit tests ever)

## Usage

- `npm run dev` will automatically watch and build your plugin when you save changes. If using the [hot-reload](https://github.com/pjeby/hot-reload?tab=ISC-1-ov-file#readme) plugin (which you should be), you may want to use [my PR](https://github.com/pjeby/hot-reload/pull/15) to ensure rendering-related changes are hot reloaded correctly.

- `main.js` and `styles.css` output to the root directory of the repo. Place the repo in `/yourvault/.obsidian/plugins/` to be able to test out your plugin.
- Tailwind is scoped to children of an element with the `twcss` class. Make sure your view/codeblock/whatever has this class to enable tw utility classes for its children.

1. Replace the following words in all files to your liking:
   - obsidian-vite
   - Obsidian Vite
   - ObsidianVite
2. Look over `/manifest.json` and adjust as needed.
3. Look over `/tsconfig.app.json`, `/vite.config.ts`, `/src/main.tsx` and comment/uncomment depending on whether you want to use React or Solid.
4. Change author name in LICENSE to your name

# License

MIT
