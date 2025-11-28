document.getElementById("absen").addEventListener("click", () => {
    let nama = document.getElementById("anggota").value;
    let tanggal = document.getElementById("tanggal").value;
    let kelas = document.getElementById("kelas").value;

    if (!nama || !tanggal || !kelas) {
        alert("Harap isi semua data absensi!");
        return;
    }

    let waktuInput = new Date().toLocaleString("id-ID");

    // Data kehadiran baru
    let dataBaru = { nama, kelas, tanggal, waktuInput };

    // Ambil data lama
    let dataLama = JSON.parse(localStorage.getItem("absensiPMR")) || [];
    dataLama.push(dataBaru);

    // Simpan
    localStorage.setItem("absensiPMR", JSON.stringify(dataLama));

    tampilkanData();
});

function tampilkanData() {
    let data = JSON.parse(localStorage.getItem("absensiPMR")) || [];
    let tabel = document.getElementById("tabelKehadiran");

    tabel.innerHTML = ""; // reset

    data.forEach(item => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${item.nama}</td>
            <td>${item.kelas}</td>
            <td>${item.tanggal}</td>
            <td>${item.waktuInput}</td>
        `;
        tabel.appendChild(tr);
    });
}

// tampilkan saat halaman pertama dibuka
tampilkanData();
