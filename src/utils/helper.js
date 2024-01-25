// let x = new Date("2023-03-29 08:04:00");
// undefined
// let y = new Date("2023-03-29 11:04:00");
// undefined
// x.getTime() > y.getTime();
// false
// x.getTime() < y.getTime();
// true
function compareTime(StringTime1, StringTime2) {
    let dateTime1 = new Date(StringTime1);
    let dateTime2 = new Date(StringTime2);
    return dateTime1.getTime() < dateTime2.getTime()
}

module.exports = {
    compareTime
};