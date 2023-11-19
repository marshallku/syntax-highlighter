import crtElt from "crtelt";
import { highlighter } from "../utils/highlighter";

export default function Output() {
    const div = crtElt("div");

    highlighter.addOutputElement(div);

    return div;
}
