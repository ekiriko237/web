/**
 *
 */
()=>{
		const tableElem = document.getElementsByTagName('table');

		// tbody要素にある最後の行（tr要素）を削除
		const remvTr =()=>{
			tableElem[0].tBodies[0].deleteRow(-1);
		}



};