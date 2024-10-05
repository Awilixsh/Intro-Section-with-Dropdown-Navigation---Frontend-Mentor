function openNavbar(){

}

function openNavbar_drop(navDrop){
	var navList = document.getElementById('navList').getElementsByTagName("li")[navDrop].getElementsByTagName('img')[0];
	//var navList = document.getElementById('test');
	if(navList.src.includes('/images/icon-arrow-up.svg')){
		navList.src = "./images/icon-arrow-down.svg";
	} else {
		navList.src = "./images/icon-arrow-up.svg";
	}
}

