var container = document.getElementById('container');

for(i = 0; i < 1; i++){
	let btn = document.createElement('button');
	btn.appendChild(document.createTextNode('button 1'));
    	btn.style.backgroundColor = 'green';
    	btn.onclick = function(){
        	changeColor('green');
    	}
   	document.body.appendChild(btn);
    container.appendChild(btn);
}

for(i = 0; i < 1; i++){
	let btn = document.createElement('button');
	btn.appendChild(document.createTextNode('button 2'));
    	btn.style.backgroundColor = 'red';
    	btn.onclick = function(){
        	changeColor('red');
    	}
   	document.body.appendChild(btn);
    container.appendChild(btn);
}

for(i = 0; i < 1; i++){
	let btn = document.createElement('button');
	btn.appendChild(document.createTextNode('button 3'));
    	btn.style.backgroundColor = 'blue';
    	btn.onclick = function(){
        	changeColor('blue');
    	}
   	document.body.appendChild(btn);
    container.appendChild(btn);
}

function changeColor(color){
    let body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = color;
}