//Homework 1
function getID(id) {
    return document.getElementById(id)
}

function onButton() {
    let schoolScore = getID('schoolscore').value * 1;
    let mon_1 = getID('mon_1').value * 1;
    let mon_2 = getID('mon_2').value * 1;
    let mon_3 = getID('mon_3').value * 1;
    let khuvuc = getID('khuVuc').value;
    let doituong = getID('doiTuong').value;
    //Lấy value của khu vực ưu tiên
    let diemKV = 0;
    switch (khuvuc) {
        case 'A':
            diemKV = 2;
            break;
        case 'B':
            diemKV = 1;
            break;
        case 'C':
            diemKV = 0.5;
            break;
        case 'X':
            diemKV = 0;
            break;
        default:
            alert('Vui lòng chọn khu vực ưu tiên')
            return;
    }
    //Lấy value của đối tượng ưu tiên
    let diemDT = 0;
    switch (doituong) {
        case '1':
            diemDT = 2.5;
            break;
        case '2':
            diemDT = 1.5;
            break;
        case '3':
            diemDT = 1;
            break;
        case 'khong':
            diemDT = 0;
            break;
        default:
            alert('Vui lòng chọn đối tượng ưu tiên');
            return;
    }
    //Tính toán điểm;
    let yourScore = 0;
    yourScore = mon_1 + mon_2 + mon_3 + diemKV + diemDT;
    //Xử lí điều kiện
    let yourResult = ''
    if (schoolScore <= 0 || mon_1 < 0 || mon_2 < 0 || mon_3 < 0) {
        alert('Vui lòng xem lại dữ liệu nhập vào')
    } else if (mon_1 === 0 || mon_2 === 0 || mon_3 === 0) {
        alert('Bạn đã bị điểm liệt nên không thể tính toán')

    } else if (schoolScore > 0 && schoolScore > yourScore) {
        yourResult = 'Rất tiếc, bạn đã rớt'
    } else {
        yourResult = 'Chúc mừng, bạn đã đậu.'
    }
    getID('displayResult_1').innerHTML = `
        <p>Điểm chuẩn là: ${schoolScore}.</p>
        <p>Điểm của bạn là: ${yourScore}.</p>
        <p>${yourResult}</p>
    `;
}

//Homework 2
const vndGD1 = 500;
const vndGD2 = 650;
const vndGD3 = 850;
const vndGD4 = 1100;
const vndGD5 = 1300;
let yourBill = 0;
function btnKW() {
    const yourName = getID('yourname').value;
    const yourKW = getID('yourKW').value * 1;
    if (yourKW <= 0) {
        alert('Dữ liệu nhập vào không hợp lệ')
    } else if (yourKW <= 50) {
        yourBill = yourKW * vndGD1;
    } else if (yourKW <= 100) {
        yourBill = 50 * vndGD1 + (yourKW - 50) * vndGD2
    } else if (yourKW <= 200) {
        yourBill = 50 * vndGD1 + 50 * vndGD2 + (yourKW - 100) * vndGD3
    } else if (yourKW <= 350) {
        yourBill = 50 * vndGD1 + 50 * vndGD2 + 100 * vndGD3 + (yourKW - 200) * vndGD4
    } else {
        yourBill = 50 * vndGD1 + 50 * vndGD2 + 100 * vndGD3 + 150 * vndGD4 + (yourKW - 350) * vndGD5
    }
    getID('displayResult_2').innerHTML = `
    <p>Họ và tên: ${yourName}.<p>
    <p>Số tiền phải trả: ${yourBill}<p>
    `;
}

//Homework 3
function onTaxBtn() {
    const fullName = getID('fullname').value;
    const yearIncome = getID('income').value * 1;
    const numPeoeple = getID('people').value * 1;
    let taxIncome = 0;
    taxIncome = yearIncome - 4e+6 - numPeoeple * 1.6e+6
    let realTax = 0;
    if (taxIncome <= 0) {
        alert('Dữ liệu nhập vào không hợp lệ')
    } else if (taxIncome <= 60e+6) {
        realTax = taxIncome * 0.05;
    } else if (taxIncome <= 120e+6) {
        realTax = 60e+6 * 0.05 + (taxIncome - 60e+6) * 0.1;
    } else if (taxIncome <= 210e+6) {
        realTax = 60e+6 * 0.05 + 60e+6 * 0.1 + (taxIncome - 120e+6) * 0.15;
    } else if (taxIncome <= 384e+6) {
        realTax = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + (taxIncome - 210e+6) * 0.2;
    } else if (taxIncome <= 624e+6) {
        realTax = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + (taxIncome - 384e+6) * 0.25;
    } else if (taxIncome <= 960) {
        realTax = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + (taxIncome - 624e+6) * 0.3;
    } else {
        realTax = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.3 + (taxIncome - 960e+6) * 0.35
    }
    getID('displayResult_3').innerHTML = `
    <p>Họ và tên: ${fullName}</p>
    <p>Thu nhập chịu thuế là: ${taxIncome} VND</p>
    <p>Thuế thu nhập cần phải trả là: ${realTax} VND</p>
    `
}

//Homework 4