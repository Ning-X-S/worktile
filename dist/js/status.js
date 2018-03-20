// 搜索显示
$(".icon-sousuo").hover(function(){
    $(".quick-menu ul li:nth-child(1) input").css({"opacity":"1","width":"170px"});
},function(){

});
$(".quick-menu ul li:nth-child(1)").on("mouseleave",function () {
    $(".quick-menu ul li:nth-child(1) input").css({"width":"0px","opacity":"0"});
})

// 公司团队
// $("header .header-name").hover(function () {
//     $("header .hover").slideDown(200);
// },function () {
//     $("header .hover").slideUp(200);
// })



//点击缓动tab栏项目
var flag=0;
$(".father .right .projectInformation .header .slidToggle").on("click",function () {
    if(flag==0){
        $(".father .right .scaling").css("width","0px");
        $(".father .right .projectInformation").css("paddingLeft","0px");
        flag=1;
    }else{
        $(".father .right .scaling").css("width","270px");
        $(".father .right .projectInformation").css("paddingLeft","270px");
        flag=0;
    }

})

//悬浮旋转搜索项目栏
$(".father .right .scaling .hd .input").hover(function () {
    // $(".father .right .scaling .hd .input .selectui-result .icon-caret-down").addClass("icon-angle-up");
    $(".father .right .scaling .hd .input ul").slideDown(200);
},function () {
    // $(".father .right .scaling .hd .input .selectui-result .icon-caret-down").removeClass("icon-angle-up");
    $(".father .right .scaling .hd .input ul").slideUp(200);
})

// 工具提示初始化
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

//选择框
$(".father .right .projectInformation .toolkit-bar ul li:nth-child(6)").on("click",function () {
    $(this).children("input").prop("checked","checked");
})

//coment显示与隐藏
$(".father .right .projectInformation .header ul li").on("click",function(){
    $(".father .right .projectInformation .header ul li").css("border-bottom","0");
    $(this).css("border-bottom","2px solid #ccc");
})

