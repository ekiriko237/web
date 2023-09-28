/**
 *画像カタログで画像を制御する
 */
(()=>{

	const cataloges3 = [
		{
			//にぎり
						detail:
					[
								 {text:'', img:'./img/190911_398cyutoro.png',name:'まぐろ',price:'\\211'}
								,{text:'', img:'./img/190911_237hotate.png',name:'ホタテ',price:'\\212'}
								,{text:'', img:'./img/170301_405nasu.png',name:'なす',price:'\\213'}
								,{text:'', img:'./img/161109_175kohada.png',name:'こはだ',price:'\\214'}
							]
		}
		,
		{
			//軍艦まき
						detail:
						[
								 {text:'', img:'./img/501_sikura.png',name:'いくら',price:'\\311'}
								,{text:'', img:'./img/511_snegimaguro.png',name:'ネギマグロ',price:'\\312'}
								,{text:'', img:'./img/080_5.jpg ',name:'name',price:'\\313'}
								,{text:'', img:'./img/080_5.jpg ',name:'name',price:'\\314'}
						]
		}
		,{
			//汁
						detail:
						[
								 {text:'', img:'./img/160705_907asariakadasi.png',name:'あさり',price:'\\411'}
								,{text:'', img:'./img/161109_900akadasi.png',name:'赤だし',price:'\\4121'}
								,{text:'', img:'./img/080_5.jpg ',name:'name',price:'\\413'}
								,{text:'', img:'./img/080_5.jpg ',name:'name',price:'\\414'}

						]
		}
		,{
			//デザート
						detail:
						[
								 {text:'', img:'./img/210421_969tapioka.png',name:'タピオカ',price:'\\511'}
								,{text:'', img:'./img/210721_2355kakigouri.png',name:'かき氷',price:'\\5121'}
								,{text:'', img:'./img/210721_2403meron.png',name:'メロン',price:'\\513'}
								,{text:'', img:'./img/080_5.jpg ',name:'name',price:'\\514'}

						]
						}
		]



//window.location.reload(true);
//	window.location.reload(true);

	const $doc = document;

	const $netaimg = $doc.getElementsByClassName('netaimg');
	console.log('menu!',$doc.getElementsByClassName('menu'));
//	const $menu = $doc.getElementsByClassName('menu');
	const $as = $doc.getElementsByClassName('menu')[0].getElementsByTagName('a');
	const alength = $as.length;

	const $syoki = $doc.getElementsByClassName('syoki');
	const $netaimgs = $doc.getElementsByClassName('netaimg')
	;
	const jyunbi = "./img/jyunbi.PNG";
	const jyunbiPrice = "\\XXXXX";

	const $imgsB = $doc.getElementsByTagName('img');

	//oya window document
	const $oyaw = window.parent.document;
	const $kago = $oyaw.getElementById('kago');
	const $kagoTd = $kago.contentDocument.getElementsByTagName('TD');
	const $kagoTable = $kago.contentDocument.getElementsByTagName('table');

	let Isfirst = true; //初回フラグ
	let		index2 = 0;

	//kago のTD
	$kagoTd[0].textContent = '';

	console.log('kago!',$kago);

//	$netaimg = $doc.getElementsByTagName

	let $tds = $netaimg[0].getElementsByTagName('td');

	console.log('$netaimg!',$netaimg);
	console.log('$$tds!',$tds);


	let index = 0;
	let $tables = $doc.getElementsByTagName('table');
	let $imgs = $tables[0].getElementsByTagName('img');
	let $kagos = $tables[0].getElementsByTagName('a');

	$netaimgs[0].style.display = 'none';

	const ini=()=>{
		index = 0;
		//画面matrix初期化
		while(index < $tds.length){
			$tds[index].querySelectorAll('img')[0].src = '';
			$tds[index].querySelectorAll('label')[0].textContent   = '\\XXXX';

					//かご イベント削除
		index2 = 2;

/*		while(index2 < $tds.length){
//			$kagos[index2].removeEventListener("click",(e)=>{setEvent(e)});
			$kagos[index2].removeEventListener("click",onClick, false);
			index2++;
		}
*/

			index++;
		}
		index = 0;
		while(index < $as.length){
			$as[index].classList.remove('is-active');

			index++;
		}
		//


	}

/*	const FkagoEvent =()=>{
	    var key;
	    return function() {
	        //同じイベントが定義されていたら消す;
	        handler.removeListener(key);
	        //新しいkeyを取得;
	        key = handler.addListener(window, 'click', (function(x) {
	            return function() {
	                console.log(x);
	            }
	        })(1), false);
	        return key;
	    }

	};
*/
/*	const fkagoEvent = (function(_hand) {
	    var keys = [];
	    return function() {
	        var p = $kagos;
	        for(var i = 0; i < p.length; i++) {
	            _hand.removeEventListener(keys[i]);
	            keys[i] = handler.addEventListener(p[i], 'click', (function(i) {
	                console.log(i);
	            })(i), false);
	        }
	        return keys;
	    }
	})();
*/
//window.open("img/"+img, "imgwindow", "width=866,height=580");

	//かごに商品を追加
	const addKago =(_name)=>{
		let table = $kagoTable[0];
		let newRow = table.insertRow();

		let newCell = newRow.insertCell();
		let newText = document.createTextNode(_name);
		newCell.appendChild(newText);

	}

	const setEvent =(e)=>{
		let $this = e.target;
		console.log('かご クリック');
		console.log('$kagos->',$this.previousElementSibling.previousElementSibling.textContent);
		let name = $this.previousElementSibling.previousElementSibling.textContent;
		//$kagoTd[0].textContent = name;
		addKago(name);

	};

	var aeventkago =(e)=>{
		console.log("かご イベント!",e);
	}


	const dispMatrix =(_point)=>{

		$syoki[0].style.display = 'none';
		$netaimgs[0].style.display = 'block';

		index = 0;
		while(index < 9){
			$tds[index].querySelectorAll('img')[0].src = jyunbi
			$tds[index].querySelectorAll('label')[0].textContent = jyunbiPrice;
			index++;
		}
		index = 0;
		index2 = 0;

/*		//かご イベント削除
			while(index2 < 9){
				console.log('remove$kagos[index2]',$kagos[index2]);

				$kagos[index].removeEventListener("click",(e)=>{
					console.log("かご イベント");
					setEvent(e);},false);

				index2++;
			}
*/
		//画面matrixデータ詰め
		while(index < cataloges3[_point].detail.length){
			$tds[index].querySelectorAll('img')[0].src = cataloges3[_point].detail[index].img;
			$tds[index].querySelectorAll('label')[0].textContent = cataloges3[_point].detail[index].name + ' ';
			$tds[index].querySelectorAll('label')[1].textContent = cataloges3[_point].detail[index].price;
			//console.log("$label!",$tds[index].querySelectorAll('label')[0]);

			//画像
			$imgs[index].addEventListener('click',(e)=>{
				let $this = e.target;
		//		console.log("$imgs[index]!",$this);
				let imgsrc = $this.getAttribute('src');
		//		console.log("$imgs[index]B!",$this.getAttribute('src'));
				window.open(imgsrc, "imgwindow", "width=866,height=580");
			});


		//かご イベント
			if(Isfirst){
				$kagos[index].addEventListener("click",(e)=>{
					console.log("かご イベント");
					setEvent(e);},false);
				}
				$kagos[index].style.color= 'OrangeRed';  //文字色

				index++;
			}
			Isfirst = false;
		};

	ini();

	index = 0;
	while(index < alength){
		$as[index].addEventListener("click",(e)=>{
			e.preventDefault();
			ini();
			let $this = e.target;
			$this.classList.add('is-active');
	//		ini();
			dispMatrix(parseInt($this.dataset.nav, 10));
//			clickEv(e);
		});
		index++;
	}

return;


	 $imgs = $doc.getElementsByTagName('img');

	const $contents = $doc.querySelectorAll('[data-content]');

	index = 0;

	const clickEv =(e)=>{
		e.preventDefault();
		let $this = e.target;
		const taegetVal = $this.dataset.nav;
		ini();

		const targetContent = $doc.querySelectorAll('[data-content]')[taegetVal];

		targetContent.style.display = "block";

		$this.classList.add('is-active');
		//videoページを開く
		const uri = new URL(location);
		uri.href = './imageV.html?&num=' + taegetVal;
		window.open(uri, "_blank", "menubar=0,width=600,height=500,top=100,left=100");

	}

/*	const ini =()=>{
		index = 0;
		while(index < catalogsslength){
			$imgs[index].style.display = "none";

			console.log('urls!', catalogss[index].urls);
			$imgs[index].src = catalogss[index].urls;
			$imgs[index].width = '888';
			$imgs[index].height = '500';
			$imgs[index].alt = 'undefine';
			$imgs[index].dataset.content  = '""' + index + '""';

			$as[index].classList.remove('is-active');

			index++;
		}
	}

	ini();

let table = document.getElementById('targetTable');
let newRow = table.insertRow();

let newCell = newRow.insertCell();
let newText = document.createTextNode('山田');
newCell.appendChild(newText);

*/
})();