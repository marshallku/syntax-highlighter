import crtElt from "crtelt";
import { highlighter, highlight, highlightAndCopy } from "../utils/highlighter";

export default function Editor() {
    const handleChange = (event: Event) => {
        const { target } = event;

        if (!(target instanceof HTMLTextAreaElement)) {
            return;
        }

        highlighter.code = target.value;
        highlight();
    };

    const handleKeyDown = (event: Event) => {
        const { code, target } = event as KeyboardEvent;

        if (code !== "Tab" || !(target instanceof HTMLTextAreaElement)) {
            return;
        }

        event.preventDefault();

        const currentStartPosition = target.selectionStart;
        const currentEndPosition = target.selectionEnd;
        const currentValue = target.value;

        target.value = `${currentValue.slice(
            0,
            currentStartPosition
        )}  ${currentValue.slice(currentStartPosition)}`;
        target.selectionEnd = currentEndPosition + 2;
        highlight();
    };

    const handleCopyAndPaste = (event: Event) => {
        const { target } = event;

        if (!(target instanceof HTMLTextAreaElement)) {
            return;
        }

        highlighter.code = target.value;
        highlightAndCopy();
    };

    return crtElt("textarea", {
        autocapitalize: "off",
        spellcheck: false,
        autocomplete: "off",
        value: highlighter.code,
        events: {
            keyup: handleChange,
            change: handleChange,
            keydown: handleKeyDown,
            paste: handleCopyAndPaste,
            copy: handleCopyAndPaste,
        },
    });
}
