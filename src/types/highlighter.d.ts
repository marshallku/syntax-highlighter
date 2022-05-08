interface HighlighterData {
    theme: string;
    language: string;
    code: string;
    outputElements: HTMLElement[];
    addOutputElement(element: HTMLElement): void;
}
