let pegawaimasuk = 31;
let kehadiranfull = 200000;
let gajian = 5000000;
let bonus = 500000;
let denda = 3000000;

if (pegawaimasuk >= 31) {
    console.log(`pegawai mendapatkan gaji sebesar ${gajian + bonus + kehadiranfull}`);
} else if (pegawaimasuk >= 20) {
    console.log(`pegawai mendapatkan gaji sebesar ${gajian + bonus}`);
} else if (pegawaimasuk <= 1) {
    console.log(`pegawai mendapatkan gaji sebesar ${gajian + bonus + kehadiranfull - denda}`);
}