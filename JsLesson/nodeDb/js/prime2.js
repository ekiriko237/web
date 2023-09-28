/**
 *
素数を50個計算する
2と2以上の自然数で奇数で約数１個のが数は素数
file:///C:/workspace/java/webTest1/public/Prime.html

ヤフオクテレカ検索
　条件を指定し一致するリストを表示する

　　nakamori

 */

	import { JsonC } from './jsonCs.js';

(()=>{

const $doc = document;


$doc.getElementById('js-question').textContent = '素数を50個計算するNode版';

const $buttons = $doc.getElementsByTagName('button');

$buttons[0].textContent = '計算開始';
$buttons[1].textContent = '世界遺産';
$buttons[2].textContent = 'ヤフオクテレカ';

let tn = 2;
let tna = tn - 1;
let modCnt = 0;
let primes = new Array(50).fill(0);
let primeCnt = 0;

let datetime = new Date();
let sw = 0;


	const $tables = $doc.getElementsByTagName('table');

/*                                      */

	const setDisp =(_ctName)=>{
			datetime = new Date();
			let label = '';

			if(sw === 0){label ='Start:'}else{label ='End:'};
	_ctName.textContent = (label +  datetime.getHours() + ':'
								+ datetime.getMinutes() + ':'
								+ datetime.getSeconds() + ':');

	}
/**
	ヤフオクテレカ
 */
	$buttons[2].addEventListener('click',(e)=>{

			$tables[1].style.display = 'none';
			$tables[2].style.display = 'block';

			let wcnt = 0;

			let $selects = $tables[0].getElementsByTagName("select");

			let wmin = $selects[1].value;
			let wmax = $selects[2].value;
			let wqua = $selects[0].value;

/*			wmin = 1000;
			wmax = 6000;
			wqua = 6;
*/
			let testlength = 10;
			let ret = getTeleca(wmin,wmax,wqua);

			//テーブル０クリア
			zeroKago();
			//テーブルdata追加
			wcnt = 0;
			while(wcnt < ret.length ){
				addKago(wcnt,ret[wcnt].name,ret[wcnt].price);
				wcnt++;
			}
		});
	const nodePost =(data,url)=>{
			const xhr = new XMLHttpRequest();

			let tjson = JSON.stringify(data);
			let retdata;
		  console.log(url);

			xhr.onreadystatechange =()=>{
				retdata =getJSON(xhr);

			}
			xhr.onerror =()=>{
				console.log("xhr onError");
			}

			xhr.open("POST", url, false); // HTTPメソッドとアクセスするサーバーのURLを指定
			console.log("url",url);
			xhr.open("POST",url,false);
			xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

			xhr.send(tjson); // 実際にサーバーへリクエストを送信


			return retdata;

}
			const 		getJSON= (xhr)=> {
					let wjsonData;
					console.log("readyState",xhr.readyState);
					if(xhr.readyState == 4 && xhr.status == 200){ // サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
						let jdata = JSON.stringify(xhr.responseText);
						console.log("xhr.responseText",xhr.responseText);
						wjsonData = JSON.parse(xhr.responseText); // 取得した JSON ファイルの中身を変数へ格納

						return wjsonData;
					}
				}
			//}

/*
	サーバからデータを取得する
	*/
	const getTeleca = (_min,_max,_quantity) =>{
		/*nodeへリクエスト
		http://localhost:3000/dbproc/jsondata
		{"Content-Type": "application/json"}
		{"max":6000,"min":1000,"quantity":5}

		https://qiita.com/keniooi/items/458732fc8f29cc8e445a

		*/
			let obj = new Object();

			obj.max = _max;
			obj.min = _min;
			obj.quantity = _quantity;

			let ret = nodePost(obj,"http://localhost:3000/dbproc/jsondata");

			return ret;

	};
/**
	素数計算
 */

	$buttons[0].addEventListener('click',(e)=>{
		$tables[1].style.display = 'block';
		$tables[2].style.display = 'none';
		datetime = new Date();
		let ctName = $doc.getElementById('js-msg');
		setDisp(ctName);

	//	let wquantity = getquantity();
		//素数計算
		calcPrime(getquantity());

		sw = 1;
		setDisp(ctName);

	});
/**
	世界遺産
 */
$buttons[1].addEventListener('click',(e)=>{
	window.location.href = 'https://www.unesco.or.jp/activities/isan/worldheritagelist/';
});

const getquantity=()=>{
		const $tables = $doc.getElementsByTagName('table');
		let $selects = $tables[0].getElementsByTagName('select');

		return parseInt( $selects[0].value,10);
}
/*
*/

	//素数計算

	const calcPrime =(quantity)=>{

		let Js;
		const primelength = quantity;

			// web api 素数計算
				let wwuri = `http://localhost:3000/Prime/${primelength}`;
				Js = new JsonC(wwuri);
				let cataloges3 =  Js.getJSON();

		const primecnt = cataloges3.prime.length;

		console.log("cataloges3:.prime",cataloges3.prime);
		console.log("cnt",primecnt);

		primes = cataloges3.prime;

		primeCnt = 0;
		while(primeCnt < primes.length){
			primeCnt++;

		}


		let $tds = $tables[1].getElementsByTagName('TD')

		let $tds2 = $doc.getElementsByTagName('TD');

		let rp1 = 0;
		let rp2 = 0;
		let limitct = 1;

		primeCnt = 0
		while(rp1 < 5){
			$tds[rp1].textContent = (rp1+1) + ":";
			while(rp2 < 10 && limitct <= primecnt){
				$tds[rp1].textContent += (',' + primes[primeCnt]) ;
				primeCnt++;
				limitct++;
				rp2++;
			}
			rp2 = 0;
			rp1++;

		}
}
	//かごに商品を追加
	const addKago =(_num,_name,_price)=>{
		let table = $tables[2];
		let newRow = table.insertRow();

		let newCell = newRow.insertCell();
		let newText = document.createTextNode(_num);

		newCell.appendChild(newText);
		newCell = newRow.insertCell();
		newText = document.createTextNode(_name);


		newCell.appendChild(newText);
		newCell = newRow.insertCell();
		newText = document.createTextNode(_price);
		newCell.appendChild(newText);
		newCell.className = 'price';

	}
	//かごの行を削除
	const zeroKago =()=>{
		let table = $tables[2];
		//table rows
		let rowscnt = table.tBodies[0].rows.length;
		if(rowscnt >1){
			rowscnt--;

			while(rowscnt > 0){
				table.tBodies[0].deleteRow(rowscnt);
				rowscnt--;

			}
		}

	}
})();