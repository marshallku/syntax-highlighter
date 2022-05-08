interface HighlighterData {
    theme: string;
    language: string;
    code: string;
    highlighter?: any;
    outputElements: HTMLElement[];
    addOutputElement(element: HTMLElement): void;
}
