$("#index_menu li ").click(function(){
	// 当前点击的元素的索引
	var index = $(this).index();
	if (index == 1) {
		// alert(1);
		$("#index_con").load("pages/business.html");
	}else if (index == 2) {
		$("#index_con").load("pages/employment.html");
	}else if (index == 3) {
		$("#index_con").load("pages/jobhunter.html");
	}else if (index == 4) {
		$("#index_con").load("pages/jobhunter-contact.html");
	}
})