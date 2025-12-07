const input = require('prompt-sync')({ sigint: true})

const nilai = Number(input("Masukkan nilai anda: "))
let indeks;

if (nilai > 75) {
    indeks = "A"
} else {
    indeks = "Remedial"
}

console.log(indeks)