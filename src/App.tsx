import "./App.css";
import { MarkdownPostProcessorContext } from "obsidian";

function App(props: { source: string; ctx: MarkdownPostProcessorContext }) {
	console.log("Got mdpp context: ", props.ctx);

	return (
		<>
			<p>I am a custom code block!</p>
			<p>You entered: {props.source}</p>
		</>
	);
}

export default App;
