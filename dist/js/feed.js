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
//点击隐藏显示任务
var flag=0;
$(".father .right .main-content #blogs-container ul li .blog-records-fold").on("click",function(){
    if(flag==0){
        $(this).siblings(".blog-records-wrapper").slideUp();
        $(this).children("i").css("transform","rotate(0deg)");
        flag=1;
    }else{
        $(this).siblings(".blog-records-wrapper").slideDown();
        $(this).children("i").css("transform","rotate(90deg)");
        flag=0;
    }
})
//点击右侧隐藏
var index=0;
$(".father .right .main-content .siderbar-ctrl-btn").on("click",function(){
    if(index==0){
        $(".father .right .main-content").css("width","100%");
        $(".father .right .main-sidebar").css("width","0%");
        index=1;
    }else{
        $(".father .right .main-sidebar").css("width","25%");
        $(".father .right .main-content").css("width","75%");
        index=0;
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
//自动获取高
$(".main-sidebar").height($(".main-content").height());
//右侧个人信息隐藏与显示
var li2=true;
$(".father .right .main-sidebar ul li:nth-child(3)").on("click",function(){
if(li2){
    $(".father .right .main-sidebar ul li:nth-child(2)").slideDown();
    li2=false;
}else{
    $(".father .right .main-sidebar ul li:nth-child(2)").slideUp();
    li2=true;
}
})
//点击切换访问状态
var curr=true;
$(".father .right .main-sidebar ul li:nth-child(5) .tab a").on("click",function(){
    var index=$(this).index();
    $(".father .right .main-sidebar ul li:nth-child(5) .tab a").removeClass("current");
    $(this).addClass("current");
    if(curr){
        $(".father .right .main-sidebar ul li:nth-child(5) .visitor-list .div_myVisitors").hide();
        $(".father .right .main-sidebar ul li:nth-child(5) .visitor-list .div_myVisitors:eq("+index+")").show();
        curr=false;
    }else{
        $(".father .right .main-sidebar ul li:nth-child(5) .visitor-list .div_myVisitors").hide();
        $(".father .right .main-sidebar ul li:nth-child(5) .visitor-list .div_myVisitors:eq("+index+")").show();
        curr=true;
    }
})