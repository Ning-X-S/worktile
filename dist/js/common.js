$(function(){
    // 左侧的tab栏切换
    $(".father .left ul li:eq("+0+")").css({"background":"#1b222c","border-left":"3px solid #2dc3e8"});
    $(".father .left ul li").on("click",function () {
        console.log(this);
        $(".father .left li").css({"background":"#1e2631","border-left":"3px solid rgba(0,0,0,0)"});
        $(this).css({"background":"#1b222c","border-left":"3px solid #2dc3e8"});
        $(".father .left ul li a").removeClass("active");
        $(this).children("a").addClass("active");
    })
    // 检索显示与隐藏
    $(".sort ul li.dropDownList").hover(function(){
        $(this).children("div").children(".pull-down").slideDown(200);
    },function(){
        $(this).children("div").children(".pull-down").slideUp(200);
    });
    $(".father .right .sort ul li:nth-child(1) .pull-down p").on("click",function () {
        var text=$(this).text();
        $(".father .right .sort ul li:nth-child(1) .div span").html(text);
        $(".father .right .sort ul li:nth-child(1) .pull-down").slideUp(200);
    })

    // 添加参加人员
    var vv=$(".modal-body ul li:nth-child(1) .personnel p").length-1;
    var arr=[];
    for (var i=0;i<vv;i++){
        arr.push(i);
    }
    var flag=null;
    $(".modal-body ul li:nth-child(1) b").on("click",function () {
        $(".modal-body ul li:nth-child(1) .participant").show();
        $(".modal-body ul li:nth-child(1) .personnel p").on("click",function () {
            for(var i=0;i<arr.length;i++){
                if ($(this).index()===arr[i]){
                    flag=arr[i];
                    arr[i]=null;
                    var text=$(this).children("span").text();
                    var src=$(this).children("img").attr("src");
                    $(".modal-body ul li:nth-child(1) .staff-name").append("<img src="+src+" alt=''><strong>"+text+"</strong>");
                }
            }
            $(".modal-body ul li:nth-child(1) .participant").hide();
        })
    })
    // 搜索显示
    $(".icon-sousuo").hover(function(){
        $(".quick-menu ul li:nth-child(1) input").css({"opacity":"1","width":"170px"});
    },function(){

    });
    $(".quick-menu ul li:nth-child(1)").on("mouseleave",function () {
        $(".quick-menu ul li:nth-child(1) input").css({"width":"0px","opacity":"0"});
    })

    //增加列表显示与隐藏
    $(".popUpBtn").on("click",function(e){
        event.stopPropagation();
        $(".add-infor").css("width","800px")
    });
    $("body").on("click",function(){
        $(".add-infor").css("width","0")
    });
    $(".add-header span").on("click",function(){
        $(".add-infor").css("width","0")
    });
    $(".add-infor").on("click",function(){
        event.stopPropagation();
    });

    //列表划入划出
    $(".father .right .ul .li").hover(function(){
        $(this).children("div.dt").children("em.serial-number").css("display","none");
        $(this).children("div.dt").children("em.checkbox").css("display","block");
        $(this).children("div.list-right").css("display","block");
    },function(){
        $(this).children("div.list-right").css("display","none");
        if($(this).children("div.dt").children("em.checkbox").hasClass("glyphicon-unchecked")){
            $(this).children("div.dt").children("em.serial-number").css("display","block");
            $(this).children("div.dt").children("em.checkbox").css("display","none");
        }
    });


    //审批，任务列表checkbox 选中
    $(".checkbox").on("click",function(e){
        event.stopPropagation();
        if($(this).hasClass("glyphicon-unchecked")){
            $(this).attr("class","checkbox glyphicon glyphicon-check");
            $(".filter-menu").css("display","none");
            $(".batch-management").css("display","block");
            var a = 0;
            for( var i=0;i<$(".right-content .ul li").length;i++){
                if($(".right-content .ul li").eq(i).children("div.dt").children("em.checkbox").hasClass("glyphicon-check")){
                    a++;
                }
            }
            if(a==$(".right-content .ul li").length) {
                $(".allcheck").attr("class", "allcheck glyphicon glyphicon-check")
            }else {
                $(".allcheck").attr("class", "allcheck glyphicon glyphicon-unchecked")
            }
        }else {
            $(this).attr("class","checkbox glyphicon glyphicon-unchecked")
            var b = 0;
            for( var i=0;i<$(".right-content .ul li").length;i++){
                if($(".right-content .ul li").eq(i).children("div.dt").children("em.checkbox").hasClass("glyphicon-check")){
                    b++;
                }
            }
            if(b == 0) {
                $(".filter-menu").css("display","block");
                $(".batch-management").css("display","none");
                $(".allcheck").attr("class", "allcheck glyphicon glyphicon-unchecked")
            } else if(b==$(".right-content .ul li").length) {
                $(".allcheck").attr("class", "allcheck glyphicon glyphicon-check")
            }else {
                $(".allcheck").attr("class", "allcheck glyphicon glyphicon-unchecked")
            }
        }
    })
    //checkbox 全选
    $(".allcheck").on("click",function(){
        if($(this).hasClass("glyphicon-unchecked")){
            $(this).attr("class","allcheck glyphicon glyphicon-check");
            $(".checkbox").attr("class","checkbox glyphicon glyphicon-check");
            $(".filter-menu").css("display","none");
            $(".batch-management").css("display","block")
            $(".serial-number").css("display","none");
            $(".checkbox").css("display","block");
        }else {
            $(this).attr("class","allcheck glyphicon glyphicon-unchecked");
            $(".checkbox").attr("class","checkbox glyphicon glyphicon-unchecked");
            $(".filter-menu").css("display","block");
            $(".batch-management").css("display","none")
            $(".serial-number").css("display","block");
            $(".checkbox").css("display","none");
        }
    });


    //统计图表切换
    var chartFlag = true;
    $(".chartBtn").on("click",function(){
        if(chartFlag){
            $(".right-list").css({
                "width":"100%",
                "border" : "none"
            });
            $(".statistics").css({
                "padding-left":"0",
                "width":"0",
                "position":""
            });
            $(this).removeClass("curr");
            chartFlag = false;
        }else {
            $(".right-list").css({
                "width":"65%",
                "border-right" : "1px solid #d5d5d5"
            });
            $(".statistics").css({
                "padding-left":"20px",
                "width":"35%",
                "position":"relative"
            });
            $(this).addClass("curr");
            chartFlag = true;
        }

    })

    //任务，审批详情
    $(".right-list .ul li").on("click",function(e){
        event.stopPropagation();
        $(".add-infor").css("width","800px")
    })

});