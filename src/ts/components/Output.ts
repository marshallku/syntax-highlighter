import el from "../utils/el";
import { highlighter } from "../utils/highlighter";

export default function Output() {
    const div = el("div");

    highlighter.addOutputElement(div);

    return div;
}
