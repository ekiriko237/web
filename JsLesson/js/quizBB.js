/**
 *
 */
	const quiz = [
	 {
	    question: 'ゲーム史上、最も売れたゲーム機はどれ？',
	    answers: [
			'スーパーファミコン',
			 'PlayStation 2',
			 'ニンテンドーDS',
	 		'Xbox 360'
		],
	    correct: 'ニンテンドーDS'
	  }, {
	    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
	    answers: [
			'MOTHER2',
			 'スーパーマリオブラザーズ3',
			 'スーパードンキーコング',
			 '星のカービィ'
		],
	    correct: 'MOTHER2'
	  }, {
	    question: 'ファイナルファンタジーⅣの主人公の名前は？',
	    answers: [
			'フリオニール',
			 'クラウド',
			 'ティーダ',
			 'セシル'
		],
	    correct: 'セシル'
	  }
	];

console.log($('#js-question').val);
console.log(document.getElementById("js-question").textContent);

let $question = document.getElementById("js-question");
let $buttons = document.getElementsByTagName('button');
const buttonsLength = $buttons.length;
let quizIndex = 0;
const quizLength = quiz.length;
const endMsg = "ご利用ありがとう、またの来店待っています。"

console.log($question);
console.log($buttons);

	const setUpquiz =(quizIndex)=>{
		$question.textContent = '#' +
			 ( quizIndex + 1) + quiz[quizIndex].question;

		//Set button
		let index = 0;
		while(index < buttonsLength){
			$buttons[index].textContent =
				 quiz[quizIndex].answers[index];
			index++;
		}

	}


	const clickHndler =(e)=>{
		window.alert((e.target.textContent
			=== quiz[quizIndex].correct ? 'true':'False'));
		quizIndex++;

		if(quizIndex < quizLength){
			setUpquiz(quizIndex);
		}
		else{
			window.alert(' end game');
			$question.textContent = endMsg;
			$('#js-question').css('color','green');
		}
	}
	//Set event
	const setEvent = ()=>{
		index = 0;
		while(index < buttonsLength){
			$buttons[index].addEventListener('click',(e)=>{
				clickHndler(e);
			});
			index++;
		}
	};

	setUpquiz(quizIndex);
	setEvent(quizIndex);
/*	$buttons[0].addEventListener('click',(e)=>{
		clickHndler(e);
	});

	$buttons[1].addEventListener('click',(e)=>{
		clickHndler(e);
	});

	$buttons[2].addEventListener('click',(e)=>{
		clickHndler(e);
	});

	$buttons[3].addEventListener('click',(e)=>{
		clickHndler(e);
	});
*/

/*	index = 0;
	while(index < buttonsLength){
		$buttons[index].addEventListener('click',()=>{
			if($buttons[0].textContent === correct){
				window.alert('true');
			}else{
				window.alert('False');
			}
		});
		index++;
	}
*/