/**
 *
 */
const button = document.querySelector('button');

console.log(button);

button.addEventListener('click',fclick);

function createPara(index){
	let para = document.createElement('p');
	let tdate = new Date();
	para.textContent = tdate.getMinutes() + ':' + tdate.getSeconds();
	para.style.fontStyle.fontcolor('red');
//	$('p').css(color,'orange');
	document.body.appendChild(para);
}

function fclick(){
	//window.alert('click');
	let index = 0;
	while(index < 1){

		createPara(index);
		index++;
	}
	//createPara();
}