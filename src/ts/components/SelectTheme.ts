import crtElt from "crtelt";
import {
    highlighter,
    getAvailableThemes,
    setTheme,
} from "../utils/highlighter";

export default function SelectTheme() {
    const themes = getAvailableThemes();
    const Option = (value: string) =>
        crtElt("option", { selected: value === highlighter.theme }, value);

    return crtElt(
        "div",
        {
            className: "select-container",
        },
        crtElt("span", {}, "Theme: "),
        crtElt(
            "select",
            {
                events: {
                    change: ({ target }) => {
                        if (!(target instanceof HTMLSelectElement)) {
                            return;
                        }

                        setTheme(themes[target.selectedIndex]);
                    },
                },
            },
            ...themes.map((theme) => Option(theme))
        )
    );
}
