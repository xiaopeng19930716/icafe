var tip = document.getElementById("tips");
//登录页
pageShow("bar-icon", "login-close-botton", "login-page");
//bid打开页面的按钮cid关闭页面的按钮pid页面
function pageShow(bid, cid, pid) {
	var icon = document.getElementById(bid);
	var closeBtn = document.getElementById(cid);
	var page = document.getElementById(pid);
	var form = document.getElementsByClassName("input");
	//点击关闭页面按钮关闭页面
	closeBtn.onclick = function () {
		page.style.display = "none";
		tip.innerHTML = "";
	}
	icon.onclick = function () {
		if (page.style.display == "none") {
			page.style.display = "block";
		} else if(page.style.display == "block"){
				page.style.display = "none";
				tip.innerHTML = "";
		}
	}
	// 页面区域外悬浮时关闭页面
	page.addEventListener("mouseover", function (e) {
		e = e || window.event;
		e.stopPropagation();
	});
	document.addEventListener("mouseover", function () {
			page.style.display = "none";
			tip.innerHTML = "";
	});

}
//勾选复选框记住输入文本
remAccount("user-name", "rem-name");
function remAccount(vid, cid) {
	var input = document.getElementById(vid);
	var check = document.getElementById(cid);
	check.onchange = function name(params) {
		if (this.checked) {
			input.setAttribute("autocomplete", "on");
		} else {
			input.setAttribute("autocomplete", "off")
		}
	}
}
// 注册页
//检测是否为电话号码或者邮箱方法
function check(value) {
	//电话为1开头后紧跟包含10个数字结尾的字符串
	var reg = /^1\d{10}$/;
	//邮箱由字母、数字、下划线、短线“-”、点号“.”组成，
	//第二部分为一个域名，域名由字母、数字、短线“-”、域名后缀组成
	var regx = /^([0-9A-Za-z_\-\.])+\@([0-9A-Za-z_\-\.])+\.([A-Za-z]{2,4})$/;
	if (value.match(regx) || value.match(reg)) {
		return true;
	}
	else {
		return false;
	}
}
function contrasts(inp1, inp2) {
	var val1 = document.getElementById(inp1).value;
	var val2 = document.getElementById(inp2).value;
	if (val1 == val2) {
		return true;
	} else {
		return false;
	}
}
//打开注册页
pageShow("register-icon", "register-close-botton", "register-page");
//点击第二个输入框时验证用户名是否格式正确,不正确定位到用户名，点击提交时验证两次密码是否一致，不一致定位到第三个框
var user = document.getElementById("user");
user.addEventListener("blur", function () {
	if (!check(this.value)) {
		tip.innerHTML = "用户名不符合格式";
		this.focus();
	} else {
		tip.innerHTML = "";
	}
});
//注册验证
document.getElementById("register-button").addEventListener("click", function () {
	if (contrasts("password", "con-password") && check(user.value)) {
		document.getElementById("regsiter-form").submit();
		tip.innerHTML = "";
		alert("注册成功");
	}
	else if (!contrasts("password", "con-password")) {
		tip.innerHTML = "两次输入密码不一致";
	}
	else {
		tip.innerHTML = "用户名不符合格式";
		user.focus();
	}
});
// //ajax验证如果存在用户名相同的则不允许注册
// var xmlhttp
// function httpRequest() {
// 	if (window.ActiveXObject) {
// 		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
// 	} else if (window.XMLHttpRequest) {
// 		xmlhttp =new XMLHttpRequest();
// 	}
// 	xmlhttp.onreadystagechange=function () {
// 		if (xmlhttp.readyState == 4&&xmlhttp.status == 200) {
// 			var text = xmlhttp.responseText;
// 			var user=document.getElementById("user");
// 			user.innerHTML =text;
// 		}
// 	}
// 	xmlhttp.open("GET",url,true);
// 	xmlhttp.send("name="+value);
// }
//我的收藏
//加入会员
acount();
function acount() {
	var rFix = document.getElementById("r-fix");
	var barList = document.getElementById("bar-list");
	var x = document.getElementById("favorites");
	var y = document.getElementById("be-vip");
	var offset = barList.offsetWidth - rFix.offsetWidth;
	//收藏
	document.getElementById("my-favorites").onclick = function () {
		var right = parseFloat(rFix.style.right) * 16;//16为字体大小
		//边框打开状态下并且显示内容为当前对应时关闭边框
		if (right == 0 && x.style.display == "block") {
			// x.style.display = "none";
			rFix.style.right = offset + "px";
		}
		//边框打开状态下并且显示内容为其他页面时隐藏其他页面页显示当前页面
		else if (right == 0 && x.style.display == "none") {
			y.style.display = "none";
			x.style.display = "block";
		}
		// 其他情况打开边框打开对应页面
		else {
			y.style.display = "none";
			x.style.display = "block";
			rFix.style.right = "0px";
		}
	}
	//会员
	document.getElementById("vip").onclick = function () {
		var right = parseFloat(rFix.style.right) * 16;//16为字体大小
		//边框打开状态下并且显示内容为当前对应时关闭边框
		if (right == 0 && y.style.display == "block") {
			// y.style.display = "none";
			rFix.style.right = offset + "px";
		}
		//边框打开状态下并且显示内容为其他页面时隐藏其他页面页显示当前页面
		else if (right == 0 && y.style.display == "none") {
			x.style.display = "none";
			y.style.display = "block";
		}
		// 其他情况打开边框打开对应页面
		else {
			x.style.display = "none";
			y.style.display = "block";
			rFix.style.right = "0px";
		}
	}
	//在边框区域外点击时关闭边栏
	document.addEventListener("click", function () {
		rFix.style.right = offset + "px";
	});
	rFix.addEventListener("click", function (e) {
		e = e || window.event;
		e.stopPropagation();
	});
}

