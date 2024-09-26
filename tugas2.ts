let namaPahlawan: string = "Arion";
let umur: number = 30;
let StatusSiapBerperang: boolean = true;

let emas: number = 5000;
let persediaanMakanan: number = 120;
let prajurit: number = 200;
let emasTambahan: number = 1500;
//! ARION MENDAPATKAN EMAS TAMBAHAN
console.log(" ");
console.log("total perolehan emas : ");
emas += emasTambahan;
console.log(emas);
let pengalamanBertarung: number = 75;
console.log(" ");

//! FUNTION PENGURANGAN KESEHATAN PRAJURIT
function kurangiKesehatan(
  jumlahPrajurit: number,
  jumlahPoinKesehatan: number
): number {
  let kesehatanPrajurit: number = 100;
  let totalKesehatan = kesehatanPrajurit - jumlahPoinKesehatan;
  if (totalKesehatan == 0) {
    console.log("Prajurit tidak bisa bertarung!");
  } else {
    console.log(`Total kesehatan setelah dikurangi: ${totalKesehatan}`);
  }
  return totalKesehatan;
}
//! Setiap prajurit kehilangan 5 poin kesehatan
kurangiKesehatan(100, 5);

console.log(" ");
console.log("Rangkuman misi aeron : ");
//! FUNCTION RANGKUMAN MISI AERON
function rangkumanMisi(): void {
  console.log("Nama pahlawan: " + namaPahlawan);
  console.log("Total perolehan emas : " + emas);
  console.log("Total poin yang di dapatkan : " + pengalamanBertarung + " XP");
}
rangkumanMisi();
