$(document).ready(function(){
    $(".gnb>li").mouseover(function(){
        $(".lnb,#bg_menu").stop().slideDown();
    });
    $(".gnb>li").mouseout(function(){
        $(".lnb,#bg_menu").stop().slideUp();
    });
    
    
    
    //slide code
    var current=0;
    var count=3;
    var position;
    
    setInterval(function(){
        if(current<count-1){
            current++;
        }else{
            current=0;
        }
        position=current*(-1200)+"px";
        $("#all_slide").animate({left:position},4000);
    });
    
    
    
    
    
    //popup code
    $("#cont1>ul>li:first-child").click(function(){
        $("#popup").show();
    });    
    $("#popup a").click(function(){
        $("#popup").hide();
    });
    
    
    
    
    
    
    
});