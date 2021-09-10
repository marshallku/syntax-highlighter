declare global {
    interface Window {
        shiki: any;
        highlighter: any;
    }
}

export default async function initializeHighlighter() {
    const highlighter = await window.shiki.getHighlighter({
        theme: "one-dark-pro",
    });

    window.highlighter = highlighter;
}
