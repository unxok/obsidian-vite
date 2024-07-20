import "./App.css";
import { MarkdownPostProcessorContext } from "obsidian";

function App(props: { source: string; ctx: MarkdownPostProcessorContext }) {
  console.log("Got mdpp context: ", props.ctx);

  return (
    <div>
      <p class="bg-red-500">I am a custom code block! Solid</p>
      <p>You entered: {props.source}</p>
    </div>
  );
}

export default App;
