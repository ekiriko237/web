/**
 * Json関係クラス
 */
export	class JsonC{
		//	fullName;
		//	reqe;
			jsonData;	// JSON のデータ
//------------------------------------------------------------------------------
		constructor(fullName){
			this.fullName = fullName;  //Jsonの場所フルパス
			this.reqe = new XMLHttpRequest(); // XMLHttpRequest オブジェクトを生成する
// XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
			this.reqe.onreadystatechange = ()=> {this.getJSON();}

			// true:非同期
			this.reqe.open("GET", this.fullName, false); // HTTPメソッドとアクセスするサーバーのURLを指定
console.log("url",this.fullName);

			this.reqe.send(null); // 実際にサーバーへリクエストを送信

		}
//------------------------------------------------------------------------------
		getJSON(){
				if(this.reqe.readyState == 4 && this.reqe.status == 200){ // サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合

					this.jsonData = JSON.parse(this.reqe.responseText); // 取得した JSON ファイルの中身を変数へ格納
					let aa =  this.jsonData;
					return aa;
				}
			 };

//------------------------------------------------------------------------------
}