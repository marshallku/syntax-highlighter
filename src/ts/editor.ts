const textarea = document.createElement("textarea");
const output = document.createElement("div");
let language = "javascript";

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

    textarea.value = `function main() {\n  console.log("hello world!");\n}`;
    highlightSyntax();
    textarea.addEventListener("keyup", highlightSyntax);
    textarea.addEventListener("change", highlightSyntax);
    textarea.addEventListener("keydown", handleKeyDown);
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

export default function Editor() {
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

    fragment.append(selectionContainer, editorContainer);

    return fragment;
}
