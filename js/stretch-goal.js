window.onload = function(){
    var start = document.getElementById('start');
    var modal = document.getElementById('modal');
    var instructions = document.getElementById('instructions');
    var instWords = document.getElementById('instWords');

    modal.style.display = 'block';
    instWords.style.display = 'none';

    instructions.onclick = function(){
        instWords.style.display = 'block';
    }
}

start.onclick = function(){
    modal.style.display = 'none';
    
	var dirt = document.querySelectorAll('.dirt');
	var sound = document.getElementById('sound');
	var grid = document.getElementById('dirt-box');
	var numRow = 3;
	var row0 = document.getElementById('row0-container');
	var row1 = document.getElementById('row1-container');
	var row2 = document.getElementById('row2-container');
    var score = 0;
    var scoreTxt = document.getElementById('score');
    var currentPoke;
    var pikaCombo = false;
    var pikaBar = document.getElementById('pikaBar');
    var pikaCounter = 0;
    var g = 174;

	for (let i = 0; i < dirt.length; i++) {
		dirt[i].addEventListener('click', function() {
			if (dirt[i].innerHTML) {
				sound.play()
                //console.log(dirt[i].childNodes[0].id);
                checkPokemon(dirt[i].childNodes[0].id)
                scoreTxt.innerHTML = 'Score: ' + score;
				dirt[i].innerHTML = "";
	  		} else {
	    	console.log("Nothing there.");
	  		}
		});
	};
    function checkPokemon(idHold){
        switch(idHold){
            case 'pikachu':
                score += 3;
                if (pikaCombo == true){
                    pikaCombo = false;
                    var pikaLev = document.createElement('div');
                    pikaLev.style.width = '20%';
                    pikaLev.style.backgroundColor = 'rgb(232, ' + g + ', 0)';
                    g -= 25;
                    pikaLev.style.height = '100px';
                    pikaLev.setAttribute('class', 'pikaLevel')
                    pikaBar.appendChild(pikaLev);
                    pikaCounter++;
                    if (pikaCounter == 5) {
                        console.log('deon~')
                        pikaCounter = 0;
                        pikaBar.innerHTML = ''
                        score += 100;
                        g = 174;
                    }

                }else{
                    pikaCombo = true;
                }
            break;
            case 'rowlet':
                score += 2;
                pikaCombo = false;
            case 'evee':
                score += 1;
                pikaCombo = false;
            break;
            case 'magikarp':
                score += 5;
                pikaCombo = false;
            break;
            default:
                score += 1;
                pikaCombo = false;
        }
    }

	setInterval(setMole,1000);

	function checkNeighbor(row, pos) {
		var randRow = Math.floor(Math.random() * numRow);
		var setRow;

		switch(randRow){
			case 0:
				setRow = row0;
			break;
			case 1:
				setRow = row1;
			break;
			case 2:
				setRow = row2;
			break;
			default:
				console.log('Something in the checkNeighbor switch is not right!')	
		}
		//console.log(setRow)
        if(pos == 0){
        	if(row[1].innerHTML != "") {
        		newDirt(setRow);
        	}
        }else if(pos == row.length - 1){
        	if(row[row.length - 2].innerHTML != ""){
        		newDirt(setRow)
        	}
        }else{
        	if(row[pos + 1].innerHTML != "" || row[pos - 1].innerHTML != ""){
        		newDirt(setRow)
        	}
        }
}

  function newDirt(row) {
  	var div = document.createElement('div');
    var className;
    switch(row){
    	case row0:
    		className = 'dirt row0';
    	break;
    	case row1:
    		className = 'dirt row1';
    	break;
    	case row2:
    		className = 'dirt row2'
    }
    //console.log(className)
    div.setAttribute('class', className);
    div.addEventListener('click', function(){
    	if(div.innerHTML != "") {
    		sound.play();
            checkPokemon(div.childNodes[0].id)
            scoreTxt.innerHTML = 'Score: ' + score;
    		div.innerHTML = '';
    	}else{
    		console.log('Nothing there');
    	}
    })
    score--
    scoreTxt.innerHTML = 'Score: ' + score;
    row.appendChild(div);
}

  // Stretch Goal
  function setMole() {
    var mole = document.createElement('img');
    mole.setAttribute('class', 'mole');
    var pokeImg = ['pikachu', 'rowlet', 'evee', 'magikarp']
    var randPoke = Math.floor(Math.random()* pokeImg.length);
    mole.src = 'assets/' + pokeImg[randPoke] + '.png';
    mole.id = pokeImg[randPoke];
    //Object pokemon src and name point vaule
    //
    currentPoke = pokeImg[randPoke];
    //console.log(currentPoke)
    var randRow = Math.floor(Math.random()* numRow);
    var className = 'row' + randRow;
    var currentRow = document.getElementsByClassName(className);
    var randPos = Math.floor(Math.random()* currentRow.length);

    if (currentRow[randPos].innerHTML === "") {
        //console.log(currentRow[randPos])
        currentRow[randPos].appendChild(mole);
        checkNeighbor(currentRow, randPos)
    } else {
    //console.log(currentRow[randPos].innerHTML)
      console.log("Too many moles.");
    }
  }


}