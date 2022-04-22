import {
    getAvailableLanguages,
    getAvailableThemes,
    updateHighlighterTheme,
} from "./highlighter";

const textarea = document.createElement("textarea");
const output = document.createElement("div");
let language = "javascript";

function copy() {
    navigator.clipboard.writeText(
        window.highlighter.codeToHtml(textarea.value, language)
    );
}

export function highlightSyntax() {
    output.innerHTML = window.highlighter.codeToHtml(textarea.value, language);
}

function initializeEditor() {
    const handleKeyDown = (event: KeyboardEvent) => {
        const { code } = event;

        if (code === "Tab") {
            event.preventDefault();

            const currentStartPosition = textarea.selectionStart;
            const currentEndPosition = textarea.selectionEnd;
            const currentValue = textarea.value;

            textarea.value = `${currentValue.slice(
                0,
                currentStartPosition
            )}  ${currentValue.slice(currentStartPosition)}`;
            textarea.selectionEnd = currentEndPosition + 2;
            highlightSyntax();
        }
    };

    textarea.autocapitalize = "off";
    textarea.spellcheck = false;
    textarea.autocomplete = "off";
    textarea.value = `function main() {\n  console.log("hello world!");\n}`;
    highlightSyntax();
    textarea.addEventListener("keyup", highlightSyntax);
    textarea.addEventListener("change", highlightSyntax);
    textarea.addEventListener("keydown", handleKeyDown);
    textarea.addEventListener("paste", copy);
    textarea.addEventListener("copy", copy);
}

function SelectTheme() {
    const select = document.createElement("select");
    const themes = getAvailableThemes();
    const Option = (value: string) => {
        const option = document.createElement("option");

        option.innerText = value;
        option.selected = value === "one-dark-pro";

        return option;
    };

    themes.forEach((theme) => {
        select.append(Option(theme));
    });

    select.addEventListener("change", () => {
        updateHighlighterTheme(themes[select.selectedIndex]);
    });

    return select;
}

function SelectLanguage() {
    const select = document.createElement("select");
    const languages = getAvailableLanguages();
    const Option = (value: string) => {
        const option = document.createElement("option");

        option.innerText = value;
        option.selected = value === language;

        return option;
    };

    languages.forEach((language) => {
        select.append(Option(language));
    });

    select.addEventListener("change", () => {
        language = languages[select.selectedIndex];
        highlightSyntax();
    });

    return select;
}

function CopyButton() {
    // <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    const button = document.createElement("button");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    button.classList.add("copy");

    svg.setAttribute("width", "1.5rem");
    svg.setAttribute("height", "1.5rem");
    svg.setAttribute("viewBox", "0 0 24 24");

    path.setAttribute(
        "d",
        "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
    );

    svg.append(path);
    button.append(svg);

    button.addEventListener("click", copy);

    return button;
}

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

    // Editor
    initializeEditor();

    editorContainer.classList.add("editor");
    editorContainerInner.classList.add("editor__inner");

    editorContainerInner.append(output, textarea);
    editorContainer.append(editorContainerInner);

    fragment.append(
        themeSelectionContainer,
        languageSelectionContainer,
        editorContainer,
        CopyButton()
    );

    return fragment;
}
