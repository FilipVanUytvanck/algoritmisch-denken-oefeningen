function min2(x, y) {
    if (x < y) {
        return x;
    }
    else {
        return y;
    }
}
function abs(n) {
    if (n > 0) {
        return n; 
    }
    else {
        return -n;
    }
}
function sign(n) {
    if (n > 0) {
        return 1;
    }
    else if (n < 0) {
        return -1;
    }
    else {
        return 0;
    }
}
function passPercentage(a, b, c) {
    let passCount = 0;
    if (a >= 10) {
        passCount++;
    }
    if (b >= 10) {
        passCount++;
    }
    if (c >= 10) {
        passCount++;
    }
    return Math.round(passCount / 3 * 100);
}
function democracy(a, b, c, d, e) {
    let pro = 0;
    if (a)
        pro++;
    if (b)
        pro++;
    if (c)
        pro++;
    if (d)
        pro++;
    if (e)
        pro++;
    return pro >= 3;
}
function totalOrderCost(amount) {
    if (amount < 100) {
        amount += 10;
    }
    if (amount >= 200) {
        amount *= 0.9;
    }
    return amount;
}
function quadrants(x, y) {
if (x > 0 && y > 0) {
    return 1;
}
if (x > 0 && y < 0) {
    return 2;
}
if (x < 0 && y < 0) {
    return 3;
}
if (x < 0 && y > 0) {
    return 4;
}
else return 0;
}