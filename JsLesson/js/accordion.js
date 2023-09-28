/**
 * アコーディオンの学習
 * https://www.youtube.com/watch?v=t7hLDtK8MO4&t=179s
 */

import { Accordion } from './AccordionCs.js';
//(()=>{

/*	class Accordion{
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
*/
	const fuAccordion = new Accordion({
		hookName : '#js-faq',
		tagName  : 'p'
	});

	const fuAccordionB = new Accordion({
		hookName : '#js-faqB',
		tagName  : 'dt'
	});




//})();