

// 公司团队
//$("header .header-name").hover(function () {
//    $("header .hover").slideDown(200);
//},function () {
//    $("header .hover").slideUp(200);
//})

$(".projects-name input").hover(function(){
    $(this).focus();
},function(){
    $(this).blur();
});
$(document).on("keydown",function (event) {
    if(event.keyCode==13){
        var value=$(".modal-body .name input").val();
        $(".modal-body .name input").hide();
        $(".modal-body .name i").text(value);
        $(".modal-body .name b").addClass("icon-edit");
    }
})

// 项目详情
$(".modal-body .name b").on("click",function () {
    $(".modal-body .name i").text(' ');
    $(".modal-body .name input").val('');
    $(".modal-body .name input").show();
})

// 项目名称
// $(".Project-details input").on("focus",function () {
//     $(this).css("background-color","#ddd");
// })
// $(".Project-details input").on("blur",function () {
//     $(this).css("background-color","transparent");
// })




//添加项目
$(".modal-header .preservation").on("click",function () {
    var projectsName=$(".modal-body .projects-name input").val();
    var ProjectDetails=$(".modal-body .name #name").val();
    console.log(typeof ProjectDetails);
    if (projectsName==''){
        alert("请填写项目名称");
    }
    if (ProjectDetails==''){
        alert("请填写负责人名称");
    }
    if (projectsName != '' && ProjectDetails != ''){
        var string="<li class='li'>" +
            "<div class='dd'>" +
            "<img src='./img/18.png' alt=''>" +
            "<div class='plan'>0%</div>" +
            "</div>" +
            "<div class='dt'>" +
            "<span>"+projectsName+"</span>" +
            "<span><b>负责人：</b><i>"+ProjectDetails+"</i></span>" +
            "</div>" +
            "<strong class='iconfont icon-wujiaoxing'></strong>" +
            "</li>"
        $(".father .right .ul").append(string);
        var projectsName=$(".modal-body .projects-name input").val('');
        var ProjectDetails=$(".modal-body .name #name").val(' ');
        $('#myModal').modal('toggle');
    }
})