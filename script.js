// Mengambil elemen tombol dari DOM
const btnHitung = document.getElementById('btn-hitung');
const btnReset = document.getElementById('btn-reset');

// Menambahkan event listener pada tombol
btnHitung.addEventListener('click', hitungDeretGeometri);
btnReset.addEventListener('click', resetForm);

function hitungDeretGeometri() {
    // Mengambil nilai dari input
    const aInput = document.getElementById('a').value;
    const rInput = document.getElementById('r').value;
    const nInput = document.getElementById('n').value;
    const snInput = document.getElementById('sn');
    const pesanError = document.getElementById('pesan-error');

    // Reset pesan error
    pesanError.textContent = '';
    snInput.value = '';

    // Validasi input kosong
    if (aInput === '' || rInput === '' || nInput === '') {
        pesanError.textContent = 'Harap isi Suku Pertama (a), Rasio (r), dan Banyaknya Suku (n).';
        return;
    }

    // Mengkonversi input menjadi tipe angka (float)
    const a = parseFloat(aInput);
    const r = parseFloat(rInput);
    const n = parseFloat(nInput);

    // Validasi nilai n (harus bilangan bulat positif)
    if (n <= 0 || !Number.isInteger(n)) {
        pesanError.textContent = 'Banyaknya Suku (n) harus berupa bilangan bulat lebih dari 0.';
        return;
    }

    let Sn = 0;

    // Rumus Deret Geometri
    if (r === 1) {
        // Jika rasio = 1, deretnya konstan (a + a + a...)
        Sn = a * n;
    } else {
        // Jika rasio != 1
        // Rumus Sn = a * (r^n - 1) / (r - 1)
        Sn = (a * (Math.pow(r, n) - 1)) / (r - 1);
    }

    // Jika angkanya terlalu panjang/desimal, bulatkan maksimal 4 angka di belakang koma (opsional)
    // Supaya hasil bilangan bulat tetap tampil rapi, kita memformatnya
    let hasilFormat = Sn % 1 === 0 ? Sn : Sn.toFixed(4);

    // Tampilkan pada field Sn
    snInput.value = hasilFormat;
}

function resetForm() {
    document.getElementById('a').value = '';
    document.getElementById('r').value = '';
    document.getElementById('n').value = '';
    document.getElementById('sn').value = '';
    document.getElementById('pesan-error').textContent = '';
}