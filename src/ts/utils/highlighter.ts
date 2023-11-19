import { compress, decompress } from "lz-string";
import copy from "./copy";
import { getQuery, updateQuery } from "./query";

const THEME_QUERY_KEY = "theme";
const LANGUAGE_QUERY_KEY = "language";
const CODE_QUERY_KEY = "code";

const query = getQuery();

export const highlighter: HighlighterData = {
    theme: query[THEME_QUERY_KEY] || "one-dark-pro",
    language: query[LANGUAGE_QUERY_KEY] || "javascript",
    code: query[CODE_QUERY_KEY]
        ? decompress(decodeURIComponent(query[CODE_QUERY_KEY]))
        : `function main() {\n  console.log("hello world!");\n}`,
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
    updateQuery(CODE_QUERY_KEY, encodeURIComponent(compress(highlighter.code)));

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

    updateQuery(LANGUAGE_QUERY_KEY, newLanguage);

    highlighter.language = newLanguage;
    highlight();
}

export async function setTheme(newTheme: string) {
    if (newTheme === highlighter.theme) return;

    updateQuery(THEME_QUERY_KEY, newTheme);

    highlighter.theme = newTheme;
    highlighter.highlighter = await window.shiki.getHighlighter({
        theme: newTheme,
    });

    highlight();
}
