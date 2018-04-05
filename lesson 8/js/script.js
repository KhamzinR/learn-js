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

	let deadline = '2018-04-07 22:05';
	let tTime = Date.parse(deadline) - Date.parse(new Date());

	function totalTime(endtime) {
		let tTime = Date.parse(deadline) - Date.parse(new Date());
		let	seconds = Math.floor( ( tTime / 1000 ) % 60 ),
			minutes = Math.floor(( tTime / 1000 / 60) % 60) ,
			hours = Math.floor(tTime / 1000 / 60 / 60 );
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
			
			if ( tt.total <= 0 ) {
				clearInterval(t);
			} else {
				s.innerHTML = tt.sec;
				m.innerHTML = tt.min;
				h.innerHTML = tt.hs;

			}

		};

		if (tTime >= 0) {
			updateTimes();
			let t = setInterval(updateTimes, 1000);
		}

	};

	setUpdateTimer('timer', deadline);
	
});