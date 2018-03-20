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

// 创建任务
var index=null;
$(".find .bottom").on("click",function () {
    $(this).children(".text2").hide();
    $(this).children(".text").show();
})
$(".find .bottom .text .btn1").on("click",function (evevt) {
    event.stopPropagation();
    $(this).parent().siblings(".text2").show();
    $(this).parent('.text').hide();
    $(this).siblings("textarea").val("");
})
$(".find .bottom .text .btn2").on("click",function (evevt) {
//    console.log(evevt);
    flag=$(this).parent().parent().parent(".find").index();
    var index=$(".find:eq("+flag+") .cc li").length;
//    event.stopPropagation();
    var val=$(this).siblings("textarea").val();
    if (val==''){
        alert("请填写标题");
    }else{
        index++;
        var myDate = new Date();
        var time=myDate.toLocaleDateString();
        var entry=$(this).parent().parent().parent(".find").attr("index");
        var string="<li class='lis'>" +
        "<p><span>"+index+"</span><i>"+val+"</i><b>贾魁</b>_<strong>"+time+"</strong></p>" +
            "<img src='./img/18.png' alt=''>" +
        "</li>"
        $(".find:eq("+flag+") .cc").append(string);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/web/rest/projecttask/add.htm',
            dataType: 'json',
            data :{ "entry": entry,"title":val},
            success: function(data){
                console.log(data);
            },
            error: function(xhr, type){
                console.log("err")
            }
        });
        $(this).parent().siblings(".text2").show();
        $(this).parent('.text').hide();
        $(this).siblings("textarea").val("");
    }
})
//选择框
$(".father .right .projectInformation .toolkit-bar ul li:nth-child(6)").on("click",function () {
    $(this).children("input").prop("checked","checked");
})

//拖动
$( ".cc" ).sortable({
    connectWith: ".cc",
    placeholder: "ui-state-highlight",
    opacity: '.9',
    start: function(event, ui) {
//        var source=$(ui.item).index();
//        console.log("start:"+source);
//        console.log(ui);
//        console.log(event);
//        var source=$(this).children().attr("index");
//        console.log(source);
//        console.log("stat:"+$(ui.item).attr("index"));
     },
    drag: function(event, ui) {
//          console.log("drag"+$(ui.item).attr("index"));
    },
    stop: function(event, ui) {
        console.log(event);
        console.log(ui);
        var source=$(ui.item).attr("data-id");
        var target=$(ui.item).next().attr("data-id");
        var entry=$(ui.item).parent().parent().attr("index");
        console.log("source:"+source);
        console.log(target);
        console.log("target:"+target);
        console.log("entry:"+entry);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/web/rest/projecttask/exchange.htm',
            dataType: 'json',
            data :{ "source": source,"target":target,"entry":entry},
            success: function(data){
                console.log(data);
            },
            error: function(xhr, type){
                console.log("err");
            }
        });
    }
}).disableSelection();
$( "#jk" ).sortable(
    {
          start: function(event, ui) {
            var source=$(ui.item).index();
            console.log("start:"+source);
            console.log(ui);
            console.log(event);
            var source=$(this).children().attr("index");
            console.log(source);
             console.log("stat:"+$(ui.item).attr("index"));
          },
          drag: function(event, ui) {
                console.log(22222);
                console.log("drag"+$(ui.item).attr("index"));
          },
          stop: function(event, ui) {

//                var target=$(this).children(".find").next().attr("index");
//                console.log(target);
                console.log(event);
                console.log(ui);
                var source=$(ui.item).attr("index");
                var target=$(ui.item).next().attr("index");
                console.log("stop:"+source);
                console.log(target);
                 console.log("endx:"+$(event.toElement).attr("index"));
                $.ajax({
                    type: 'POST',
                    url: 'http://localhost:8080/web/rest/entry/exchange.htm',
                    dataType: 'json',
                    data :{ "source": source,"target":target},
                    success: function(data){
                        console.log(data);
                    },
                    error: function(xhr, type){
                        console.log("err")
                    }
                });
          }
        }
);
//$(".ul-sortable-placeholder").css({"visibility":"visible","height":"600px","background-color":"red"});

