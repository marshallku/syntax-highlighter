import copy from "./copy";

export const highlighter: HighlighterData = {
    theme: "one-dark-pro",
    language: "javascript",
    code: `function main() {\n  console.log("hello world!");\n}`,
    outputElements: [],
    addOutputElement(element: HTMLElement) {
        this.outputElements.push(element);
    },
};

export async function initializeHighlighter() {
    const shiki = await window.shiki.getHighlighter({
        theme: highlighter.theme,
    });

    window.highlighter = shiki;
}

export function getAvailableThemes(): string[] {
    return window.shiki.BUNDLED_THEMES;
}

export function getAvailableLanguages(): string[] {
    return window.shiki.BUNDLED_LANGUAGES.map(({ id }: { id: string }) => id);
}

export function highlight() {
    const highlighted = window.highlighter?.codeToHtml(
        highlighter.code,
        highlighter.language
    );

    highlighter.outputElements.forEach((element) => {
        element.innerHTML = highlighted;
    });

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

    copy(
        window.highlighter?.codeToHtml(highlighter.code, highlighter.language)
    );
}

export function setLanguage(newLanguage: string) {
    if (newLanguage === highlighter.language) return;

    highlighter.language = newLanguage;
    highlight();
}

export async function setTheme(newTheme: string) {
    if (newTheme === highlighter.theme) return;

    const shiki = await window.shiki.getHighlighter({
        theme: newTheme,
    });

    highlighter.theme = newTheme;

    window.highlighter = shiki;
    highlight();
}
