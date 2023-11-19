import crtElt from "crtelt";
import {
    highlighter,
    getAvailableLanguages,
    highlight,
    setLanguage,
} from "../utils/highlighter";

export default function SelectLanguage() {
    const languages = getAvailableLanguages();
    const Option = (value: string) =>
        crtElt("option", { selected: value === highlighter.language }, value);

    return crtElt(
        "div",
        {
            className: "select-container",
        },
        crtElt("span", {}, "Languages: "),
        crtElt(
            "select",
            {
                events: {
                    change: ({ target }) => {
                        if (!(target instanceof HTMLSelectElement)) {
                            return;
                        }

                        setLanguage(languages[target.selectedIndex]);
                        highlight();
                    },
                },
            },
            ...languages.map((language) => Option(language))
        )
    );
}
