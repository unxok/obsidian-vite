import {Notice, Plugin, PluginSettingTab, Setting} from "obsidian"







export default class ObsidianVite extends Plugin {
    onload(): Promise<void> | void {
        new Notice("ObsidianVite plugin loaded")
        this.addSettingTab(new ObsidianViteSettingTab(this.app, this))
    }

    onunload(): void {
        new Notice("ObsidianVite plugin unloaded")
    }
}





class ObsidianViteSettingTab extends PluginSettingTab {
    display(): void {
        const {containerEl} = this;

        new Setting(containerEl)
            .setName("A sample setting")
            .setDesc('some description.')
            .addText(cmp => cmp
                .setPlaceholder('placeholder text')
                .onChange(v => console.log('sample setting changed: ', v))
            )

    }
}