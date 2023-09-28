/**
 *
 */
//(()=>{

export	class Accordion{
		constructor(obj){
			console.log(obj);

			const $elm = document.querySelector(obj.hookName);
			const $trigger = $elm.getElementsByTagName(obj.tagName);

			const triggerLen = $trigger.length;
			let index = 0;

			while(index < triggerLen){
				$trigger[index].addEventListener('click', (e)=> this.clickHndler(e));
				index++;
			}

		}
	 clickHndler(e){
		e.preventDefault();
		console.log("clicked");

		const $content = e.currentTarget.nextElementSibling;


		if($content.style.display === 'block'){
			$content.style.display = 'none';
		}else{
			$content.style.display = 'block';
		}
	}
}
//})
