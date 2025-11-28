// Load data ketika halaman dibuka
document.addEventListener("DOMContentLoaded", tampilkanData);

document.getElementById("absenForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let kelas = document.getElementById("kelas").value;
    let nomor = document.getElementById("nomor").value;
    let waktu = new Date().toLocaleString("id-ID");

    let data = { nama, kelas, nomor, waktu };

    // Simpan ke localStorage
    let daftar = JSON.parse(localStorage.getItem("absenPMR")) || [];
    daftar.push(data);
    localStorage.setItem("absenPMR", JSON.stringify(daftar));

    // Tambah ke tabel
    tambahKeTabel(data);

    // Reset form
    document.getElementById("absenForm").reset();
});

// Tambahkan secara visual ke tabel
function tambahKeTabel(item) {
    let tabel = document.getElementById("listAbsen");
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${item.nama}</td>
        <td>${item.kelas}</td>
        <td>${item.nomor}</td>
        <td>${item.waktu}</td>
    `;

    tabel.appendChild(row);
}

// Tampilkan semua data yang sudah tersimpan
function tampilkanData() {
    let daftar = JSON.parse(localStorage.getItem("absenPMR")) || [];
    daftar.forEach(item => tambahKeTabel(item));
}
