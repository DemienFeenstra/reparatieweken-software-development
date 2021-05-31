for(i = 1; i <= 30; i++){
	let btn = document.createElement("button");
	btn.innerText = i;
	btn.style.backgroundColor = 'green';
	document.body.appendChild(btn);
	container.appendChild(btn);
	btn.onclick = function(){
	btn.style.backgroundColor = 'red';
	}
}