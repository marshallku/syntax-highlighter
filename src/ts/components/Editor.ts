import { data, highlight, highlightAndCopy } from "../utils/highlighter";

export default function Editor() {
    const textarea = document.createElement("textarea");
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
            highlight();
        }
    };
    const updateData = () => {
        data.code = textarea.value;
    };
    const updateAndHighlight = () => {
        updateData();
        highlight();
    };
    const updateAndHighlightAndCopy = () => {
        updateData();
        highlightAndCopy();
    };

    textarea.autocapitalize = "off";
    textarea.spellcheck = false;
    textarea.autocomplete = "off";
    textarea.value = data.code;
    highlight();
    textarea.addEventListener("keyup", updateAndHighlight);
    textarea.addEventListener("change", updateAndHighlight);
    textarea.addEventListener("keydown", handleKeyDown);
    textarea.addEventListener("paste", updateAndHighlightAndCopy);
    textarea.addEventListener("copy", updateAndHighlightAndCopy);

    return textarea;
}
