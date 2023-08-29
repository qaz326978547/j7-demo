//topGameList 滑入彈出效果
// $(function() {
//     $(".topGameList").mouseleave(function(){
//         $(".topGameList").removeClass("display");
//     })

//     $(".gameNav li").hover(function(){
//         var n = $(this).index();

//         $(".topGameList,.topGameList ul:eq("+ n +")")
//         .addClass("display")
//         .siblings().removeClass("display");
//     })
//     $(".gameNav li:eq(6),.gameNav li:eq(7)").hover(function(){
//         $(".topGameList")
//         .removeClass("display");
//     })

//     $(".gameNav li.liveBtn,.gameNav li.slotBtn").hover(function(){
//         $(".topGameList .prev,.topGameList .next")
//         .addClass("display");
//         $(".topGameList .container")
//         .addClass("scroll");
//     })
//     $(".gameNav li.hotBtn,.gameNav li.sportBtn,.gameNav li.fishBtn,.gameNav li.boardBtn").hover(function(){
//         $(".topGameList .prev,.topGameList .next")
//         .removeClass("display");
//         $(".topGameList .container")
//         .removeClass("scroll");
//     })
// })

// //live下拉選單寬度+點擊滑動
// $(function(){
//     var live = $('.listWrap .live li');
//     var livel = live.length;
//     var liwp = $('.topGameList .live');
//     $(liwp).css("width",""+195 * livel+"");

//     var n = 0;
//     var nt = $('.listWrap .next');
//     var pv = $('.listWrap .prev');
//     $(nt).click(function(){
//         n ++;
//         $(liwp).css("transform","translateX("+(-195 * n)+"px)");

//         if(n == 3){
//             n --;
//         }
//     })
//     $(pv).click(function(){
//         n --;
//         $(liwp).css("transform","translateX("+(-195 * n)+"px)");

//         if(n == -1){
//             $(liwp).css("transform","translateX(0px)");
//             n ++;
//         }
//     })
// })
// //slot下拉選單寬度+點擊滑動
// $(function(){
//     var slot = $('.listWrap .slot li');
//     var slotl = slot.length;
//     var slwp = $('.topGameList .slot');
//     $(slwp).css("width",""+195 * slotl+"");

//     var n = 0;
//     var nt = $('.listWrap .next');
//     var pv = $('.listWrap .prev');
//     $(nt).click(function(){
//         n ++;
//         $(slwp).css("transform","translateX("+(-195 * n)+"px)");

//         if(n == 16){
//             n --;
//         }
//     })
//     $(pv).click(function(){
//         n --;
//         $(slwp).css("transform","translateX("+(-195 * n)+"px)");

//         if(n == -1){
//             $(slwp).css("transform","translateX(0px)");
//             n ++;
//         }
//     })
// })


