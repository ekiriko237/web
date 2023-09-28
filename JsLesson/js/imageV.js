/**
 *画像カタログで動画を制御する
 */
import { GetParam } from './getparm.js';
(()=>{


	const $doc = document;
	const loc = window.location;
	const getparm = new GetParam(loc);

	const num = getparm.getheadparm('num');

	let index = 0;
	const $divs = $doc.getElementsByClassName('video');

	const ini =()=>{
		while(index < $divs.length){
			$divs[index].style.display = 'none';

			index++;
		}
	}
	ini();
	$divs[num].style.display = 'block';
})();
