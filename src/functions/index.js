
export const findKeysWithPrefix = (object, prefix) => {
    const arr = [];
    for (const key in object) {
        if (key.toString().startsWith(prefix)) {
            arr.push(object[key]);
        }
    }
    arr.sort(); // Sort strings
    return arr;
};