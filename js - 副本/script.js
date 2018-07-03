jQuery(document).ready(function($){
    $(".selcect_selected").click(function(){
    	var optionHeight = $(".option").hasClass('option_height');
    	if(optionHeight){
    		$(".option").removeClass('option_height');
    	}else{
    		$(".option").addClass('option_height');
    	}
    })
    $(".option li").click(function(){
    	var liText = $(this).text();
    	$(".selcect_selected p").text(liText);
    	$(".option").removeClass('option_height');
    })
    $(".nav_burger a").click(function(){
        $("body").toggleClass("body_right");
        $(".nav").toggleClass("nav_right");
        $("body").toggleClass("hidden_y")
        $(".nav_burger").toggleClass("nav_burger_x")
    })
    var widthBody =document.body.offsetWidth;
    if(widthBody>900){
        $(".nav_ul li").mouseover(function(){
            $(this).find(".nav_two").css("height","125px");
            $(this).find(".nav_two").css("opacity","1");
        })
        $(".nav_ul li").mouseout(function(){
            $(this).find(".nav_two").css("height","0");
            $(this).find(".nav_two").css("opacity","0");
        })
    } else{
        $(".nav_ul li").click(function(){
            $(this).find(".nav_two").toggleClass("nav_two_height");
            $(this).children("a").toggleClass("nav_a_b")
        })
    }
})

   