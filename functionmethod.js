const program = ["java","js","phyton","sql","oracle","postgress"]
const db = program.filter(e => e.startsWith("ora")) //mencari nama depan ora(jadi array)
const db1 = program.find(e1 => e1.startsWith("ora")) //mencari nama depan ora(jadi string)
console.log(db);
console.log(db1);

const data = ["nasi","bakar","nasi","kuning","nasi","babat"]
const re = data.reduce((acc,data) =>{
    const count = acc[data]
    count ? acc[data] = count + 1 : acc[data] = 1
    return acc
},{} )
console.log(re);