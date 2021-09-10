const textarea = document.createElement("textarea");
const output = document.createElement("div");
let language = "javascript";

function copy() {
    navigator.clipboard.writeText(
        window.highlighter.codeToHtml(textarea.value, language)
    );
}

function highlightSyntax() {
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

function SelectLanguage() {
    const select = document.createElement("select");
    const languages = [
        "abap",
        "actionscript-3",
        "ada",
        "apache",
        "apex",
        "apl",
        "applescript",
        "asm",
        "astro",
        "awk",
        "bat",
        "c",
        "clojure",
        "cobol",
        "coffee",
        "cpp",
        "crystal",
        "csharp",
        "css",
        "d",
        "dart",
        "diff",
        "docker",
        "dream-maker",
        "elixir",
        "elm",
        "erb",
        "erlang",
        "fish",
        "fsharp",
        "gherkin",
        "git-commit",
        "git-rebase",
        "gnuplot",
        "go",
        "graphql",
        "groovy",
        "hack",
        "haml",
        "handlebars",
        "haskell",
        "hcl",
        "hlsl",
        "html",
        "ini",
        "java",
        "javascript",
        "jinja-html",
        "json",
        "jsonc",
        "jsonnet",
        "jssm",
        "jsx",
        "julia",
        "jupyter",
        "kotlin",
        "latex",
        "less",
        "lisp",
        "logo",
        "lua",
        "make",
        "markdown",
        "matlab",
        "mdx",
        "nginx",
        "nim",
        "nix",
        "objective-c",
        "objective-cpp",
        "ocaml",
        "pascal",
        "perl",
        "php",
        "plsql",
        "postcss",
        "powershell",
        "prisma",
        "prolog",
        "pug",
        "puppet",
        "purescript",
        "python",
        "r",
        "raku",
        "razor",
        "riscv",
        "ruby",
        "rust",
        "sas",
        "sass",
        "scala",
        "scheme",
        "scss",
        "shaderlab",
        "shellscript",
        "smalltalk",
        "solidity",
        "sparql",
        "sql",
        "ssh-config",
        "stylus",
        "svelte",
        "swift",
        "system-verilog",
        "tcl",
        "tex",
        "toml",
        "tsx",
        "turtle",
        "twig",
        "typescript",
        "vb",
        "verilog",
        "vhdl",
        "viml",
        "vue-html",
        "vue",
        "wasm",
        "wenyan",
        "xml",
        "xsl",
        "yaml",
    ];
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
    const selectionContainer = document.createElement("div");
    const selectionTitle = document.createElement("span");
    const editorContainer = document.createElement("div");
    const editorContainerInner = document.createElement("div");

    // Language Selector
    selectionContainer.classList.add("language-selector");

    selectionTitle.innerText = "Language : ";

    selectionContainer.append(selectionTitle, SelectLanguage());

    // Editor
    initializeEditor();

    editorContainer.classList.add("editor");
    editorContainerInner.classList.add("editor__inner");

    editorContainerInner.append(output, textarea);
    editorContainer.append(editorContainerInner);

    fragment.append(selectionContainer, editorContainer, CopyButton());

    return fragment;
}
