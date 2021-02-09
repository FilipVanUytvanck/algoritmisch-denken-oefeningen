function first(xs) {
    return xs[0];
}
function last(xs) {
    return xs[xs.length-1];
}

function sum(ns) {
    let total = 0;
    for (let i = 0; i !== ns.length; i++) {
        total += ns[i];
    }
    return total;
}

function contains(value, xs) {
    for (let i = 0; i !== xs.length; i++) {
        const currentElement = xs[i];

        if (currentElement === value) {
            return true;
        }
    }
    return false;
}

function all(bs) {
    for (let b of bs) {
        if (!b) {
            return false;
        }
    }
    return true;   
}

function any(bs) {
    for (let b of bs) {
        if (b) {
            return true;
        }
    }
    return false;   
}

function repeat(n, x) {
    const result = new Array(n);
    for (let i = 0; i !== n; ++i) {
        result[i] = x;
    }
    return result;
}

function range(from, to) {
    const result = [];
    for (let i = from; i <= to; ++i) {
        result.push(i);
    }
    return result;
}

function incrementEach(ns) {
    for (let i = 0; i !== ns.length; ++i) {
        ns[i]++;
    }
}

function clamp(ns, min, max) {
    for (let i = 0; i !== ns.length; ++i) {
        if (ns[i] < min) {
            ns[i] = min;
        }
        else if (ns[i] > max) {
            ns[i] = max;
        }
    }
}

function trimZeros(ns) {
    while (ns.length > 0 && ns[0] === 0) {
        ns.shift();
    }
    while (ns.length > 0 && last(ns) === 0) {
        ns.pop();
    }
}

function last(xs) {
    return xs[xs.length - 1];
}

function cut(xs, size) {
    while (xs.length > size) {
        xs.pop();
    }
}

function repeat2(n, xs) {
    let result = [];
    for (let i = 0; i !== n; ++i) {
        result = [...result, ...xs]
    }
    return result;
}

function count(value, xs) {
    let result = 0;
    for (const x of xs) {
        if (x === value) {
            result++;
        }
    }
    return result;
}

function minimum(ns) {
    let result = Number.POSITIVE_INFINITY;
    for (let n of ns) {
        if (result > n) {
            result = n;
        }
    }
    return result;
}

function allEqual(xs) {
    for (let i = 0; i < xs.length; ++i) {
        if (xs[i] !== xs[0]) {
            return false;
        }
    }
    return true;
}

function allDifferent(xs) {
    for (let i = 0; i !== xs.length; ++i) {
        for (let j = i + 1; j < xs.length; ++j) {
            if (xs[i] === xs[j] ) {
                return false;
            }
        }
    }
    return true;
}

function missingNumber(ns) {
    for (let i = 0; i < ns.length - 1; ++i) {
        if (ns[i] + 1 !== ns[i + 1]) {
            return ns[i] + 1;
        }
    }
    return 0;
}

function restaurant(entrees, mainCourses, desserts, budget) {
    let selection = [0, 0, 0];
    let selectionSum = 0;
    for (const entree of entrees) {
        for (const mainCourse of mainCourses) {
            for (const dessert of desserts) {
                const sum = entree + mainCourse + dessert;
                if (selectionSum < sum && sum <= budget) {
                    selection = [entree, mainCourse, dessert];
                    selectionSum = sum;
                }
            }
        }
    }
    return selection;
}