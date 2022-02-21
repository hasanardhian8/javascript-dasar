const foods = ["sup","pizza","pasta"]
console.log(foods);

// foods.push("indomie")
// foods.pop()
// foods.unshift("seblak")
// foods.shift()
foods.splice(1,1); //(no array, jml array)
console.log(foods);

const student = [
    {name : "code"},
    {name : " academy"}
]
console.log(student);

if (Array.isArray(foods)) {
    console.log("iya");
} else {
    console.log("bukan");
}

console.log(foods[2]);

for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}

const num = [32,2,5,65]
const sort = num.sort((a,b)=>a>b?1:-1) //indek a,b jika a lebih besar dari b indek 1 ke -1(kebelakang 1)
console.log(sort);
console.log(num.reverse());
//console.log(num.concat); untuk menggabungkan 2 array
// const permanent= Array.from(num) //mengcopi menjadi array baru dengan data diambil dari num
// num.length=0

num.forEach(e => console.log(e))

for(const el of num){
    console.log(el);
}

const angka = num.map(el =>{
    console.log(el);
})