function openNavbar(){
	var imgButton = document.getElementById('imgHamburger');
	var divOverlay = document.getElementById('divOverlay');
	var navBar = document.getElementById('divNav');
	
	if(navBar.style.display == 'block'){
		imgButton.style.display = 'block';
		divOverlay.style.display = 'none';
		navBar.style.display = 'none';
	} else {
		divOverlay.style.display = 'block';
		navBar.style.display = 'block';
		navBar.style.backgroundColor = 'hsl(0,0%,98%)';
		imgButton.style.display = 'none';
	}
}

function openNavbar_drop(navDrop,navDrop_title){
	var navList = document.getElementById('navList').getElementsByTagName("li")[navDrop];
	var navList_img = navList.getElementsByTagName('img')[0];
	var navList_sub = navList.getElementsByTagName('ul')[0];
	var navList_title = document.getElementsByClassName('navDropdowntitle')[navDrop_title];
	console.log(navList_title);
	if(navList_img.src.includes('/images/icon-arrow-up.svg')){
		navList_img.src = "./images/icon-arrow-down.svg";
		navList_sub.style.display = 'none';
		navList_title.style.color = 'hsl(0, 0%, 41%)'
	} else {
		navList_img.src = "./images/icon-arrow-up.svg";
		navList_sub.style.display = 'block';
		navList_title.style.color = 'hsl(0, 0%, 8%)';
	}
}
