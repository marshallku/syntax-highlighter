import { highlightSyntax } from "./app";
let theme = "one-dark-pro";

declare global {
    interface Window {
        shiki: any;
        highlighter: any;
    }
}

export async function initializeHighlighter() {
    const highlighter = await window.shiki.getHighlighter({
        theme,
    });

    window.highlighter = highlighter;
}

export async function updateHighlighterTheme(newTheme: string) {
    if (newTheme === theme) return;

    const highlighter = await window.shiki.getHighlighter({
        theme: newTheme,
    });

    window.highlighter = highlighter;
    highlightSyntax();
}
