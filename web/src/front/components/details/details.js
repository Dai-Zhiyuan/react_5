$(function(){
    //每个固定的时间移动图片
    // var timer = setInterval(picLoop,5000);
    // var index = 0;
    let num = 0;
    
    // function picLoop(){
    //     index++;
    //     if (index==3) {index=0;}
    //     $(".content").animate({"left":-630*index},300);
    //     $("#index li").eq(index).css("background-color","red").siblings().css("background-color","rgba(100,100,100,0.3)");
    // }




    // 收藏/不收藏
    $('#sc').on('click',()=>{
        num++
        if(num%2==0){
            $('#scc').attr("class","fa fa-heart").css("color","red")
        }else{
            $('#scc').attr("class","fa fa-heart-o").css("color","")
        }
    })


    // 获取时间
    var time = function(){
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth()+1;
        var date = time.getDate();
        var h = time.getHours();
        var m = time.getMinutes();
        var s = time.getSeconds(); 
        h = h<10 ? '0'+h : h;
        m = m<10 ? '0'+m : m;
        s = s<10 ? '0'+s : s;

        return year+"-"+month+"-"+date+''+h+':'+m+':'+s;
    }

    $('.time').html(time)

    
    var mySwiper = new Swiper ('.swiper-container', {
            // 滚动方向 horizontal/vertical
            direction: 'horizontal',
            // 自动播放
            autoplay:3000,
            // 是否循环播放
            // loop: true,
            // 如果需要分页器（小圆点）
            // 是否需要分页器
            // pagination: '.swiper-pagination',
            // 点击分页器是否切换到对应的图片 是 true 否 false
            // paginationClickable:true,

            // 如果需要前进后退按钮
            // nextButton: '.swiper-button-next',
            // prevButton: '.swiper-button-prev',

            // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
            // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
            // 操作包括触碰，拖动，点击pagination等。
            autoplayDisableOnInteraction:false,
        })


})