//header loginBtn click
$(function(){
    $('.loginBtn').click(function(){
        $('header .user')
        .toggleClass('display');

        $("header")
        .removeClass("unLog");
        
        $('header .homeBtn')
        .attr("onclick","window.location.href='../index.html'");
        $('header .myBtn')
        .attr("onclick","window.location.href='./html/member.html'");
        $('header .hotBtn')
        .attr("onclick","window.location.href='./html/popular.html'");
        $('header .promotionBtn')
        .attr("onclick","window.location.href='./html/promotion.html'");
        $('header .sportBtn')
        .attr("onclick","window.location.href='./html/sportPage.html'");
        $('header .liveBtn')
        .attr("onclick","window.location.href='./html/livePage.html'");
        $('header .slotBtn,.topGameList .slot li,.typeList .slot')
        .attr("onclick","window.location.href='./html/slotPage.html'");
        $('header .fishBtn,.topGameList .fish li,.typeList .fish')
        .attr("onclick","window.location.href='./html/fishPage.html'");
        $('header .boardBtn,.topGameList .board li,.typeList .board')
        .attr("onclick","window.location.href='./html/tablePage.html'");
        $('header .event')
        .attr("onclick","window.location.href='./html/event.html'");
        $('header .vip,footer .vip button')
        .attr("onclick","window.location.href='./html/vip.html'");
        
        $("main")
        .attr("onclick","");

        $(".mainWrap .quickBox li.classic")
        .attr("onclick","window.location.href='./html/slotPage.html'");

        $(".mainWrap .quickBox li.popular")
        .attr("onclick","window.location.href='./html/popular.html'");

        $(".mainWrap .quickBox li.suggest")
        .attr("onclick","window.location.href='./html/suggest.html'");

        $(".mainWrap .quickBox li.casino")
        .attr("onclick","window.location.href='./html/livePage.html'");
        
        $(".mainWrap .quickBox li.sports")
        .attr("onclick","window.location.href='./html/sportPage.html'");

        $(".troubleshooting ul li")
        .attr("onclick","window.location.href='./html/help.html'");
    
        $(".mainWrap .gameGroup .hotGroup .checkBtn")
        .attr("onclick","window.location.href='./html/popular.html'");

        $(".mainWrap .gameGroup .recommendation .checkBtn")
        .attr("onclick","window.location.href='./html/suggest.html'");

        $(".mainWrap .gameGroup .gameBox ul li")
        .attr("onclick","enterGame()");

        $("footer")
        .attr("onclick","");

        $("footer .footerList .center ul li:not(:last-child)>button")
        .attr("onclick","window.location.href='./html/help.html'");
    })
})

//.transferInfo 展開遊戲平台
$(function () {
    $('.expandBtn').click(function () {
        $('.platform_List').toggleClass('display');
    })
})

//加入我的最愛
$(function(){
    $(".likeGame").click(function(event){
        $(this)
        .toggleClass("liked")
        .parent()
        .toggleClass("addLiked_game");

        event.stopPropagation();
    })
})

//頁碼切換
$(function(){
    $(".countBlock ul li").click(function(){
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    })
    $(".countBlock .prevBtn").click(function(){

        if($(".countBlock ul li:first").hasClass("active")){

        } else {
            $(".countBlock ul li.active")
            .prev()
            .addClass("active")
            .next()
            .removeClass("active");
        }
    })
    $(".countBlock .nextBtn").click(function(){

        if($(".countBlock ul li:last").hasClass("active")){

        } else {
            $(".countBlock ul li.active")
            .next()
            .addClass("active")
            .prev()
            .removeClass("active");
        }
    })
})

//日期搜尋切換
$(function (){
    $(".dateGroup .dateBtn button").click(function (){
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    })
})

//gameWrap
$(function(){
    $(".gameWrap .buttonGroup button").click(function(){
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    })
})

//promotion 優惠頁
$(function(){
    $(".gameWrap.promotion .promotionList li .seeMoreBtn").click(function(){
        var title = $(this).closest("li").find(".prTitle").text();

        $(".gameWrap.promotion .promotionList")
        .removeClass("display")
        .next()
        .addClass("display");

        $(".gameWrap.promotion .bigTitle").text("プロモーション詳細");
    
        $(".gameWrap.promotion .pr_title").text(title);
    })
    $(".gameWrap.promotion .backBtn").click(function(){

        $(this)
        .closest(".promotionDetail")
        .removeClass("display")
        .prev()
        .addClass("display");

        $(".gameWrap.promotion .bigTitle").text("現在開催されているプロモーション一覧");
    })
})

//filter open + close
$(function(){
    $('.jumpWindow .close_ic,.jumpWindow .close').click(function(){
        $('.filter')
        .removeClass('display');
    })
    $(".jumpWindow.betWindow .enterGame button").click(function(){
        $('.filter')
        .removeClass('display');
    })

    $(".login .forget").click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.forgetPassword')
        .addClass('display');
    })

    $('.loginBtn').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.news').addClass('display');
    })

    $('.chgBtn.pw').click(function(){
        $('.filter').addClass('display');
        $('.jumpWindow.passwordWindow')
        .addClass('display')
        .siblings()
        .removeClass('display');
    })

    $('.chgBtn.phone').click(function(){
        $('.filter').addClass('display');
        $('.jumpWindow.changePhoneWindow')
        .addClass('display')
        .siblings()
        .removeClass('display');
    })

    $(".waterBox .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.listWindow').addClass('display');
    })
})

