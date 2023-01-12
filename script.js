var nama = document.getElementById('nama');

function i(l) {
    nama.value += l;
}

function ac() {
    nama.value = '';
}

function c() {
    let bs = nama.value.length - 1;
    nama.value = nama.value.slice(0, bs);
}

function h() {
    if (nama.value === '') {
        nama.value = '';
    } else {
        nama.value = eval(nama.value);
    }

}

function persen(p) {
    nama.value += p + 100
}
