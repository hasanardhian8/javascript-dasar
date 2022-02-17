let firstname = "asep"
console.log(firstname);

let a = firstname + " sunandar"
let b = firstname + "\tsunandar"
console.log(a);
console.log(b);

let c = a + "\nsebagai dalang"
console.log(c);

let dalang = "wayang golek"
dalang = `${c.replace("dalang","")} ${dalang}`
console.log(dalang); 

let golek = "cepot"
golek = golek.split("")
console.log(golek);
console.log(golek[2]);

let golek1 = golek.join("*")
console.log(golek1);