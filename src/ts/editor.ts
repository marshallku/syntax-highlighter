const textarea = document.createElement("textarea");
const output = document.createElement("div");

function initializeEditor(highlighter: any) {
    const handleChange = () => {
        output.innerHTML = highlighter.codeToHtml(textarea.value, "js");
    };

    textarea.value = `function main() {\n    console.log("hello world!");\n}`;
    handleChange();
    textarea.addEventListener("keyup", handleChange);
    textarea.addEventListener("change", handleChange);
}

export default function Editor(highlighter: any) {
    const container = document.createElement("div");
    const div = document.createElement("div");

    initializeEditor(highlighter);

    container.classList.add("editor");
    div.classList.add("editor__inner");

    div.append(output, textarea);
    container.append(div);

    return container;
}
