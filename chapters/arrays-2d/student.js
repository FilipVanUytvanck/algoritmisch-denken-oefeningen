function longest(xss) {
    let result = [];
    for (let xs of xss) {
        if (xs.length > result.length) {
                result = xs;
        }
    }
    return result;
}

function flatten(xss) {
    let result = [];
    for (let xs of xss) {
        result = [...result, ...xs];
    }
    return result;
}