/*----------Bài 1---------- */
/*
     Thuế thu nhập trên năm:
        + 0 > 60.000.000 triệu : 5%
        + 60 triệu > 120 triệu : 10%
        + 120 triệu > 210 triệu : 15%
        + 210 triệu > 384 triệu : 20%
        + 384 triệu > 624 triệu : 25%
        + 624 triệu > 960 triệu : 30%
        + > 960 triệu: 35%

    Thu nhập chịu thuế = Tổng thu nhập năm - 4 triệu - Sô người phụ thuộc * 1.6 triệu
*/


document.getElementById('btnTinhTienThue').onclick = thueCaNhan;

function thueCaNhan() {
    var ten = document.getElementById('nhapHoTen').value;
    var thuNhapNam = Number(document.getElementById('thuNhapNam').value);
    var soNguoi = Number(document.getElementById('soNguoiPhuThuoc').value);

    var chiuThue = 0;

    var chiuThue = thuNhapNam - 4e6 - 16e5 * soNguoi;

    var thueCaNhan = 0;

    if (chiuThue > 0 && chiuThue <= 6e7) {
        thueCaNhan = 0.05 * chiuThue;
    } else if (chiuThue > 6e7 && chiuThue < 12e7) {
        thueCaNhan = 0.1 * chiuThue;
    } else if (chiuThue > 12e7 && chiuThue <= 21e7) {
        thueCaNhan = 0.15 * chiuThue;
    } else if (chiuThue > 21e7 && chiuThue <= 384e6) {
        thueCaNhan = 0.2 * chiuThue;
    } else if (chiuThue > 384e6 && chiuThue <= 624e6) {
        thueCaNhan = 0.25 * chiuThue;
    } else if (chiuThue > 624e6 && chiuThue <= 96e7) {
        thueCaNhan = 0.3 * chiuThue;
    } else if (chiuThue > 96e7) {
        thuNhapNam = 0.35 * chiuThue;
    }
    else {
        thueCaNhan = 'Số tiền thu nhập không hợp lệ !';
    }



    document.getElementById('ketQua_b1').innerHTML = 'Họ tên: ' + ten + '; Tiền thuế là: ' + thueCaNhan.toLocaleString() + ' VND';
}

/*----------Bài 2---------- */
document.getElementById('btnTinhTienCap').onclick = tinhTienCap;

function disableInput() {
    var chonKhachHang = document.getElementById('chonKhachHang').value;
    document.getElementById('soKetNoi').style.display = 'doanhNghiep' == chonKhachHang ? 'block' : 'none';

}

function tinhTienCap() {
    var chonKhachHang = document.getElementById('chonKhachHang').value;
    var nhapMaKhachHang = document.getElementById('nhapMaKhachHang').value;
    var soKenh = document.getElementById('soKenh').value;
    var soKetNoi = document.getElementById('soKetNoi').value;


    var tienCap = 0;

    if ('nhaDan' == chonKhachHang) {
        tienCap = tinhTong(4.5, 20.5, 7.5, soKenh, 0, 0);
    } else if ('doanhNghiep' == chonKhachHang) {
        tienCap = tinhTong(15, 75, 50, soKenh, soKetNoi, 5);
    } else {
        tienCap = 'Hãy chọn loại khách hàng !';
    }

    document.getElementById('ketQua_b2').innerHTML = 'Mã khách hàng: ' + nhapMaKhachHang + '; Tiền cáp: ' + new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(tienCap);
}

function tinhTong(chonKhachHang, nhapMaKhachHang, soKenh, soKetNoi, tienCap, ketNoiDau) {
    var tong = chonKhachHang + nhapMaKhachHang + soKenh * soKetNoi;
    return tienCap > 10 && (tong += (tienCap - 10) * ketNoiDau), tong;
}

