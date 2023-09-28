/**
 *画像カタログで画像を制御する
 */
(()=>{

	const cataloges3 = [
		{
			//にぎり
						detail:
					[
								 {text:'', img:'./img/190911_398cyutoro.png',price:'\\211'}
								,{text:'', img:'./img/190911_237hotate.png',price:'\\212'}
								,{text:'', img:'./img/170301_405nasu.png',price:'\\213'}
								,{text:'', img:'./img/161109_175kohada.png',price:'\\214'}
							]
		}
		,
		{
			//軍艦まき
						detail:
						[
								 {text:'', img:'./img/501_sikura.png',price:'\\311'}
								,{text:'', img:'./img/511_snegimaguro.png',price:'\\312'}
								,{text:'', img:'./img/080_5.jpg ',price:'\\313'}
								,{text:'', img:'./img/080_5.jpg ',price:'\\314'}
						]
		}
		,{
			//汁
						detail:
						[
								 {text:'', img:'./img/160705_907asariakadasi.png',price:'\\411'}
								,{text:'', img:'./img/161109_900akadasi.png',price:'\\4121'}
								,{text:'', img:'./img/080_5.jpg ',price:'\\413'}
								,{text:'', img:'./img/080_5.jpg ',price:'\\414'}

						]
		}
		,{
			//デザート
						detail:
						[
								 {text:'', img:'./img/210421_969tapioka.png',price:'\\511'}
								,{text:'', img:'./img/210721_2355kakigouri.png',price:'\\5121'}
								,{text:'', img:'./img/210721_2403meron.png',price:'\\513'}
								,{text:'', img:'./img/080_5.jpg ',price:'\\514'}

						]
						}
		]



//window.location.reload(true);
//	window.location.reload(true);

	const $doc = document;

	const $netaimg = $doc.getElementsByClassName('netaimg');
	const $as = $doc.getElementsByTagName('a');
	const alength = $as.length;

	const $syoki = $doc.getElementsByClassName('syoki');
	const $netaimgs = $doc.getElementsByClassName('netaimg')
	;
	const jyunbi = "./img/jyunbi.PNG";
	const jyunbiPrice = "\\XXXXX";

	const $imgsB = $doc.getElementsByTagName('img');

//	$netaimg = $doc.getElementsByTagName

	let $tds = $netaimg[0].getElementsByTagName('td');

	console.log('$netaimg!',$netaimg);
	console.log('$$tds!',$tds);


	let index = 0;
	let $imgs = $doc.getElementsByTagName('table')[0].getElementsByTagName('img');

	$netaimgs[0].style.display = 'none';

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
		//


	}

//window.open("img/"+img, "imgwindow", "width=866,height=580");



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
			$tds[index].querySelectorAll('label')[0].textContent = cataloges3[_point].detail[index].price;

			$imgs[index].addEventListener("click",(e)=>{
				let $this = e.target;
				console.log("$imgs[index]!",$this);
				let imgsrc = $this.getAttribute('src');
				console.log("$imgs[index]B!",$this.getAttribute('src'));
				window.open(imgsrc, "imgwindow", "width=866,height=580");
			});

			index++;
		}
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
*/


})();