//新建任务
var num=3;
var bb=0;
$(".father .right .projectInformation .toolkit-bar ul li:nth-child(4) span").on("click",function () {
    if (bb==0){
        num+=1;
        console.log(num);
        $("#jk").animate({scrollTop:0},1500);
        var string="<div class='find finddom' index="+num+">" +
            "<div class='top'><input type='text' autofocus='autofocus' placeholder='分组名字（ESC取消回车保存）'></div>" +
            "<ul id='sortable4' class='cc'>" +
            "</ul>" +
            "<div class='bottom'>" +
            "<div class='text'>" +
            "<textarea name='a' placeholder='请输入标题'></textarea>" +
            "<span class='btn1'>取消</span>" +
            "<span class='btn2'>确定</span>" +
            "</div>" +
            "<div class='text2'>+安排任务</div>" +
            "</div>" +
            "</div>";
        $(".projectInformation #jk").prepend(string);
        $( "ul" ).sortable({
            connectWith: "ul",
            placeholder: "ui-state-highlight",
            opacity: '.9'
        }).disableSelection();
        $( "#jk" ).sortable({
            handle: ".top",
            opacity: '.9',
        });
        $(".ul-sortable-placeholder").css({"visibility":"visible","height":"600px","background-color":"red"});
        bb=1;
        $(document).on("keydown",function (event) {
            var val=$(".projectInformation #jk .find[index='"+num+"'] .top input").val();
            var length=$(".projectInformation #jk .find").length;
            length=length-1;
            if(event.keyCode==13 && val!=''){
                 var id=$("#jk").data("project");
                 console.log(id);
                 var rem=null;
                  $(".projectInformation #jk .find[index='"+num+"'] .top").html("<span class='findSpan'>"+val+"</span>");
                  var str="<div class='open'><i class='glyphicon glyphicon-option-horizontal'></i><ul class='ui-sortable' style='display: none;'><li>1</li><li>2</li><li>3</li><li class='lis4'>重命名</li><li class='lis'>删除分组</li></ul></div>";
                  $(".projectInformation #jk .find[index='"+num+"'] .top").append(str);
                 $.ajax({
                    type: 'POST',
                    url: 'http://localhost:8080/web/rest/entry/add.htm',
                    dataType: 'json',
                    data :{ "name": val,"project":id},
                    success: function(data){
                        console.log(data.id);
                        rem=data.id;
                        $(".projectInformation #jk .find[index='"+num+"']").attr("index",rem);
                    },
                    error: function(xhr, type){
                        console.log("err");
                    }
                 });

                 //操作分组与任务
                        $(".projectInformation #jk .top .open").hover(function(){
                            $(this).children("ul").slideDown(100);
                        },function(){
                            $(this).children("ul").slideUp(100);
                        });

                 //点击删除分组
                 $(".projectInformation #jk .find .top .open ul .open-lis").on("click",function(){
                    var id=$(this).parent().parent().parent().parent(".find").attr("index");
                    console.log($(this).parent().parent().parent().parent(".find").attr("index"));
                    $(this).parent().parent().parent().parent(".find").remove();
                       $.ajax({
                           type: 'get',
                           url: "http://localhost:8080/web/rest/entry/delete.htm?id="+rem+"",
                           dataType: 'json',
                           success: function(data){
                               console.log(data);
                           },
                           error: function(xhr, type){
                               console.log("err")
                           }
                       });
                 });

                 //点击重命名
                 $(".projectInformation #jk .find .top .open ul .lis4").on("click",function(e){
                     e.stopPropagation();
                     console.log("重命名");
                 });

                (function bindEvent() {
                    $(".finddom .bottom").click(function() {
                        $(this).children(".text2").hide();
                        $(this).children(".text").show();
                    });
                })();
                (function bindEvent() {
                    $(".finddom .bottom .text .btn1").click(function(event) {
                        event.stopPropagation();
                        $(this).parent().siblings(".text2").show();
                        $(this).parent('.text').hide();
                        $(this).siblings("textarea").val("");
                    });
                })();
                (function bindEvent() {
                    $(".find .bottom .text .btn2").click(function(event) {
                        flag=$(this).parent().parent().parent(".find").index();
                        var index=$(".find:eq("+flag+") .cc li").length;
                        event.stopPropagation();
                        var val=$(this).siblings("textarea").val();
                        console.log(typeof val);
                        if (val==''){
                            alert("请填写标题");
                            // return false;
                        }else{
                            index++;
                            var myDate = new Date();
                            var time=myDate.toLocaleDateString();
                            var string="<li class='lis'>" +
                                "<p><span>"+index+"</span><i>"+val+"</i><b>贾魁</b>_<strong>"+time+"</strong></p>" +
                                "<img src='./img/18.png' alt=''>" +
                                "</li>"
                            $(".find:eq("+flag+") .cc").append(string);
                            $(this).parent().siblings(".text2").show();
                            $(this).parent('.text').hide();
                            $(this).siblings("textarea").val("");
                        }
                    });
                })();
                bb=0;
            }else if(event.keyCode==27 && val==''){
                $(".projectInformation #jk .find[index='"+num+"']").remove();
                bb=0;
            }
        })
    }else{
        return;
    }
})


