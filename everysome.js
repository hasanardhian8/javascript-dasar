const num = [1,2,3,4,5,6]

const every = num.every(el=>el % 2 === 0) //mengecek setiap index di array harus sama semua benar, jika salah satu beda maka akan false
console.log(every);

const some = num.some(e2 => e2 % 2 === 0) //mengecek setiap index di array salah satu benar maka benar
console.log(some);

const set = new Set(num) //menampilkan num yang beda jika sama maka yang ditampilkan hanya satu saja
console.log(set);

// const add = set.add(10) //menambahakan index array no 10

// const deleted = set.delete(4) //menghapus index array no 4

// const clear = set.clear() //menghapus semua data

const carts = new Map()
carts.set(1,"indomie")
carts.set(2,"sarimi")
carts.set(3,"sedap")
console.log(carts);

