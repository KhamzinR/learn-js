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
	});

	let deadline = '2018-04-05 22:39';
	

	function totalTime(endtime) {
		let tTime = Date.parse(deadline) - Date.parse(new Date());
		let	seconds = Math.floor( ( tTime / 1000 ) % 60 ),
			minutes = Math.floor(( tTime / 1000 / 60) % 60) ,
			hours = Math.floor(tTime / 1000 / 60 / 60 );

			if ( tTime < 0 ) {
				seconds = 0;
				minutes = 0;
				hours = 0;
			};
			return {
					'total': tTime,
					'sec': seconds,
					'min': minutes,
					'hs': hours
			}
	};

	function setUpdateTimer (id,times) {
		let s = document.getElementsByClassName('seconds')[0],
			m = document.getElementsByClassName('minutes')[0],
			h = document.getElementsByClassName('hours')[0];

		function updateTimes() {
			let tt = totalTime(times);
			
			if ( tt.sec < 10 ) {s.innerHTML = '0'+tt.sec} else {s.innerHTML = tt.sec};
			if ( tt.min < 10 ) {m.innerHTML = '0'+tt.min} else {m.innerHTML = tt.min};
			if ( tt.hs < 10 ) {h.innerHTML = '0'+tt.hs} else {h.innerHTML = tt.hs};
		
			if ( tt.total < 0 ) {clearInterval(t);}
		};

	
			updateTimes();
			let t = setInterval(updateTimes, 1000);
	

	};

	setUpdateTimer('timer', deadline);
	
});