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

function per(p) {
    nama.value += p
    let pjg = nama.value.length

    const temp = []
    for (let i = pjg - 2; i < pjg; i++) {
        temp.push(nama.value[i])
    }
    let tot = parseFloat(temp.substr(0, val.length - 2), 10) / 100;
    console.log(tot)

}

function getPercentage(val) {
    return parseFloat(val.substr(0, val.length - 1), 10) / 100;
}