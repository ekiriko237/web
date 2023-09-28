/**
 *	【JavaScript超入門講座】基礎文法だけでクイズゲームのアプリを開発！
	https://www.youtube.com/watch?v=fAluwAmHrws
 */
console.log('start');

const quizs=[
		{
			question : 'ゲーム史上、最も売れたゲーム機はどれ？',
			answers : ['スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'],
			correct : 'ニンテンドーDS'
		}
		,{
			question : '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
			answers : ['MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
			correct : 'MOTHER2'
		}
		,{
			question : 'ファイナルファンタジーⅣの主人公の名前は？',
			answers : ['フリオニール', 'クラウド', 'ティーダ', 'セシル'],
			correct : 'シル'
		}
];

let quizCnt = 0;

const $doc = document;
let $question = $doc.getElementById('js-question');


let $buttons = $doc.getElementsByTagName('button');

let loopCt = 0;
let btnCnt = $buttons.length;

const setQuiz =(_quizCnt)=> {
	$question.textContent = quizs[_quizCnt].question;

	let loopCt = 0;
	let btnCnt = $buttons.length;

	while(loopCt < (btnCnt - 1 )){
		$buttons[loopCt].textContent = quizs[_quizCnt].answers[loopCt];
		loopCt++;

	}

}

loopCt = 0;
while(loopCt < btnCnt){
	$buttons[loopCt].addEventListener('click',(e)=>{
		if(e.target.textContent === quizs[quizCnt].correct){
			alert('ok');
			}
		else{
			alert('no');
			}
		quizCnt++;
		if(quizCnt < quizs.length)
		{
			setQuiz(quizCnt);
		}
		else
		{
			alert('Game Over');
		}

		});
	loopCt++;
}

setQuiz(quizCnt);

console.log($buttons);

$buttons[4].addEventListener('click',(e)=>{
		if(quizCnt > 3){
			alert('Game Over');
			$buttons[4].textContent = 'Game Over';
		}else
		{
			quizCnt++;
			setQuiz(quizCnt);
		}
	});


//$button[0].textContent = answers[0];