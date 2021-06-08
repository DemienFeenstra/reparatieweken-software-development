var color = ["red", "purple", "blue", "black", "white"];


for(i = 1; i <= 30; i++){
	let btn = document.createElement("button");
	btn.innerText = i;
	btn.style.backgroundColor = 'green';
	document.body.appendChild(btn);
	container.appendChild(btn);
	btn.onclick = function(){
	click(this,color);
	}
}

function click(button,color){
  	var color2 = color.indexOf(button.style.backgroundColor);
    button.style.backgroundColor = color[color2+1]
    if(button.style.backgroundColor == "white"){
        button.remove();
    }
} 