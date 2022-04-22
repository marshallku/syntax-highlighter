import el from "../utils/el";
import {
    data,
    getAvailableLanguages,
    highlight,
    setLanguage,
} from "../utils/highlighter";

export default function SelectLanguage() {
    const languages = getAvailableLanguages();
    const Option = (value: string) =>
        el("option", { selected: value === data.language }, value);

    return el(
        "div",
        {
            className: "select-container",
        },
        el("span", {}, "Languages: "),
        el(
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
