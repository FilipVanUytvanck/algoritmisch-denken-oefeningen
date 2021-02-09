function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

function sum(ns) {
    if (ns.length === 0) {
        return 0;
    } else {
        const first = ns[0];
        const rest = ns.slice(1);
        return first + sum(rest);
    }
}

function minimum(ns) {
    if (ns.length === 1) {
        return ns[0];
    } else {
        const first = ns[0];
        const rest = ns.slice(1);
        const minimumOfRest = minimum(rest);
        if (first < minimumOfRest) {
            return first;
        } else {
            return minimumOfRest;
        }
    }
}

function maximum(ns) {
    if (ns.length === 1) {
        return ns[0];
    } else {
        const [first, ...rest] = ns;
        const maximumOfRest = maximum(rest);
        if (first > maximumOfRest) {
            return first;
        } else {
            return maximumOfRest;
        }
    }
}

function isIncreasing(ns) {
    if (ns.length < 2) {
        return true;
    } else {
        const [first, second, ...rest] = ns;
        return first <= second && isIncreasing([second, ... rest]);
    }
}

function contains(xs, x) {
    if (xs.length === 0) {
        return false;
    } else {
        const [first, ...rest] = xs;
        return first === x || contains(rest,x);
    }
}

function allPositive(ns) {
    if (ns.length === 0) {
        return true;
    } else {
        const [first, ...rest] = ns;
        return first > 0 && allPositive(rest);
    }
}

function count(xs, x) {
    if (xs.length === 0) {
        return 0;
    } else {
        const [first, ...rest] = xs;
        const countInRest = count(rest,x);
        if (x === first) {
            return countInRest + 1;
        } else {
            return countInRest;
        }
    }
}

function repeat(n, x) {
    if (n === 0) {
        return [];
    } else {
        return [x, ...repeat(n - 1, x)];
    }
}

function range(from, to) {
    if (from > to) {
        return [];
    } else {
        const suffix = range(from + 1, to);
        return [from, ...suffix];
    }
}

function indexOf(xs, x) {
    if (xs[0] === x) {
        return 0;
    } else {
        return indexOf(xs.slice(1),x) + 1;
    }
}

function replaceAt(xs, index, x) {
    if (index === 0) {
        const rest = xs.slice(1);
        return [x, ...rest];
    } else {
        const [first, ...rest] = xs;
        const replacedRest = replaceAt(rest, index - 1, x);
        return [first, ...replacedRest];
    }
}

function equalArrays(xs, ys) {
    if (xs.length === 0) {
        return ys.length === 0;
    } else if (ys.length === 0) {
        return false;
    } else {
        return xs[0] === ys[0] && equalArrays(xs.slice(1), ys.slice(1));
    }
}

function isPalindrome(string) {
    if (string.length <= 1) {
        return true;
    } else {
        const first = string[0];
        const last = string[string.length - 1];
        if (first === last) {
            const middle = string.slice(1, string.length - 1);
            return isPalindrome(middle);
        } else {
            return false;
        }
    }
}

function startsWith(beginning, string) {
    if (beginning.length === 0) {
        return true;
    } else if (string.length === 0) {
        return false;
    } else {
        return beginning[0] === string[0] && startsWith(beginning.substring(1), string.substring(1));
    }
}

function endsWith(ending, string) {
    if (ending.length === 0) {
        return true;
    } else if (string.length === 0) {
        return false;
    } else {
        return lastchar(ending) === lastchar(string) && endsWith(dropLastChar(ending), dropLastChar(string));
    }

    function lastchar (s){
        return s[s.length - 1];
    }

    function dropLastChar (s) {
        return s.substring(0, s.length - 1);
    }
}

function isSubstring(sub, string) {
    if (string.length === 0) {
        return sub.length === 0;
    } else {
        return startsWith(sub, string) || isSubstring(sub, string.substring(1));
    }
}