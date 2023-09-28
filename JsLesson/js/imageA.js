/**
 *画像カタログで画像を制御する
 */
(()=>{

	const catalogss = [
		 {text:'Audi',        urls:'https://www.audi.co.jp/content/dam/nemo/jp/models/r8/my20/r8/gallery/audisport_gallery_1920x1080_5.jpg '}
		,{text:'Porshe',      urls:'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EJMNViko69AFcLwVQjLpYn47uPi60JemN%25nBXHcAzr7C8AeEGewirQ9EcdN9yCU4w3jDzkoCYkF%25mNciVsXbO0LVbmaDU3OzqRUTJJ8CuLmuGdl76DrYFmOca1rYIgI7lP4iko6v00oHHpjsZAOfIu74OeP3Mt5FnSCT8RZWvgmKfPRGUODB0ntQRcUws4bx%25Odel2JAso" width="888" height="500" alt="undefine"  data-content="1"'}
		,{text:'マクラーレン',urls:'https://mclaren.scene7.com/is/image/mclaren/720S_Spider:crop-2x1?fmt=png-alpha&wid=1279&hei=640 '}
		];
/*
			<img src="https://www.audi.co.jp/content/dam/nemo/jp/models/r8/my20/r8/gallery/audisport_gallery_1920x1080_5.jpg" width="888" height="500" alt="undefine" data-content="0">
			<img src="https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EJMNViko69AFcLwVQjLpYn47uPi60JemN%25nBXHcAzr7C8AeEGewirQ9EcdN9yCU4w3jDzkoCYkF%25mNciVsXbO0LVbmaDU3OzqRUTJJ8CuLmuGdl76DrYFmOca1rYIgI7lP4iko6v00oHHpjsZAOfIu74OeP3Mt5FnSCT8RZWvgmKfPRGUODB0ntQRcUws4bx%25Odel2JAso" width="888" height="500" alt="undefine"  data-content="1">
			<img src="https://mclaren.scene7.com/is/image/mclaren/720S_Spider:crop-2x1?fmt=png-alpha&wid=1279&hei=640" width="888" height="500" alt="undefine" data-content="2">
*/

	const $doc = document;

	const $as = $doc.getElementsByTagName('a');
	const $ims = $doc.getElementsByTagName('img');
	const alength = $as.length;
	const catalogsslength = catalogss.length;

	const $imgs = $doc.getElementsByTagName('img');

	const $contents = $doc.querySelectorAll('[data-content]');

	let index = 0;

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
		const targetUri = 'http://localhost/test1/JsLesson/carCatalog/imageV.html?&num=' + taegetVal;

		console.log("targetUri",targetUri);

//		uri.href = './imageV.html?&num=' + taegetVal;
		uri.href = targetUri;
		window.open(uri, "_blank", "menubar=0,width=600,height=500,top=100,left=100");

	}

	const ini =()=>{
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

	index = 0;
	while(index < alength){
		$as[index].addEventListener("click",(e)=>{
			clickEv(e);
		});
		index++;
	}

})();