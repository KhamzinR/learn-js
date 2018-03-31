// var ul = document.getElementsByClassName("menu");
// var li = document.createElement("li");

// li.appendChild(document.createTextNode("Пятый пункт"));
// li.setAttribute("class", "menu-item"); // added line
// ul.appendChild(li);

function addItem(){
    var ul = document.getElementsByTagName("ul")[0];
    var li_all = document.getElementsByClassName("menu-item");

    var li = document.createElement("li");
    li.setAttribute("class", "menu-item"); // added line
    li.appendChild(document.createTextNode("Пятый пункт"));
    ul.appendChild(li);

    li = document.createElement("li");				
				li.setAttribute("class", "menu-item"); // added line
    li.appendChild(document.createTextNode("Третий пункт"));
    
    ul.removeChild(li_all[1]); 
    ul.insertBefore(li,li_all[2]);
}

function reloadBg() {

		let bodyBg = document.getElementsByTagName('body');
		bodyBg[0].style.backgroundImage = "url('img/apple_true.jpg')";

}

function replaceTitle() {

		let reTitle = document.getElementsByTagName('title');
		reTitle[0].textContent = reTitle[0].text + " подлинный";
		
}

function deleteBanner() {

		let banner = document.getElementsByClassName('adv');
		banner[0].remove();

}

function promptRelation() {
		
		let s = prompt('Как вы относитесь к технике Apple?','');
		let p = document.getElementById('prompt');
		p.innerHTML = '<p>' + s + '</p>';
		
}

addItem();
reloadBg();
replaceTitle();
deleteBanner();
promptRelation();