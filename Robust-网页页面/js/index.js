var baseURL = "http://203.195.246.58:7777";

//分页
function init(page){
	var url = baseURL + "/Employment/findAll";
	// 
	$.get(url,function(response){
		// 获取所有的数据 将数据赋给data数组
		var data = response.data;
		// 获取数据的总长度
		var total = data.length;
		//每页6条数据
		var nums = 6;
		//总页数
		var sum_page;
		//当前页数为第一页
		var cpage = 1;
		// console.log("page为:"+page);
		cpage=page; 
		// 计算总页码
		if ( total % nums == 0) {
			// 整除显示整页数
			sum_page = parseInt(total / nums);
		}else{
			// 余数加一页
			sum_page = parseInt(total / nums + 1);
		}
		console.log("总页数："+sum_page);
		getPage(sum_page,data);
		getdata(cpage,data);

	});
} 
// 默认加载第一页
init(1);
function getPage(sum_page,data){
	var i;
	// console.log(sum_page);
	
	var newitem;
	// 清空
	$('.pagination').empty();
	// 若当前页表为已经默认的1，若页标小于总页数i++，从2开始
	for (var i = 1; i < sum_page+1; i++) {
		newitem="<li class='page-item'><a class='page-link' onclick='init("+i+")'>"+i+"</a></li>";
		$('.pagination').append(newitem);
	}
}

function getdata(cpage,data){
	var newTr;
	// 获取数据
	var j=(cpage-1)*6;
	// 获取结束索引
	var k;
	$("#con_menu").empty();
	for (k = 0; k<6; k++) {
		if (data[j+k] == undefined) {
			break;
		}
		newTr = $(`
				<div class="m">
					<input type="checkbox" class="checked" value="`+ data[j+k].id+`" hidden>
					<h4>`+ data[j+k].title +`</h4>
					<div class="m_1">`+ data[j+k].salary +`</div>
					<div class="w">
			            <div class="m_2 c1">`+ data[j+k].welfare +`</div>
			         </div>
					<div class="m_9">
		                <p>工作时间：`+ data[j+k].workingHours +`</p>
		                <p>工作类型：`+ data[j+k].job +`</p>
		                <p>招聘人数：1`+ data[j+k].num+`</p>
		                <p>工作地点：`+ data[j+k].city + `</p>
		            </div>
					<div class="m_3">一键报名</div>
				</div>
			`);
		$("#con_menu").append(newTr);
	}
}
// 关闭模态框
function closeModal(){
	$(this).parents(".modal").modal("hide");
}
$(function(){
	init(1);
	// 点击一键报名时跳出报名模态框
	$("#con_menu").on("click","div:last-child",function(){
		$("#registrationModal").modal("show");
		// alert(3);
		event.preventDefault();
	})
	// 关闭第一层模态框层罩
	$("#registrationModal").on("hidden.bs.modal",function(){
		$("#txModal").modal("show");
		// if($('.modal.in').size()>=1){$('body').addClass('modal-open')}
	})
	$("#txbm").click(function(){
		// closeModal($("#registrationModal"));
			// alert(1);
		$("#registrationModal").modal("hide");
		// $("#txModal").modal("show");

		
		event.preventDefault();

	})
})