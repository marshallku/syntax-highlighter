import initializeHighlighter from "./highlighter";
import Editor from "./editor";
import "../css/reset.css";
import "../css/style.css";

async function initialize() {
    const app = document.getElementById("app");
    const highlighter = await initializeHighlighter();

    if (!app) return;

    app.append(Editor(highlighter));
}
initialize();
