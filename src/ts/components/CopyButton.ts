import crtElt from "crtelt";
import { copyHighlightedResult } from "../utils/highlighter";

export default function CopyButton() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svg.setAttribute("width", "1.5rem");
    svg.setAttribute("height", "1.5rem");
    svg.setAttribute("viewBox", "0 0 24 24");

    path.setAttribute(
        "d",
        "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
    );

    svg.append(path);

    return crtElt(
        "button",
        {
            className: "copy",
            events: {
                click: () => {
                    copyHighlightedResult();
                },
            },
        },
        svg
    );
}
