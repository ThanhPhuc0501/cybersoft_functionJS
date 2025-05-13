//Homework 1
function getID(id) {
    return document.getElementById(id)
}
//Lấy value của khu vực ưu tiên
function chooseKV() {
    let khuvuc = getID('khuVuc').value;
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
    return diemKV;
}
//Lấy value của đối tượng ưu tiên
function chooseDT() {
    let doituong = getID('doiTuong').value;
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
    return diemDT;
}
//Xử lí khi click vào button
function onButton() {
    const check_khuvuc = chooseKV();
    const check_doituong = chooseDT();
    let schoolScore = getID('schoolscore').value * 1;
    let mon_1 = getID('mon_1').value * 1;
    let mon_2 = getID('mon_2').value * 1;
    let mon_3 = getID('mon_3').value * 1;
    //Tính toán điểm;
    let yourScore = 0;
    yourScore = mon_1 + mon_2 + mon_3 + check_khuvuc + check_doituong;
    //Xử lí điều kiện
    let yourResult = '';
    if (schoolScore <= 0 || mon_1 < 0 || mon_2 < 0 || mon_3 < 0) {
        alert('Vui lòng xem lại dữ liệu nhập vào')
        return
    } else if (mon_1 === 0 || mon_2 === 0 || mon_3 === 0) {
        alert('Rất tiếc bạn đã có điểm liệt')
        return

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
    calcKw();
    getID('displayResult_2').innerHTML = `
    <p>Họ và tên: ${yourName}<p>
    <p>Số tiền phải trả: ${yourBill} VND.<p>
    `;
}
function calcKw() {
    const yourKW = getID('yourKW').value * 1;
    if (yourKW <= 0) {
        alert('Dữ liệu nhập vào không hợp lệ')
    } else if (yourKW <= 50) {
        yourBill = kwPhase1(yourKW);
    } else if (yourKW <= 100) {
        yourBill = kwPhase1(50) + kwPhase2(yourKW)
    } else if (yourKW <= 200) {
        yourBill = kwPhase1(50) + kwPhase2(100) + kwPhase3(yourKW)
    } else if (yourKW <= 350) {
        yourBill = kwPhase1(50) + kwPhase2(100) + kwPhase3(200) + kwPhase4(yourKW)
    } else {
        yourBill = kwPhase1(50) + kwPhase2(100) + kwPhase3(200) + kwPhase4(350) + kwPhase5(yourKW)
    }
}

function kwPhase1(yourKW) {
    const rs = yourKW * vndGD1;
    return rs;
}
function kwPhase2(yourKW) {
    const rs = (yourKW - 50) * vndGD2;
    return rs;
}
function kwPhase3(yourKW) {
    const rs = (yourKW - 100) * vndGD3;
    return rs;
}
function kwPhase4(yourKW) {
    const rs = (yourKW - 200) * vndGD4;
    return rs;
}
function kwPhase5(yourKW) {
    const rs = (yourKW - 350) * vndGD5
    return rs;
}

//Homework 3
const tax_1 = 0.05;
const tax_2 = 0.1;
const tax_3 = 0.15;
const tax_4 = 0.2;
const tax_5 = 0.25;
const tax_6 = 0.3;
const tax_7 = 0.35
let taxIncome = 0;
function onTaxBtn() {
    const fullName = getID('fullname').value;
    const yearIncome = getID('income').value * 1;
    const numPeoeple = getID('people').value * 1;    
    taxIncome = yearIncome - 4e+6 - numPeoeple * 1.6e+6
    let realTax = 0;
    if (taxIncome <= 0) {
        alert('Dữ liệu nhập vào không hợp lệ')
    } else if (taxIncome <= 60e+6) {
        realTax = taxIncome * tax_1;
    } else if (taxIncome <= 120e+6) {
        realTax = 60e+6 * tax_1 + (taxIncome - 60e+6) * tax_2;
    } else if (taxIncome <= 210e+6) {
        realTax = 60e+6 * tax_1 + 60e+6 * tax_2 + (taxIncome - 120e+6) * tax_3;
    } else if (taxIncome <= 384e+6) {
        realTax = 60e+6 * tax_1 + 60e+6 * tax_2 + 90e+6 * tax_3 + (taxIncome - 210e+6) * tax_4;
    } else if (taxIncome <= 624e+6) {
        realTax = 60e+6 * tax_1 + 60e+6 * tax_2 + 90e+6 * tax_3 + 174e+6 * tax_4 + (taxIncome - 384e+6) * tax_5;
    } else if (taxIncome <= 960) {
        realTax = 60e+6 * tax_1 + 60e+6 * tax_2 + 90e+6 * tax_3 + 174e+6 * tax_4 + 240e+6 * tax_5 + (taxIncome - 624e+6) * tax_6;
    } else {
        realTax = 60e+6 * tax_1 + 60e+6 * tax_2 + 90e+6 * tax_3 + 174e+6 * tax_4 + 240e+6 * tax_5 + 336e+6 * 0.3 + (taxIncome - 960e+6) * tax_7
    }
    getID('displayResult_3').innerHTML = `
    <p>Họ và tên: ${fullName}</p>
    <p>Thu nhập chịu thuế là: ${taxIncome} VND</p>
    <p>Thuế thu nhập cần phải trả là: ${realTax} VND</p>
    `
}


//Homework 4
function onCab() {
    const type_of_customer = getID('typeOfCustomer').value;
    const customer_code = getID('maKH').value;
    if (customer_code === '') {
        alert('Bạn vui lòng nhập mã khách hàng')
    }
    const num_of_channels = getID('channels').value;
    const num_of_connect = getID('connect').value;

    //Logical process
    let total_bill = 0;
    if (type_of_customer === 'nhadan') {
        total_bill = 4.5 + 20.5 + (num_of_channels * 7.5);
    } else if (type_of_customer === 'doanhnghiep') {
        if (num_of_connect <= 10) {
            total_bill = 15 + 75 + (num_of_channels * 50)
        } else {
            total_bill = 15 + 75 + (num_of_connect - 10) * 5 + (num_of_channels * 50);
        }
    } else {
        alert('Bạn chưa chọn loại khách hàng')
    }
    //display the logical result
    getID('displayResult_4').innerHTML = `
        <p>Mã khách hàng của bạn là: ${customer_code}</p>
        <p>Tổng hóa đơn tiền cáp của bạn là: ${total_bill}$</p> `;
}


