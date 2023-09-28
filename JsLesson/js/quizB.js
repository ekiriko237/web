/**
 *
 */
/**
 *
 */
/**
 *
 */
const quizs=[
	[],
	[],
	[]
	];

const question = 'Q1ロシアの首都はどこか';
const ansers =['ans1',
				'ans2',
				'ans3',
				'ans4'
				];
const correct ='ans4';


//debugger;

let questionT;
let $doc;

$('#questionA').text(question);
var $buttons = $('[type=button]');//$('input');
var index = 0;
const buttonLength = $buttons.length;

	//回答セット
	const setupQuiz = () =>{
		while(index < buttonLength){
		console.log($('[type=button]'));
		console.log($buttons[index].value);
			$buttons[index].value = ansers[index];
			index++;
		}
	}

	const clickHandeler =()=>{
		index = 0;

		while(index < buttonLength){
			$buttons[index].addEventListener('click',(e)=>{
					if(e.target.value === correct){
						alert("当たり");
					}else{
						alert("はずれ");
					}
				});
			index++;
		}
	}
	setupQuiz();
	//ボタンclick時イベント
	clickHandeler();


