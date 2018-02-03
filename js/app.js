window.onload = function() {
	var dirt = document.getElementsByClassName('dirt');
	var sound = document.getElementById('sound');
	var grid = document.getElementById('dirt-box');
	setInterval(setMole, 3000)

	for(let i = 0; i < dirt.length; i++){
		dirt[i].addEventListener('click', function(){
			console.log(i)
			if (dirt[i].innerHTML !== "") {
				sound.play();
				dirt[i].innerHTML = ''
			}else{
				console.log('Nothing There! haha')
			}
		})
	}
	function setMole(){
		var mole = document.createElement('div');
		mole.id = 'mole';
		var randNum = Math.floor(Math.random() * dirt.length);
		console.log(randNum)
		if (dirt[randNum].innerHTML == "") {
			dirt[randNum].appendChild(mole);
		}else{
			console.log('Too many Moles!')
		}
	}
}

// Stretch Goal:
// var 	row0	0	Mole~0	Mole~1	Mole~2	|	Mole~3
// 		row1	1	Mole~0	Mole~1	Mole~2	|	Mole~3
// 		row2	2	Mole~0	Mole~1	Mole~2	|	Mole~3

// if(2 moles) if(mole is * above or below)
// 					⬇︎
// 			____.innerHTML !== ''

// above or below:
// var store each row
// each var store multi div
// nodelist
// list of nodes for each Element
// length + index = acess

// var row0 = document.getElementsByClassName('row0');
// var row1 = document.getElementsByClassName('row1');
// var row2 = document.getElementsByClassName('row2');

// function ahifdohaosf(){
// 	if(2 moles are above or below){
// 		setTimeout(fieihaf, 3000);
// 	}
// 	function fieihaf(){
// 		apend new dirt in the dirt-box
// 		do the stuff in the for loop (not a for loop)
// 	}
// }