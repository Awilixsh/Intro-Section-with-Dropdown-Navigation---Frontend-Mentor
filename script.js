function openNavbar(){
	var imgButton = document.getElementById('imgHamburger');
	var divOverlay = document.getElementById('divOverlay');
	var navBar = document.getElementById('divNav');
	
	if(imgButton.src.includes('/images/icon-close-menu.svg')){
		imgButton.src = './images/icon-menu.svg';
		imgButton.style.zIndex = '1';
		divOverlay.style.display = 'none';
		navBar.style.display = 'none';
	} else {
		imgButton.src = './images/icon-close-menu.svg';
		imgButton.style.zIndex = '3';
		divOverlay.style.display = 'block';
		navBar.style.display = 'block';
	}
	
	
}

function openNavbar_drop(navDrop){
	var navList = document.getElementById('navList').getElementsByTagName("li")[navDrop].getElementsByTagName('img')[0];
	if(navList.src.includes('/images/icon-arrow-up.svg')){
		navList.src = "./images/icon-arrow-down.svg";
	} else {
		navList.src = "./images/icon-arrow-up.svg";
	}
}

