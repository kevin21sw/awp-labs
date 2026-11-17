const getGrade = (points) => {
    if (typeof points !== "number" || !Number.isFinite(points) || points < 0 || points > 100) {
        throw new Error("Invalid points");
    }

    if (points <= 40) return 4;
    if (points <= 50) return 5;
    if (points <= 60) return 6;
    if (points <= 70) return 7;
    if (points <= 80) return 8;
    if (points <= 90) return 9;
    return 10;
};

console.log(getGrade(95));
console.log(getGrade(72));
console.log(getGrade(41));
console.log(getGrade(35));
getGrade(120);
