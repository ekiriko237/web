/**
 *
 */
//https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps/What_is_JavaScript
const para = $('p');
const paraB = document.getElementsByTagName('p');
//const pLength = paraB.length;

console.log(para);
console.log(paraB);
//console.log('pLength:' + pLength);

	//実行より前に記述
	const updateNameB = () =>{
		let name = prompt('名前を入力して下さいA');
		para.text = 'Player 1: ' + name;
	}

	paraB[1].addEventListener('click',updateName);
	para[0].addEventListener('click',updateNameB);

	//どこに記述しても良い
	function updateName()  {
		let name = prompt('名前を入力して下さいB');
		paraB.textContent = 'Player 1: ' + name;
	};
