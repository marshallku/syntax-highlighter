import initializeHighlighter from "./highlighter";
import App from "./app";
import "../css/reset.css";
import "../css/style.css";

async function initialize() {
    const root = document.getElementById("root");
    await initializeHighlighter();

    if (!root) return;

    root.append(App());
}
initialize();
