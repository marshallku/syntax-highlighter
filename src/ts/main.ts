import { highlight, initializeHighlighter } from "./utils/highlighter";
import App from "./components/App";
import "../css/reset.css";
import "../css/style.css";

async function initialize() {
    const root = document.getElementById("root");
    const loader = document.querySelector(".loader");
    await initializeHighlighter();

    if (!root) return;

    root.append(App());
    highlight();

    if (!loader) return;
    loader.addEventListener("transitionend", () => {
        loader.remove();
    });
    loader.classList.add("loader--hide");
}

initialize();
