(function(){function f(){e||(e=!0,c?(a.find("a").hide(),a.find("img").show(),$.get(c,null,function(b){var b=$(b),d=b.find("a.blog-pager-older-link");d?c=d.attr("href"):(c="",a.hide());b=b.find(g+">*");$(g).append(b);window.gapi&&window.gapi.plusone&&window.gapi.plusone.go&&window.gapi.plusone.go();a.find("img").hide();a.find("a").show();e=!1})):a.hide())}function i(){var b=document.body.scrollHeight,a=$(window).scrollTop()+$(window).height();100>b-a&&f()}function h(){if("item"!=_WidgetManager._GetAllData().blog.pageType&&
(c=$("a.blog-pager-older-link").attr("href"))){var b=$('<a href="javascript:;">Load more posts</a>');b.click(f);var d=$('<img src="'+j+'" style="display: none;">');$(window).scroll(i);a=$('<div style="text-align: center; font-size: 150%;"></div>');a.append(b);a.append(d);a.insertBefore($("#blog-pager"));$("#blog-pager").hide()}}var j="https://lh3.googleusercontent.com/-FiCzyOK4Mew/T4aAj2uVJKI/AAAAAAAAPaY/x23tjGIH7ls/s32/ajax-loader.gif",c="",a=null,g="div.blog-posts",e=!1;"complete"==document.readyState||
"loaded"==document.readyState?h():$(document).ready(h)})();
