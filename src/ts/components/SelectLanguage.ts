import {
    data,
    getAvailableLanguages,
    highlight,
    setLanguage,
} from "../utils/highlighter";

export default function SelectLanguage() {
    const select = document.createElement("select");
    const languages = getAvailableLanguages();
    const Option = (value: string) => {
        const option = document.createElement("option");

        option.innerText = value;
        option.selected = value === data.language;

        return option;
    };

    languages.forEach((language) => {
        select.append(Option(language));
    });

    select.addEventListener("change", () => {
        setLanguage(languages[select.selectedIndex]);
        highlight();
    });

    return select;
}
