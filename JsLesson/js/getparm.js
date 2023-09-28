/**
 *URLのパラメータからValueを返す
 */
export class GetParam{
	url;
	constructor(lurl){
		//URLを受け取る
		this.url = lurl;

	};

	getheadparm(name)
	{
		//キーで値を取得する
		//keyValue
	 //		    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(this.url);
	    if (!results) return null;
	    if (!results[2]) return '';

	    return decodeURIComponent(results[2].replace(/\+/g, " "));

	}
}

