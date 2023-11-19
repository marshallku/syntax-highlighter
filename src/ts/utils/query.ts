export const getQuery = () => {
    const params = new URLSearchParams(window.location.search);
    const result: Record<string, string> = {};

    for (const [key, value] of params.entries()) {
        result[key] = value;
    }

    return result;
};

export const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(window.location.search);

    params.set(key, value);

    window.history.replaceState(
        window.history.state,
        "",
        `${window.location.pathname}?${params.toString()}`
    );
};