function unlogin(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.plsGo').addClass('display');
}
function enterGame(){
    $('.filter').addClass('display');
    $('.jumpWindow.transfer')
    .addClass('display')
    .siblings().removeClass('display');
}
// function openNews(){
//     $('.jumpWindow').removeClass('display');
//     $('.filter,.news').addClass('display');
// }
// function loading(){
//     $('.jumpWindow').removeClass('display');
//     $('.filter,.loading').addClass('display');

//     setTimeout(function(){
//         $(".filter")
//         .removeClass("display");
//     },2000);
// }



//jumpWindow .new .content
$(function(){
    $('.news .nav .hot').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.forHot').addClass('display');
        $('.forHot').siblings().removeClass('display');
    })
    $('.news .nav .normal').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.forNormal').addClass('display');
        $('.forNormal').siblings().removeClass('display');
    })
    $('.news .nav .deposit').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.forDeposit').addClass('display');
        $('.forDeposit').siblings().removeClass('display');
    })
})

//bonus
$(function(){
    $(".bonusPage .buttonGroup button").click(function(){
        var n = $(this).index();

        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".bonusPage .bonusGroup>div:eq(" + n + ")")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".bonusPage .referral table tr td:nth-of-type(1)").click(function(){
        var val = $(this).find("p").text();

        $(".filter, .jumpWindow.generation")
        .addClass("display");

        $(".jumpWindow.generation .title p .type").text(val);
    })
})

$(function () {
    $(".container.depositPage .content .swiper-selectBox .swiper-slide").click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        var i = $(this).index();
        $(".container.depositPage .content .bankGroup:eq(" + i + ")")
            .addClass("display")
            .siblings().removeClass("display");
    })
    $(".container.depositPage  form .textBox .applyBtn").click(function () {
        $(".container.depositPage .content .bankGroup.trans_a")
            .addClass("display")
            .siblings().removeClass("display");
    });
});

//dealHistory
$(function(){
    $('.dealHistory .buttonGroup button').click(function(){
        var n = $(this).index();

        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".dealHistory .betGroup>div:eq(" + n + ")")
        .addClass("display")
        .siblings().removeClass("display");

        if(n == 0) {
            $('.dealHistory .dateGroup .inputGroup:eq(0)')
            .addClass("display")
            .siblings(".inputGroup").removeClass("display")
            .closest(".dealHistory .dateGroup")
            .addClass("display");

            $('.dealHistory .dateGroup .selectDate label>p')
            .css('width','42px');

            $(".dealHistory .dateGroup form>p.hint")
            .css('display','none');
        } else if (n == 1) {
            $('.dealHistory .dateGroup').removeClass("display");
        } else if (n == 2 ) {
            $('.dealHistory .dateGroup .inputGroup:eq(1)')
            .addClass("display")
            .siblings(".inputGroup").removeClass("display")
            .closest(".dealHistory .dateGroup")
            .addClass("display");

            $('.dealHistory .dateGroup .inputGroup:eq(1) label:nth-of-type(1)>p, .dealHistory .dateGroup .selectDate label>p')
            .css('width','68px');

            $(".dealHistory .dateGroup form>p.hint")
            .css('display','block');
        }
    })
})

