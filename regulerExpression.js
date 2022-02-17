const cerita = "saya ikutan bootcamp java bersama code.id, di java saya belajar saync dan oop, java adalah dybnamic language"
const search = /java/g
console.log(cerita.replace(search,"javascript"));

const cerita2 = "aku tahu kamu suka makan tahu"
const search2 = /t\w{2}/g //w huruf "t" terus diikuti karakter
console.log(cerita2.replace(search2,"tau"));

const cerita3 = "disini ada beberapa list buah :"+"jamu,pisang,mangga. itu beberapa list buah"
const start = cerita3.indexOf(":")
const end = cerita3.indexOf(".",start)

const list = cerita3.slice(start + 1,end)
console.log(list);