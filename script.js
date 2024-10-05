function openNavbar(){
	var imgBurger = document.getElementById('imgHamburger');
}

function openNavbar_drop(navDrop){
	var navList = document.getElementById('navList').getElementsByTagName("li")[navDrop].getElementsByTagName('img')[0];
	//var navList = document.getElementById('test');
	console.log(navList.src);
	if(navList.src.includes('/images/icon-arrow-up.svg')){
		navList.src = "./images/icon-arrow-down.svg";
	} else {
		navList.src = "./images/icon-arrow-up.svg";
	}
}

