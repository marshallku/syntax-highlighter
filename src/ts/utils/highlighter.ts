import copy from "./copy";

export const data = {
    theme: "one-dark-pro",
    language: "javascript",
    code: `function main() {\n  console.log("hello world!");\n}`,
    outputElement: document.createElement("div"),
};

export async function initializeHighlighter() {
    const highlighter = await window.shiki.getHighlighter({
        theme: data.theme,
    });

    window.highlighter = highlighter;
}

export function getAvailableThemes(): string[] {
    return window.shiki.BUNDLED_THEMES;
}

export function getAvailableLanguages(): string[] {
    return window.shiki.BUNDLED_LANGUAGES.map(({ id }: { id: string }) => id);
}

export function highlight() {
    const highlighted = window.highlighter?.codeToHtml(
        data.code,
        data.language
    );

    data.outputElement.innerHTML = highlighted;

    return highlighted;
}

export function highlightAndCopy() {
    copyHighlightedResult(highlight());
}

export function copyHighlightedResult(value?: string) {
    if (value) {
        copy(value);
        return;
    }

    copy(window.highlighter?.codeToHtml(data.code, data.language));
}

export function setLanguage(newLanguage: string) {
    if (newLanguage === data.language) return;

    data.language = newLanguage;
    highlight();
}

export async function setTheme(newTheme: string) {
    if (newTheme === data.theme) return;

    const highlighter = await window.shiki.getHighlighter({
        theme: newTheme,
    });

    data.theme = newTheme;

    window.highlighter = highlighter;
    highlight();
}
