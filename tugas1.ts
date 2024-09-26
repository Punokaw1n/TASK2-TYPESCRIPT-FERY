//! STRING
let nama: string = "Fery Yulia Rahman";
const alamat: string = "Surabaya Jawa timur";

//!NUMBER INT
let age: number = 21;

//! NUMBER FLOAT
let tinggiBadan: number = 1.65;

//! BOOLEAN
let lulus: boolean = false;

//! UNDEFIND
let pekerjaan: undefined = undefined;

//!NULL
let nilai: null = null;

//! UNION TYPES
let value: string | number;

//!TYPE ALIASES
type StringOrBoolean = string | boolean;

//!SYMBOL
const uniqueSymbolPassword: symbol = Symbol("myUniqueSymbolPassword");

//! ANY
let whatever: any = "Ini bisa di isi apa saja";

//! ENUM
enum Warna {
  Pink,
  Hijau,
  Salmond,
}
let warnaFavorit: Warna = Warna.Salmond;

//! Array of Numbers
let nilaiExamp: number[] = [70, 80, 95];

//! ARRAY OF STRING
let daftarNamaKu: string[] = ["Fery", "Yulia", "Rahman"];

//! ARRAY OF ANY
let mix: any[] = [20, "Fery", true];

//!TUPLE
let koordinat: [number, number] = [10.5, 15.2];

//! UNKNOWN
let tipeDataTakDiketahui: unknown = "Bisa tipe apa saja";

//! OBJECK
let dataDiri: { nama: string; umur: number; lulus: boolean } = {
  nama: "Fery",
  umur: 20,
  lulus: false,
};
//! INTERFACE
interface Person {
  firstName: string;
  lastName: string;
  alamat: string;
  menikah: boolean;
  age: number;
}

//! VOID
function funcVodi(): void {
  console.log("Pesan telah dicetak. digunakan untuk tanpa return value");
}
//! FUNTION TYPE
let kali: (a: number, b: number) => number = function (a, b) {
  return a * b;
};
//! FUNCTION NEVER
function errorMessage(message: string): never {
  throw new Error(message);
}
//! LITERAL TYPES
let arahAngin: "tenggara" | "barat" = "tenggara";

//! READONLY ARRAY
let daftarBaca: readonly number[] = [1, 2, 3];

//! INTERSECTION TYPE
type orang = { nama: string };
type pekerjaan = { pekerjaan: string };
let orang: orang & pekerjaan = { nama: "Fery", pekerjaan: "Supir Bis" };

//! TYPE ASSERTION
let panjangAngka: any = "1000";
let angkaDariString: number = (panjangAngka as string).length;

console.log(nama);
console.log(orang);
console.log(angkaDariString);
console.log(age);
console.log(tinggiBadan);
console.log(koordinat);
console.log(kali(2, 1));
console.log(errorMessage);
console.log(" ");
console.log("FUNCTION OPERASI MATEMATIKA : ");
console.log(" ");

//?  TUGAS FUNTION OPERASI MATEMATIKA
//! SAYA MENNGGUNAKAN 2 FUNCTION TYPESCRIPT DAN 2 LAGI ARROW FUNCTION TYPESCRIPT
function penjumlahan(x: number, y: number): number {
  return x + y;
}
function perkalian(x: number, y: number): number {
  return x * y;
}
const pengurangan = (x: number, y: number): number => {
  return x - y;
};
const pembagian = (x: number, y: number): number => {
  return x / y;
};
console.log("hasil penjumlahan " + penjumlahan(10, 10));
console.log("hasil perkalian " + perkalian(10, 10));
console.log("hasil pengurangan " + pengurangan(10, 10));
console.log("hasil pembagian " + pembagian(10, 10));
