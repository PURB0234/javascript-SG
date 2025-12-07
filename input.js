const input = require('prompt-sync')({ sigint: true})

const sapa = "Halo"
const nama = input("Masukkan nama anda: ")
const tahunLahir = Number(input("Masukkan umur anda: ")) 
const umur = 2025 - tahunLahir

console.log(sapa +" "+ nama)
console.log(`Halo nama saya ${nama}, umur saya ${umur}`)