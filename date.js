const today = new Date()
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDay());
console.log(today.getDate());

console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

const today1 = new Date(2021,8,3)
console.log(today1);

/*const today2 = new Date("2022-02-18T03:22:18.484Z") //
console.log(today2);*/

//add date
const now = new Date()
const currentdate = now.getDate()
now.setDate(currentdate+10)
console.log(now);

//add year
const now1 = new Date()
const currentdate1 = now1.getFullYear()
now1.setFullYear(currentdate1+10)
console.log(now1);

console.log(`format date : ${new Intl.DateTimeFormat("id-ID").format(now)}`);

const start = new Date("Sep 3, 2021")

if (!(start instanceof Date)) {
    console.log(`${start} is not valid formatted date`);
}