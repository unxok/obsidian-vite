// @refresh reload

// import React from "react";
// import { createRoot } from "react-dom/client";

import { render } from "solid-js/web";

import App from "./App.tsx";
import "./index.css";
import { MarkdownRenderChild, Notice, Plugin } from "obsidian";

export default class ObsidianVite extends Plugin {
  onload(): void {
    const str = "we out here";
    new Notice(str);
    console.log(str);

    this.registerMarkdownCodeBlockProcessor(
      "obsidian-vite",
      (source, el, ctx) => {
        el.empty();
        el.classList.toggle("twcss", true);

        // const root = createRoot(el);
        // root.render(
        // 	<React.StrictMode>
        // 		<App
        // 			source={source}
        // 			ctx={ctx}
        // 		/>
        // 	</React.StrictMode>
        // );

        const dispose = render(() => <App source={source} ctx={ctx} />, el);

        /* 
        the registerMarkdownCodeBlockProcessor callback is called
        every time the code block is rendered. Doing the below
        will cause the associated mdChild to tell solid to dispose
        of this root and not track its context.
        */
        const mdChild = new MarkdownRenderChild(el);
        mdChild.register(dispose);
        // Do this for React
        // mdChild.register(root.unmount)
        ctx.addChild(mdChild);
      },
    );
  }
}

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
