function allPositive(ns) {
    for (let n of ns) {
        if (n < 0) {
            return false;
        }
    }
    return true;
}

function allNegative(ns) {
    for (let n of ns) {
        if (n > 0) {
            return false;
        }
    }
    return true;
}

function allOdd(ns) {
    for (let n of ns) {
        if (n % 2 === 0) {
            return false;
        }
    }
    return true;
}

function allPositive2(ns) {
    return ns.every(isPositive);
}

function isPositive(n) {
    return n > 0;
}

function allNegative2(ns) {
    return ns.every(isNegative);
}

function isNegative(n) {
    return n < 0;
}

function allOdd2(ns) {
    return ns.every(isOdd);
}

function isOdd(n) {
    return n % 2 !== 0;
}

function allZero(nss) {
    return nss.every(isRowZero);
}

function isRowZero(ns) {
    return ns.every(isZero);
}

function isZero(n) {
    return n === 0;
}

function somePositive(ns) {
    return ns.some(isPositive);
}

function someZero(nss) {
    return nss.some(hasRowZero);
}

function hasRowZero(ns) {
    return ns.some(isZero);
}

function allEqualTo(xs, value) {
    return xs.every(isEqual);

    function isEqual(x) {
        return x === value;
    }
}

function contains(xs, value) {
    return xs.some(hasValue);

    function hasValue(x) {
        return x === value;
    }
}

function contains2(xs, value) {
    return xs.some(x => x === value);
}

function isUpperBound(ns, k) {
    return ns.every(n => k >= n);
}

function maximum(ns) {
    return ns.find(n => isUpperBound(ns,n));
}

function allEqual(xs) {
    return xs.every(x => allEqualTo(xs, x));
}

function isSubset(xs, ys) {
    return xs.every(x => ys.includes(x));
}

function inflation(prices) {
    return prices.map(price => Math.round(1.1 * price));
}

function toSeconds(duration) {
    return duration.map(duration => duration[0] * 3600 + duration[1] * 60 + duration[2]);
}

function flipAll(xs) {
    return xs.map(pair => [pair[1], pair[0]]);
}

function toSeconds2(durations) {
        return durations.map(([h,m,s]) => h * 3600 + m * 60 + s);
}

function flipAll(xs) {
    return xs.map(([x, y]) => [y, x])
}

function findFirstPositive(ns) {
    return ns.find(n => n > 0);
}

function findLastPositive(ns) {
    return [...ns].reverse().find(n => n > 0);
}