//微信图片
weChat("chat-with-us", "we-chat");
//显示位置随按钮位置垂直方向定位
function weChat(eid, tid) {
	var e = document.getElementById(eid);
	var t = document.getElementById(tid);
	t.onmouseout = e.onmouseout = function () {
		t.style.display = "none";
	}
	t.onmouseover = e.onmouseover = function () {
		t.style.display = "block";
	}
	//注意不能放到开始执行
	t.style.display = "none";
	t.style.top = e.offsetTop + "px";
	//定时更新位置
	window.onresize = function () {
		t.style.top = e.offsetTop + "px";
	}
}

//header部分设置轮播图
//定位每一张照片
var pic = document.getElementsByClassName("pic");
var piclist = document.getElementById("piclist");
var span = document.getElementById("select-list").children;
var nextpic = document.getElementById("next");
var prvpic = document.getElementById("prv");
var index = 0;
var counter = 0;
//下一张
nextpic.onclick = function () {
	//获取当前left值;
	//向左移动一个width；
	changeIndexNext(pic);
	for (let index = 0; index < pic.length; index++) {
		var left = parseFloat(pic[index].style.left);
		var width = pic[index].offsetWidth;
		pic[index].style.left = (left - width) + "px";
		if (parseFloat(pic[index].style.left) <= (-3 * width)) {
			pic[index].style.left = (left + 4 * width) + "px";
		}
	}

	var main = getMain(pic);
	changeButton(span, main);
}

// 上一张
prvpic.onclick = function () {
	//获取当前left值;
	//向左移动一个width；
	changeIndexPrv(pic);
	for (let index = 0; index < pic.length; index++) {
		let left = parseFloat(pic[index].style.left);
		pic[index].style.left = (left + pic[index].offsetWidth) + "px";
		if (parseFloat(pic[index].style.left) >= 3 * pic[index].offsetWidth) {
			pic[index].style.left = (left - 4 * pic[index].offsetWidth) + "px";
		}

	}
	var main = getMain(pic);
	changeButton(span, main);
}
//获取当前正在主屏幕的照片序列号
function getMain(array) {
	//判断当前显示在主屏的是哪一张
	var main = 0;
	for (let index = 0; index < array.length; index++) {
		if (parseFloat(array[index].style.left) == 0) {
			main = index;
		}
	}
	return main;
}
//每次执行下一张或者上一张之后将index值改变保证主屏幕的图片index值最大
// 下一张
function changeIndexNext(array) {
	for (let index = 0; index < array.length; index++) {
		var left = parseFloat(array[index].style.left) / array[index].offsetWidth;
		if (left == 0) {
			array[index].style.zIndex = 109;
		}
		if (left == 1) {
			array[index].style.zIndex = 110;
		}
		if (left == 2) {
			array[index].style.zIndex = 109;
		}
		if (left == -1) {
			array[index].style.zIndex = 108;
		}
		if (left == -2) {
			array[index].style.zIndex = 108;
		}
	}

}
function changeIndexPrv(array) {
	for (let index = 0; index < array.length; index++) {
		var left = parseFloat(array[index].style.left) / array[index].offsetWidth;
		if (left == 0) {
			array[index].style.zIndex = 109;
		}
		if (left == 1) {
			array[index].style.zIndex = 108;
		}
		if (left == 2) {
			array[index].style.zIndex = 108;
		}
		if (left == -1) {
			array[index].style.zIndex = 110;
		}
		if (left == -2) {
			array[index].style.zIndex = 109;
		}
	}

}
//按钮对应图片
function changeButton(array, main) {
	for (let index = 0; index < array.length; index++) {
		if (main == index) {
			array[index].className = "active";
		} else {
			array[index].className = "default";
		}
	}
}
// 点击按钮切换图片
function spanOnclick(array) {
	// 给按钮添加监听事件
	for (let i = 0; i < span.length; i++) {
		//按钮上悬浮停止
		span[i].addEventListener("mouseover", function () {
			stop();
		});
		span[i].addEventListener("click", function () {
			var main = getMain(pic);
			var x = Math.abs(i - main);
			if (i > main) {
				for (let index = 0; index < x; index++) {
					nextpic.onclick();
				}
			} else {
				for (let index = 0; index < x; index++) {
					prvpic.onclick();
				}
			}
		});
	}
}
spanOnclick(pic);

//自动播放和停止
var timer;
function play() {
	timer = setInterval(function () {
		nextpic.onclick();
	}, 3500);
}

function stop() {
	clearInterval(timer);
}
var arrow = document.getElementsByClassName("arrow")
arrow[0].addEventListener("mouseover", function () {
	stop();
});

arrow[1].addEventListener("mouseover", function () {
	stop();
});

piclist.addEventListener("mouseout", function () {
	play();
});
piclist.addEventListener("mouseover", function () {
	stop();
});
play();
