/**
 *画像カタログで画像を制御する
 */
(()=>{
	//商品データ
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

	const $doc = document;

	const $netaimg = $doc.getElementsByClassName('netaimg');
	console.log('menu!',$doc.getElementsByClassName('menu'));
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
	const $kagoTT = $kagoTable[0].getElementsByClassName('ttprice');

	let ttprice = 0;
	let Isfirst = true; //初回フラグ

	//kago のTD
//	$kagoTd[0].textContent = '';

	let $tds = $netaimg[0].getElementsByTagName('td');

	let index = 0;
	let $tables = $doc.getElementsByTagName('table');
	let $imgs = $tables[0].getElementsByTagName('img');
	let $kagos = $tables[0].getElementsByTagName('a');

	let jsonData;	// JSON のデータ
	let req = new XMLHttpRequest(); // XMLHttpRequest オブジェクトを生成する

	$netaimgs[0].style.display = 'none';


	const getJSON = ()=> {

		req.onreadystatechange = function() { // XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
		if(req.readyState == 4 && req.status == 200){ // サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合

			 jsonData = JSON.parse(req.responseText); // 取得した JSON ファイルの中身を変数へ格納
			 var len = jsonData.length; // JSON のデータ数を取得

			 // JSON のデータ数分処理
			 for(var i=0; i<len; i++) {
			 	console.log("id: " + jsonData[i].detail[0].name + ", name: " + jsonData[i].detail[0].price);
			 }

			 }
		 };
	}

	req.open("GET", "./json/susiB.json", true); // HTTPメソッドとアクセスするサーバーのURLを指定
	req.send(null); // 実際にサーバーへリクエストを送信

getJSON();
/*	const sendMail =
	Email.send({
		    Host : "smtpサーバ",
		    Username : "ユーザーネーム(メアド)",
		    Password : "パスワード",
		    To : '送信先',
		    From : "送信元",
		    Subject : "タイトル",
		    Body : "本文"
		}).then(
		  message => alert(message)
);
*/
	// 3桁カンマ区切りとする.
	const comma = (num)=> {
	    return String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
	}


	const ini=()=>{
		index = 0;
		//画面matrix初期化
		while(index < $tds.length){
			$tds[index].querySelectorAll('img')[0].src = '';
			$tds[index].querySelectorAll('label')[0].textContent   = '\\XXXX';

			index++;
		}

		index = 0;

		while(index < $as.length){
			$as[index].classList.remove('is-active');

			index++;
		}
	}

	//かごに商品を追加
	const addKago =(_name,_price)=>{
		let table = $kagoTable[0];
		let newRow = table.insertRow();

		let newCell = newRow.insertCell();
		let newText = document.createTextNode(_name);
		newCell.appendChild(newText);
		newCell = newRow.insertCell();
		newText = document.createTextNode(_price);
		newCell.appendChild(newText);
		newCell.className = 'price';

		ttprice += parseInt(_price.slice(1));
		$kagoTT[0].textContent = "\\" + comma(ttprice);

		console.log('ttprice!',ttprice)

	}

	const setEvent =(e)=>{
		let $this = e.target;
		console.log('かご クリック');
		console.log('$kagos->',$this.previousElementSibling.previousElementSibling.textContent);
		let name = $this.previousElementSibling.previousElementSibling.textContent;
		let price = $this.previousElementSibling.textContent;

		addKago(name,price);

	};

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

		//画面matrixデータ詰め
		while(index < cataloges3[_point].detail.length){
			$tds[index].querySelectorAll('img')[0].src = cataloges3[_point].detail[index].img;
			$tds[index].querySelectorAll('label')[0].textContent = cataloges3[_point].detail[index].name + ' ';
			$tds[index].querySelectorAll('label')[1].textContent = cataloges3[_point].detail[index].price;

			//画像
			$imgs[index].addEventListener('click',(e)=>{
				let $this = e.target;
				let imgsrc = $this.getAttribute('src');

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
			dispMatrix(parseInt($this.dataset.nav, 10));
		});
		index++;
	}

return;

})();