//promotionApply
$(function(){
    //promotionApply 切換
    $('.promotionApply .content .buttonGroup .Btn').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.promotionApply .content .buttonGroup .promotionBtn').click(function () {
        $(".promotionApply .infoGroup .promotion").addClass('display');
        $('.promotionApply .infoGroup .promotion').siblings().removeClass('display');
    })

    $('.promotionApply .content .buttonGroup .withdrawBtn').click(function () {
        $(".promotionApply .infoGroup .withdraw").addClass('display');
        $('.promotionApply .infoGroup .withdraw').siblings().removeClass('display');
    })

    $('.promotionApply .content .buttonGroup .historyBtn').click(function () {
        $(".promotionApply .infoGroup .history").addClass('display');
        $('.promotionApply .infoGroup .history').siblings().removeClass('display');
    })

    //promotionApply 詳細資訊展開
    $ ('.promotionApply .topGroup .dtBtn').click(function(){
        $('.promotionApply .topGroup .detailGroup').toggleClass('display');
    })

    $ ('.promotionApply .bottomGroup .dtBtn').click(function(){
        $('.promotionApply .bottomGroup .detailGroup').toggleClass('display');
    })

    $ ('.promotionApply .topGroup .closeBtn').click(function(){
        $('.promotionApply .topGroup .detailGroup').toggleClass('display');
    })

    $ ('.promotionApply .bottomGroup .closeBtn').click(function(){
        $('.promotionApply .bottomGroup .detailGroup').toggleClass('display');
    })

    // promotionApply 詳細資訊展開按鈕轉換
    $ ('.promotionApply .infoGroup .topGroup .expandBtn button').click(function(){
        $(".promotionApply .infoGroup .topGroup .expandBtn button").toggleClass("display");
    })

    $ ('.promotionApply .infoGroup .bottomGroup .expandBtn button').click(function(){
        $(".promotionApply .infoGroup .bottomGroup .expandBtn button").toggleClass("display");
    })
})

//mailWrap
$(function(){
    $(".mailPage .inboxFilter .half ul li").click(function(){
        var smallType = $(this).index();

        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        $(".mailPage .typeContainer .smallType:eq("+ smallType +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
    $(".mailPage .typeContainer .smallType li input").change(function(){
        $(this).closest("li").addClass("selected");
    });
    $(".mailPage .functionWrap input").change(function(){
        $(".mailPage .typeContainer .smallType li input")
        .prop('checked', true)
        .closest("li")
        .addClass("selected");
    })
    $(document).on("click",".mailPage .functionWrap button",function(){
        var n = $(this).index();
        var count = $(".mailPage .typeContainer .smallType li").length;

        if ( n == 1 ) {
            $(".mailPage .typeContainer .smallType li.selected").removeClass("unread");
        } else if ( n == 2 ) {
            $(".mailPage .typeContainer .smallType li.selected").remove();
        }

        $(".mailPage .countBlock .num").text(count);
    });
    $(".mailPage .countBlock ul li").click(function(){
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
})

//bankcardPage
$(function(){
    $(".bankcardPage .accountType li").click(function(){
        var n = $(this).index();

        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".bankcardPage .cardType:eq(" + n + ")")
        .addClass("display")
        .siblings(".cardType")
        .removeClass("display");

        console.log(n);
    })
})

//helpPage .nav列切換
$(function(){
    $('.helpPage .nav .switchWrap button').click(function(){
        var n = $(this).index();
        
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".helpPage .nav ul:eq(" + n +")")
        .addClass("display")
        .siblings()
        .removeClass("display")
        .find("li:eq(0)")
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".helpPage .typeCollection:eq(" + n +")")
        .addClass("display")
        .siblings()
        .removeClass("display")
        .find(".themeArticle:eq(0)") //切換一定會預設第一個顯示
        .addClass("display")
        .siblings()
        .removeClass("display");

        var value = $(this).closest(".nav").find("ul.display li:eq(0) p").text();

        $(".helpPage .path .current").text(value);
    })

    //helpPage .nav 連動切換
    $(".helpPage .sideArea .nav ul li").click(function () {
        var m = $(this).index();
        var topUl = $(this).closest("ul").index() - 1;

        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");

        $(".helpPage .typeCollection:eq(" + topUl + ")")
            .find(".themeArticle:eq(" + m + ")")
            .addClass("display")
            .siblings()
            .removeClass("display");

        var value = $(this).find("p").text();

        $(".helpPage .path .current").text(value);
    })

    //helpList 功能
    $(".helpPage .helpList .content li:eq(0)").click(function(){
        $(".helpPage ol.nav .switchWrap button:eq(1)")
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".helpPage ol.nav ul:eq(1)")
        .addClass("display")
        .siblings()
        .removeClass("display");

        $(".helpPage ol.nav ul:eq(1) li:eq(0)")
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".helpPage .typeCollection:eq(1)")
        .addClass("display")
        .siblings()
        .removeClass("display");

        $(".helpPage .typeCollection:eq(1) .themeArticle:eq(0)")
        .addClass("display")
        .siblings()
        .removeClass("display");

        var value = $(".helpPage ol.nav ul:eq(1) li.active ").find("p").text();

        $(".helpPage .path .current").text(value);
    })
    $(".helpPage .helpList .content li:eq(1)").click(function(){
        $(".helpPage ol.nav .switchWrap button:eq(1)")
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".helpPage ol.nav ul:eq(1)")
        .addClass("display")
        .siblings()
        .removeClass("display");

        $(".helpPage ol.nav ul:eq(1) li:eq(3)")
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".helpPage .typeCollection:eq(1)")
        .addClass("display")
        .siblings()
        .removeClass("display");

        $(".helpPage .typeCollection:eq(1) .themeArticle:eq(3)")
        .addClass("display")
        .siblings()
        .removeClass("display");

        var value = $(".helpPage ol.nav ul:eq(1) li.active ").find("p").text();

        $(".helpPage .path .current").text(value);
    })
    $(".helpPage .helpList .content li:eq(2)").click(function(){
        $(".helpPage ol.nav .switchWrap button:eq(1)")
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".helpPage ol.nav ul:eq(1)")
        .addClass("display")
        .siblings()
        .removeClass("display");

        $(".helpPage ol.nav ul:eq(1) li:eq(1)")
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".helpPage .typeCollection:eq(1)")
        .addClass("display")
        .siblings()
        .removeClass("display");

        $(".helpPage .typeCollection:eq(1) .themeArticle:eq(1)")
        .addClass("display")
        .siblings()
        .removeClass("display");

        var value = $(".helpPage ol.nav ul:eq(1) li.active ").find("p").text();

        $(".helpPage .path .current").text(value);
    })
})

