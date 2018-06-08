// JavaScript Document
	function XinChao(){
	alert('Xin chào và hẹn gặp lại ở chương trình lần sau');
}
	function facebook(){
		window.open('https://www.facebook.com','_self');
	}
var HoiEm = prompt('Bạn tên là gì ?');
	if (HoiEm === 'Hà Thị Kim Phụng' || HoiEm === 'Phụng' || HoiEm === 'Phung' || HoiEm === 'Kim Phụng' || HoiEm === "Hùng" ){
		document.write('Xin chào, ' +'' + HoiEm + '</br></br>');
		document.write('<button onclick="XinChao()"> Chào tôi đi</button>');
		document.write('<button onclick="facebook()" class="button1"> Không thích thì quay lại facebook nha </button>')
	}
	else if (HoiEm === "Long"){
		document.write('Địt mẹ mày, ' + '' + HoiEm + '<br><br>');
		document.write('<button onclick="XinChao() class="button2"> Chào tao đi mày </button>');
		document.write('<button onclick="facebook()" class="button1"> Không thích thì quay lại facebook này </button>');
	}
	else {
		window.open('profile.html',"_self");
	}