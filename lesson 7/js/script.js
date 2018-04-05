window.addEventListener('DOMContentLoaded', function(){
	let tab = document.getElementsByClassName('info-header-tab');
		tabContent = document.getElementsByClassName('info-tabcontent');
		info = document.getElementsByClassName('info-header')[0];
	
	function hideTabs(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	};

	hideTabs(1);

	function showTabs(b) {
		hideTabs(0);
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	};

	info.addEventListener('click', function(event) {
		let target = event.target;
		console.log('1');
		if ( target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if ( target == tab[i] ) {
					showTabs(i);
					break;
				}
			}
		};
	})
});