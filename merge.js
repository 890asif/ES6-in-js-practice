function mergeInventory(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        return "Invalid";
    }

    return [...array1, ...array2];
}

function highestScore(scores) {
    if (!Array.isArray(scores)) {
        return "Invalid";
    }

    return Math.max(...scores);
}

console.log(mergeInventory([1, 2], [3, 4]));
console.log(mergeInventory("1,2", [3, 4]));

console.log(highestScore([3, 7, 2, 9, 4]));
console.log(highestScore("3,7,2"));