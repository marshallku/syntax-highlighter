import { data, getAvailableThemes, setTheme } from "../utils/highlighter";

export default function SelectTheme() {
    const select = document.createElement("select");
    const themes = getAvailableThemes();
    const Option = (value: string) => {
        const option = document.createElement("option");

        option.innerText = value;
        option.selected = value === data.theme;

        return option;
    };

    themes.forEach((theme) => {
        select.append(Option(theme));
    });

    select.addEventListener("change", () => {
        setTheme(themes[select.selectedIndex]);
    });

    return select;
}
