const btnHitung = document.getElementById('btn-hitung');
const btnReset = document.getElementById('btn-reset');

btnHitung.addEventListener('click', hitungDeretGeometri);
btnReset.addEventListener('click', resetForm);

function hitungDeretGeometri() {
    const aInput = document.getElementById('a').value;
    const rInput = document.getElementById('r').value;
    const nInput = document.getElementById('n').value;
    const snInput = document.getElementById('sn');
    const pesanError = document.getElementById('pesan-error');

    pesanError.textContent = '';
    snInput.value = '';

    if (aInput === '' || rInput === '' || nInput === '') {
        pesanError.textContent = 'Harap isi Suku Pertama (a), Rasio (r), dan Banyaknya Suku (n).';
        return;
    }

    const a = parseFloat(aInput);
    const r = parseFloat(rInput);
    const n = parseFloat(nInput);

    if (n <= 0 || !Number.isInteger(n)) {
        pesanError.textContent = 'Banyaknya Suku (n) harus berupa bilangan bulat lebih dari 0.';
        return;
    }

    let Sn = 0;

    if (r === 1) {
        Sn = a * n;
    } else {
        Sn = (a * (Math.pow(r, n) - 1)) / (r - 1);
    }
    let hasilFormat = Sn % 1 === 0 ? Sn : Sn.toFixed(4);

    snInput.value = hasilFormat;
}

function resetForm() {
    document.getElementById('a').value = '';
    document.getElementById('r').value = '';
    document.getElementById('n').value = '';
    document.getElementById('sn').value = '';
    document.getElementById('pesan-error').textContent = '';
}
