/**
 *
 */

	//let tmp = XMLHttpRequest.getResponseHeader("numTate");

import { GetParam } from './getparm.js';
(()=>{


const Getparm = new GetParam(location.search);


	//	ヘッダー情報取得
		let headParm = location.search;

	let $doc = document;

	let ltate = Getparm.getheadparm('numTate');
	let lyoko = Getparm.getheadparm('numYoko')
	;
	$doc.getElementById('Tate').textContent = ltate;
	$doc.getElementById('Yoko').textContent = lyoko;

	let tmpMenseki =  lyoko * ltate;

	if(Getparm.getheadparm('textKeijyo') === '三角'){
		$doc.getElementById('Menseki').textContent = tmpMenseki /2 ;
		$doc.getElementById('Keijyo').textContent = '三角形面積';
	}else{
		$doc.getElementById('Menseki').textContent = tmpMenseki;
		$doc.getElementById('Keijyo').textContent = '四角形面積';
	}

})();