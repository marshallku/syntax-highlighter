const textarea = document.createElement("textarea");
const output = document.createElement("div");

function initializeEditor(highlighter: any) {
    const handleChange = () => {
        output.innerHTML = highlighter.codeToHtml(textarea.value, "js");
    };
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
            handleChange();
        }
    };

    textarea.value = `function main() {\n  console.log("hello world!");\n}`;
    handleChange();
    textarea.addEventListener("keyup", handleChange);
    textarea.addEventListener("change", handleChange);
    textarea.addEventListener("keydown", handleKeyDown);
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