//点击删除分组
$(".projectInformation #jk .find .top .open ul .open-lis").on("click",function(){
    var id=$(this).parent().parent().parent().parent(".find").attr("index");
    console.log(id);
    $(this).parent().parent().parent().parent(".find").remove();
       $.ajax({
           type: 'get',
           url: "http://localhost:8080/web/rest/entry/delete.htm?id="+id+"",
           dataType: 'json',
           success: function(data){
               console.log(data);
           },
           error: function(xhr, type){
               console.log("err");
           }
       });
})

//点击重命名
$(".projectInformation #jk .find .top .open ul .lis4").on("click",function(e){
    e.stopPropagation();
    console.log("重命名");
    var text=$(this).parent().parent().siblings(".findSpan").text();
    $(this).parent().parent().siblings(".findSpan").remove();
    $(this).parent().parent().parent(".top").prepend("<input type='text' autofocus='autofocus' placeholder='分组名字（ESC取消回车保存）'>");
    $(this).parent().parent().siblings("input").val(text);
    var val=$(this).parent().parent().siblings("input").val();
    var id=$(this).parent().parent().parent().parent(".find").attr("index");
    var num=$(this).parent().parent().parent().parent(".find").attr("index");
    console.log("重命名id1"+id);
    $(document).on("keydown",function (event) {
        if(event.keyCode==13 && val!=''){
             var keyVal=$("#jk .find[index='"+num+"'] .top input").val();
             $("#jk .find[index='"+num+"'] .top input").remove();
             $("#jk .find[index='"+num+"'] .top").prepend("<span class='findSpan'>"+keyVal+"</span>");
             console.log("重命名id2"+id);
             $.ajax({
                type: 'POST',
                url: 'http://localhost:8080/web/rest/entry/update.htm',
                dataType: 'json',
                data :{ "name": keyVal,"id":id},
                success: function(data){
                    console.log(data.id);
                },
                error: function(xhr, type){
                    console.log("err");
                }
             });
        }else if(event.keyCode==27 || val==''){
            alert("退出或内容为空");
        }
    })
})

//coment显示与隐藏
$(".father .right .projectInformation .header ul li").on("click",function(){
    $(".father .right .projectInformation .header ul li").css("border-bottom","0");
    $(this).css("border-bottom","2px solid #ccc");
})

//操作分组与任务
$(".projectInformation #jk .top .open").hover(function(){
    $(this).children("ul").slideDown(100);
},function(){
    $(this).children("ul").slideUp(100);
});

//右键删除任务
$(".projectInformation #jk .cc li").on("contextmenu",function (e){
    var left=e.clientX;
    var top=e.clientY;
    $(".pbox").css({"display":"block","left":left,"top":top});
    var id=$(this).attr("data-id");
    var liIndex=$(this).index();
    var findFlag=$(this).parent().parent(".find").index();
    $(".pbox li:eq("+2+")").on("click",function (){
        $("#jk .find:eq("+findFlag+") .cc .lis:eq("+liIndex+")").remove();
        $.ajax({
            type: 'get',
            url: "http://localhost:8080/web/rest/projecttask/delete.htm?id="+id+"",
            dataType: 'json',
            success: function(data){
                console.log(data);
            },
            error: function(xhr, type){
                console.log("err");
            }
        });
    })
    return false
})
$("body").on("click contextmenu",function (e){
    console.log(22);
    var left=e.clientX;
    var top=e.clientY;
    $(".pbox").css({"display":"none","left":left,"top":top});
})
