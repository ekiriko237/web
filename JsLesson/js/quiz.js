
const quizs=[
	{ 	question : 'Q1ロシアの首都はどこか',
		 ansers :['ans1',
				'ans2',
				'ans3',
				'当たり'
				],
		 correct :'当たり'},
	{ 	question : 'Q2イスラエルの首相は誰か',
		 ansers :['ans1',
				'ans2',
				'当たり',
				'ans4'
				],
		 correct :'当たり'},
	{ 	question : 'Q3森鷗外の書籍はどれか',
		 ansers :['ans1',
				'当たり',
				'ans3',
				'ans4'
				],
		 correct :'当たり'},
	];
const endMsg = "ご利用ありがとう、またの来店待っています。"
//debugger;
// https://www.youtube.com/watch?v=fAluwAmHrws
let questionT;
let $doc;
let gameCount = 1;



var $buttons = $('[type=button]');//$('input');
var index = 0;
const buttonLength = $buttons.length;
const quizsLength = quizs.length;

	//回答セット
	const setupBuuton=(_gameCount)=>{
			$buttons[index].value = quizs[_gameCount -1 ].ansers[index];
	};
	const setupQuiz = (_gameCount) =>{
		$('#questionA').text(quizs[_gameCount -1 ].question);
	//	$buttons.forEach(value => console.log(value));

		index = 0;
		while(index < buttonLength){
			setupBuuton(_gameCount);
			clickHandeler(_gameCount);
			index++;
		}
	}

	//ボタンクリック判定
	const clickHandeler =(_gameCount)=>{
			$buttons[index].addEventListener('click',(e)=>{
			if(e.target.value === quizs[_gameCount -1 ].correct){
				window.alert('当たり:' + (gameCount ) + '回');
			}else{
				window.alert('はずれ:' + (gameCount ) + '回');
			}
			gameCount++;
			if((gameCount) <= quizsLength){
				setupQuiz(gameCount);
			}else{

				window.alert('game end :' + (gameCount -1) + '回');
				$('#questionA').text(endMsg);
				$('#questionA').css('color','orange')
			}
	});
	}

	setupQuiz(gameCount);