//goTop
$(function(){
	$(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 0){
                $(".goTop")
                .addClass("display")
        } else{
                $(".goTop")
                .removeClass("display");
        };
	})

    $(".goTop").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.delay('0').animate({
                scrollTop: 0
        },500)
    })
})

//transfer切換
$(function(){
    $(".withdrawalWrap .bottom form select").change(function(){
        var n = $(".withdrawalWrap .bottom form select").val();

        if(n == 1) {
            $(".withdrawalWrap .bottom form.bankcard")
            .addClass("display")
            .siblings().removeClass("display");
        }
    })
})


//register
$(function(){
    var phone = $(".registerWrap .phone")
    var btn = $(".registerWrap .codeBtn");

    $(phone).focus(function(){
        $(btn)
        .attr("disabled",false);
    })
    $(phone).blur(function(){
        $(btn)
        .attr("disabled",true);
    })
})

$(function () {
    var swiper = new Swiper('.ad_swiper', {
        autoplay: true,
        loop: true, //循環
        // autoHeight: true, //自動高度
        slidesPerView: 1,
    });
});
$(function () {
    var swiper = new Swiper('.swiper-selectBox', {
        loop: false, //循環
        width: 400, //強制寬
        autoHeight: true, //自動高度
        slidesPerView: 1.6,
    });
});
//.vipWrap .detailCardBox內選單滑動
$(function(){
    var swiper = new Swiper('.swiper_levelList', {
        width: 800, //強制寬
        loop: false,
        autoHeight: true, //自動高
        slidesPerView: 5.2, //顯示個數
        spaceBetween: 0, //間距
    });
});