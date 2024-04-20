function KiemTraTenDN() {
	var re = /^[a-zA-Z]\w*$/; // Updated regular expression to allow both lower and upper case letters
	var input = document.getElementById('txtDN').value.trim();
	var errorSpan = document.getElementById('tendn');
	if (re.test(input)) {
		errorSpan.innerText = ""; // Clear error message if input is valid
		return true;
	} else {
		errorSpan.innerText = " * Bắt buộc, bắt đầu bằng ký tự và không có khoảng trắng"; // Updated error message
		return false;
	}
}
function KiemTraMK() {
	var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Strong password regex
	var input = document.getElementById('txtMK').value.trim();
	var errorSpan = document.getElementById('mk');
	if (re.test(input)) {
		errorSpan.innerText = ""; // Clear error message if input is valid
		return true;
	} else {
		errorSpan.innerText = "* Tối thiểu 8 ký tự, ít nhất 1 chữ hoa, 1 số, và 1 ký tự đặc biệt"; // Updated error message
		return false;
	}
}
function KiemTraXNMK() {
	var password = document.getElementById('txtMK').value.trim();
	var confirmPassword = document.getElementById('txtXNMK').value.trim();
	var errorSpan = document.getElementById('xnmk');
	if (password === confirmPassword) {
		errorSpan.innerText = ""; // Clear error message if passwords match
		return true;
	} else {
		errorSpan.innerText = "* Mật khẩu không khớp"; // Updated error message
		return false;
	}
}
function KiemTraDate() {
	var dob = new Date(document.getElementById('txtNS').value);
	var eighteenYearsAgo = new Date();
	eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 16); // Allow users older than 16
	var errorSpan = document.getElementById('ngaysinh');
	if (dob <= eighteenYearsAgo) {
		errorSpan.innerText = ""; // Clear error message if date is valid
		return true;
	} else {
		errorSpan.innerText = "* Phải trên 16 tuổi"; // Updated error message
		return false;
	}
}
function KiemTraDienThoai() {
	var re = /^(09|03|07|06|05|04)[0-9]{8}$/; // Phone number regex
	var input = document.getElementById('txtDT').value.trim();
	var errorSpan = document.getElementById('dienthoai');
	if (re.test(input)) {
		errorSpan.innerText = ""; // Clear error message if input is valid
		return true;
	} else {
		errorSpan.innerText = "* Số điện thoại không hợp lệ"; // Updated error message
		return false;
	}
}
function KiemTraEmail() {
	var re = /\S+@\S+\.\S+/;
    var input = document.getElementById('txtEmail').value.trim();
    var errorSpan = document.getElementById('email');
    if (re.test(input)) {
        errorSpan.innerText = "";
        return true;
    } else {
        errorSpan.innerText = "* Email không hợp lệ";
        return false;
    }
}
function KiemTra() {
	if (KiemTraTenDN() && KiemTraMK() && KiemTraXNMK() && KiemTraDate() && KiemTraDienThoai() && KiemTraEmail()) {
		return true; // Submit the form if all validations pass
	} else {
		alert('Vui lòng kiểm tra lại thông tin!'); // Display alert if any validation fails
		return false;
	}
}