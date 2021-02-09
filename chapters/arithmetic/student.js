function five() {
    return 5;
}
function average() {
    return (135 + 471) / 2;
}
function average2(x, y) {
    return (x + y) / 2;
}
function average3(x, y, z) {
    return (x + y + z) / 3;
}
function distance(x, y) {
    return (x ** 2 + y ** 2) ** 0.5;
}
function busesNeeded(people, busCapacity) {
    return Math.ceil(people/busCapacity);
}
function sugar(pies) {
    return Math.ceil(pies * 0.25);
}
function candyPerChild(children, candy) {
    return Math.floor(candy / children);
}
function leftoverCandy(children, candy) {
    return candy % children;
}
function hours(totalMinutes) {
    return Math.floor(totalMinutes / 60);
}
function minutes(totalMinutes) {
    return totalMinutes % 60;
}
function communicationCosts(seconds) {
    return Math.ceil(seconds / 60) * 0.2;
}
function distance2(x1, y1, x2, y2) {
    let a = (x2-x1) ** 2;
    let b = (y2-y1) ** 2;
    return (a + b) ** 0.5;
}
function cake(eggs){
    return Math.floor(eggs / 3);
}
function cake2(eggs, flour) {
    let x = Math.floor(eggs / 4);
    let y = Math.floor(flour / 250);
    return Math.min(x, y);
}
function cake3(eggs, flour, sugar, butter) {
    let a = Math.floor(eggs / 4);
    let b = Math.floor(flour / 250);
    let c = Math.floor(sugar / 250);
    let d = Math.floor(butter / 250);
    return Math.min(a, b, c, d);
}
function roundToMultiple(n, multipleOf){
    return Math.round(n / multipleOf) * multipleOf;
}
function middle(a, b, c) {
    return a + b + c - Math.min(a, b, c) - Math.max(a, b, c);
}
function boxArea(width, height, depth) {
    return (width * height + width * depth + height * depth) * 2;
}
function toPercent(k, n) {
    return (k / n) * 100;
}
function percentOf(p, n) {
    return (n / 100) * p;
}
function totalMinutes(hours, minutes){
    return hours * 60 + minutes;
}
function timeDifference(h1, m1, h2, m2){
    let a = h1 * 60 + m1;
    let b = h2 * 60 + m2;
    return b - a;
}