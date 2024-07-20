import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Notice, Plugin } from "obsidian";

export default class ObsidianVite extends Plugin {
	onload(): void {
		const str = "we out here";
		new Notice(str);
		console.log(str);

		this.registerMarkdownCodeBlockProcessor(
			"obsidian-vite",
			(source, el, ctx) => {
				el.empty();
				const root = createRoot(el);
				root.render(
					<React.StrictMode>
						<App
							source={source}
							ctx={ctx}
						/>
					</React.StrictMode>
				);
			}
		);
	}
}

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
