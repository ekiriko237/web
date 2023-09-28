/**
 * Json関係クラス
 */
export	class JsonC{
		//	fullName;
		//	reqe;
			jsonData;	// JSON のデータ
//------------------------------------------------------------------------------
		constructor(fullName,req){
			this.fullName = fullName;  //Jsonの場所フルパス
			this.reqe = new XMLHttpRequest(); // XMLHttpRequest オブジェクトを生成する
			//this.reqe = req; // XMLHttpRequest オブジェクトを生成する

			// true:非同期
			this.reqe.open("GET", this.fullName, true); // HTTPメソッドとアクセスするサーバーのURLを指定
			this.reqe.send(null); // 実際にサーバーへリクエストを送信

		}
//------------------------------------------------------------------------------
		getJSON(){
			this.reqe.onreadystatechange = function() { // XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ

				if(this.reqe.readyState == 4 && this.reqe.status == 200){ // サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合

					this.jsonData = JSON.parse(this.reqe.responseText); // 取得した JSON ファイルの中身を変数へ格納
					let aa =  this.jsonData;
					return aa;
		//			 var len = jsonData.length; // JSON のデータ数を取得

					 // JSON のデータ数分処理
		/*			 for(var i=0; i<len; i++) {
					 	console.log("id: " + jsonData[i].detail[0].name + ", name: " + jsonData[i].detail[0].price);
					 }
		*/
				}
			 };
//		return this.jsonData;
		}
}