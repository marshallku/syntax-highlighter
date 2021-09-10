declare global {
    interface Window {
        shiki: any;
    }
}

export default async function initializeHighlighter() {
    const highlighter = await window.shiki.getHighlighter({
        theme: "one-dark-pro",
    });

    return highlighter;
}
