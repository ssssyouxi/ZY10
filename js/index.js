$(function () {
    $("#left-button").click(function () {
        $(".pager-next.icon-angle-right").click()
        changeClass()
    })
    setInterval('$(".pro .dd li").removeClass("active").eq($(".pointer li.active").index()).addClass("active")', 500)
    
    function changeClass() {
        $(".pro .dd li").removeClass("active").eq($(".pointer li.active").index()).addClass("active")
    }
    for (var i = 0; i < $(".pointer li").length - 1; i++) {
        $(".pro .dd").append("<li></li>")
    }
})