const num = [1,2,3,4,5]
const num1 = [6,7,8,9,10]

const gabung= num.concat(num1);

const gabung1=[...num,...num1,11,12,13]
console.log(gabung);
console.log(gabung1);

//distructuring Array

const program = ["java","js","phyton","sql","oracle","postgress"]
const [java,js,phtyon,sql,...database] = program //penmaaan -> ...database digunakan sebagi group nama

const Sql = program.indexOf("sql")

console.log(Sql);
console.log(program.includes("sql")); //utk mencari nama sql(true/false)
//console.log(program.lastIndexOf()); //utk mencxari kata terakhir, jika nama nya sama maka yang dimunculkan yang terakhir
console.log(num.find( i => i > 3)); //untuk mencari angka lebih dari 3