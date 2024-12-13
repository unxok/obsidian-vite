import { Notice, Plugin, PluginSettingTab, Setting } from "obsidian";
import { text } from "./i18next";

export default class ObsidianVite extends Plugin {
	onload(): Promise<void> | void {
		new Notice("ObsidianVite plugin loaded");
		this.addSettingTab(new ObsidianViteSettingTab(this.app, this));

		i18nextExample();
	}

	onunload(): void {
		new Notice("ObsidianVite plugin unloaded");
	}
}

class ObsidianViteSettingTab extends PluginSettingTab {
	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		new Setting(containerEl)
			.setName("A sample setting")
			.setDesc("some description.")
			.addText((cmp) =>
				cmp
					.setPlaceholder("placeholder text")
					.onChange((v) => console.log("sample setting changed: ", v))
			);
	}
}

// EXAMPLE using i18next
const i18nextExample = () => {
	new Notice(text("hello"));
	new Notice(text("good.morning"));
};
