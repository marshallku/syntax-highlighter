import el from "../utils/el";
import { data } from "../utils/highlighter";
import SelectTheme from "./SelectTheme";
import SelectLanguage from "./SelectLanguage";
import CopyButton from "./CopyButton";
import Editor from "./Editor";

export default function App() {
    return el(
        "fragment",
        {},
        SelectTheme(),
        SelectLanguage(),
        el(
            "div",
            { className: "editor" },
            el(
                "div",
                { className: "editor__inner" },
                data.outputElement,
                Editor()
            )
        ),
        CopyButton()
    );
}
