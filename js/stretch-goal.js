window.onload = function() {
	var dirt = document.querySelectorAll('.dirt');
	var sound = document.getElementById('sound');
	var grid = document.getElementById('dirt-box');
	var numRow = 3;
	var row0 = document.getElementById('row0-container');
	var row1 = document.getElementById('row1-container');
	var row2 = document.getElementById('row2-container');

	for (let i = 0; i < dirt.length; i++) {
		dirt[i].addEventListener('click', function() {
			if (dirt[i].innerHTML) {
				sound.play();
					dirt[i].innerHTML = "";
	  		} else {
	    	console.log("Nothing there.");
	  		}
		});
	};

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
		console.log(setRow)
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
    console.log(className)
    div.setAttribute('class', className);
    div.addEventListener('click', function(){
    	if(div.innerHTML != "") {
    		sound.play();
    		div.innerHTML = '';
    	}else{
    		console.log('Nothing there');
    	}
    })
    row.appendChild(div);
}

  // Stretch Goal
  function setMole() {
    var mole = document.createElement('div');
    mole.setAttribute('class', 'mole');
    var randRow = Math.floor(Math.random()* numRow);
    var className = 'row' + randRow;
    var currentRow = document.getElementsByClassName(className);
    var randPos = Math.floor(Math.random()* currentRow.length);

    if (currentRow[randPos].innerHTML === "") {
    //console.log(currentRow[randPos])

      currentRow[randPos].appendChild(mole);
      checkNeighbor(currentRow, randPos)
    } else {
    console.log(currentRow[randPos].innerHTML)
      console.log("Too many moles.");
    }
  }


}