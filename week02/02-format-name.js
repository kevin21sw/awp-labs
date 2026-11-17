const formatName = ({ first, last, title = "Student" }) => {
    const capitalize = (name) => {
        const trimmed = name.trim();
        return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
    };

    return `${title}: ${capitalize(first)} ${capitalize(last)}`;
};

console.log(formatName({ first: "ana", last: "hoxha" }));

console.log(formatName({
    first: "BEN", last: "kola", title: "Lecturer",
}));
