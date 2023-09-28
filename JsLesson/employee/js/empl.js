/*
    社員状況確認ページ

*/
//import { getEnvironmentData } from "worker_threads";
import { JsonC } from "./jsonCs.js";
(() => {
  /*
    json読込
    */
  //------------------------------------------------------------------------------
  let Js;
  let cataloges3;
  let $doc = document;
  let $table = $doc.getElementsByTagName('table')[0];

  const APIAD = "http://localhost:3000/employeesA/jsondata";
  const OUTCLASS = "./";


  alert("kore!!!");
// switch 
  
  Js = 2 === 1 ? new JsonC("./json/empl.json") : new JsonC(APIAD);
  //	cataloges3 =  1 === 1 ? getJSON():Js.getJSON();

  //Jsonファイルを読み込む
  const getJSONA = () => {
    cataloges3 = (2 === 1) ? "" : Js.getJSON();
  };

  //------------------------------------------------------------------------------

  /*
    HTMLにデータ貼る
    */
  //社員の数分行を追加
  //画面matrixデータ詰め
  let _point = 0;
  const set2form = () => {
    while (_point < cataloges3.length) {
      //1行追加
      addLine(
        cataloges3[_point].empname,
        cataloges3[_point].situationval,
        cataloges3[_point].districtval
      );
      _point++;
    }
  };
  //1行追加 行にデータを貼る
  const addLine = (_name, _situation, _districtval) => {
    let newRow = $table.insertRow();

    let newCell = newRow.insertCell();
    let newText = document.createTextNode(_name);
    newCell.appendChild(newText);
    newCell.className = "tabletd";
    newCell = newRow.insertCell();
    newText = document.createTextNode(_situation);
    newCell.appendChild(newText);
    newCell.className = "situation";
    newCell = newRow.insertCell();
    newText = document.createTextNode(_districtval);
    newCell.appendChild(newText);
    newCell.className = "districtval";
  };
  /*
	サーバからデータを取得する
	*/
	
  //------------------------------------------------------------------------------

  getJSONA();
  
  set2form();
})();