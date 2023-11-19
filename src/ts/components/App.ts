import crtElt from "crtelt";
import SelectTheme from "./SelectTheme";
import SelectLanguage from "./SelectLanguage";
import CopyButton from "./CopyButton";
import Editor from "./Editor";
import Output from "./Output";

export default function App() {
    return crtElt(
        "fragment",
        {},
        SelectTheme(),
        SelectLanguage(),
        crtElt(
            "div",
            { className: "editor" },
            crtElt("div", { className: "editor__inner" }, Output(), Editor())
        ),
        CopyButton()
    );
}
