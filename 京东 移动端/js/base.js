$(function(){
	//透明度
	search_appear();
	function search_appear(){
		var bannerheight=$(".jd_search")[0].offsetHeight;
		window.onscroll=function(){
		var scroll_height=document.documentElement.scrollTop;	
		var opa;
		console.log(bannerheight);
		console.log("------"+scroll_height);
		}
	
	}
	
})
