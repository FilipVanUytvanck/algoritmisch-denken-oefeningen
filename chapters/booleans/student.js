function isPositive(x) {
    return x>=0;
    }
    function isNegative(x) {
        return x<=0;
    }
    function isDivisibleBy(x, y) {
        return x % y === 0;
    }
    function inRange(x, min, max){
        return x >= min && x <= max;
    }
    function pingPong(score1, score2){
        return score1 >= 11 && score1 - score2 >= 2;
    }
    function freeTicket(age){
        return age < 12 || age >= 65;
    }
    function has30Days(month){
        return month === 4 || month === 6 || month === 9 || month === 11;
    }
    function has31Days(month){
        return month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12;
    }
    function isLeapYear(year) {
        return isDivisibleBy(year, 4) && (!isDivisibleBy(year, 100) || isDivisibleBy(year, 400));
    }
    function has28Days(month, year) {
        return month === 2 && !isLeapYear(year);
    }
    function has29Days(month, year) {
        return month === 2 && isLeapYear(year);
    }
    function isValidDate(day, month, year){
        return inRange(month, 1, 12) && ((has31Days(month) && inRange(day, 1, 31)) || (has30Days(month) && inRange(day, 1, 30)) || (has28Days(month, year) && inRange(day, 1, 28)) || (has29Days(month, year) && inRange(day, 1, 29)));
    }