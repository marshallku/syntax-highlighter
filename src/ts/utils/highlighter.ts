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
    highlighter.highlighter = await window.shiki.getHighlighter({
        theme: highlighter.theme,
    });
}

export function getAvailableThemes(): string[] {
    return window.shiki.BUNDLED_THEMES;
}

export function getAvailableLanguages(): string[] {
    return window.shiki.BUNDLED_LANGUAGES.map(({ id }: { id: string }) => id);
}

export function highlight() {
    const highlighted = highlighter.highlighter?.codeToHtml(
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
        highlighter.highlighter?.codeToHtml(
            highlighter.code,
            highlighter.language
        )
    );
}

export function setLanguage(newLanguage: string) {
    if (newLanguage === highlighter.language) return;

    highlighter.language = newLanguage;
    highlight();
}

export async function setTheme(newTheme: string) {
    if (newTheme === highlighter.theme) return;

    highlighter.theme = newTheme;
    highlighter.highlighter = await window.shiki.getHighlighter({
        theme: newTheme,
    });

    highlight();
}
