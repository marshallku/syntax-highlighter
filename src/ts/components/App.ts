import el from "../utils/el";
import SelectTheme from "./SelectTheme";
import SelectLanguage from "./SelectLanguage";
import CopyButton from "./CopyButton";
import Editor from "./Editor";
import Output from "./Output";

export default function App() {
    return el(
        "fragment",
        {},
        SelectTheme(),
        SelectLanguage(),
        el(
            "div",
            { className: "editor" },
            el("div", { className: "editor__inner" }, Output(), Editor())
        ),
        CopyButton()
    );
}
