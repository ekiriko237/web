/**
 *
素数を50個計算する
2と2以上の自然数で奇数で約数１個のが数は素数
file:///C:/workspace/java/webTest1/public/Prime.html
 */


const $doc = document;

$doc.getElementById('js-question').textContent = 'テレカコレクションする';

$buttons = $doc.getElementsByTagName('button');

$buttons[0].textContent = '素数計算開始ローカル';
$buttons[1].textContent = '世界遺産';
$buttons[2].textContent = 'テレカコレクション';

let tn = 2;
let tna = tn - 1;
let modCnt = 0;
let primes = new Array(50).fill(0);
let primeCnt = 0;

let datetime = new Date();
let sw = 0;

	const setDisp =(_ctName)=>{
			datetime = new Date();
			let label = '';

			if(sw === 0){label ='Start:'}else{label ='End:'};
	_ctName.textContent = (label +  datetime.getHours() + ':' + datetime.getMinutes() + ':' + datetime.getSeconds() + ':');

	}

/**
	素数計算

 */

$buttons[0].addEventListener('click',(e)=>{
	datetime = new Date();
	let ctName = $doc.getElementById('js-msg');
	setDisp(ctName);
	//素数計算
	calcPrime();

	sw = 1;
	setDisp(ctName);

});
/**
	世界遺産

 */
$buttons[1].addEventListener('click',(e)=>{
	window.location.href = 'https://www.unesco.or.jp/activities/isan/worldheritagelist/';
});
//テレカコレクション
$buttons[2].addEventListener('click',(e)=>{
	telecaDb();
});

const telecaDb =()=>{
	alert("//作成中");
	//node へリクエスト
	//node からJson受け取り
	//データを表にする
}

	//素数計算

const calcPrime =()=>{


	while(primeCnt < 3000){
		modCnt = 0;
		while(tna > 0){

			if(tn % tna === 0){ modCnt++ };
			tna--;

		}

		if(modCnt > 1){
			//not 素数

		}else
		{
			//
			primes[primeCnt] = tn;
			primeCnt++;
		}
		if(tn > 2){ tn += 2 }else{ tn++ }; //２より大きな素数は奇数のみ

		tna = tn - 1
	}

	primeCnt = 0;
	while(primeCnt < primes.length){
		console.log(primes[primeCnt]) ;
		primeCnt++;

	}

	$tds = $doc.getElementsByTagName('TD');

	let rp1 = 0;
	let rp2 = 0;
	primeCnt = 0
	while(rp1 < 5){
		while(rp2 < 10){
			$tds[rp1].textContent += (',' + primes[primeCnt]) ;
			primeCnt++;
			rp2++;
		}
		rp2 = 0;
		rp1++;

	}

}