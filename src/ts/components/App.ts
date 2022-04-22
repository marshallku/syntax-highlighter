import SelectTheme from "./SelectTheme";
import SelectLanguage from "./SelectLanguage";
import CopyButton from "./CopyButton";
import Editor from "./Editor";
import { data } from "../utils/highlighter";

export default function App() {
    const fragment = document.createDocumentFragment();
    const themeSelectionContainer = document.createElement("div");
    const themeSelectionTitle = document.createElement("span");
    const languageSelectionContainer = document.createElement("div");
    const languageSelectionTitle = document.createElement("span");
    const editorContainer = document.createElement("div");
    const editorContainerInner = document.createElement("div");

    // Theme Selector
    themeSelectionContainer.classList.add("select-container");
    themeSelectionTitle.innerText = "Theme : ";
    themeSelectionContainer.append(themeSelectionTitle, SelectTheme());

    // Language Selector
    languageSelectionContainer.classList.add("select-container");
    languageSelectionTitle.innerText = "Language : ";
    languageSelectionContainer.append(languageSelectionTitle, SelectLanguage());

    editorContainer.classList.add("editor");
    editorContainerInner.classList.add("editor__inner");

    editorContainerInner.append(data.outputElement, Editor());
    editorContainer.append(editorContainerInner);

    fragment.append(
        themeSelectionContainer,
        languageSelectionContainer,
        editorContainer,
        CopyButton()
    );

    return fragment;
}
