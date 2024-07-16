// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //$('[rel="icon"]').attr('href', "/funny.ico");
        document.title = '别走呀┭┮﹏┭┮';
        clearTimeout(titleTime);
    }
    else {
        //$('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '来了呀O(∩_∩)O  ' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});

/* 手机客户端导航栏默认隐藏 */
var mobile_sidebar_menus = document.getElementById("sidebar-menus");
var menus_item_child = mobile_sidebar_menus.getElementsByClassName("menus_item_child");
var menus_expand = mobile_sidebar_menus.getElementsByClassName("expand");
for (var i = 0; i < menus_item_child.length; i++) {
    menus_item_child[i].style.display = "none";
    menus_expand[i].className += " closed";
}