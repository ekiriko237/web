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
  let $atags = $doc.getElementsByTagName('a');
  let atagsLength = $atags.length;
  let index = 0;
  let $empid = $doc.getElementById("empid").value;
  let $empidB = "$empidB";
  let $msg = $doc.getElementById("msg");

  const sendUrl =
    "http://localhost:3000/api/updateemployee/empid/empValue/situation/situaValue";

  //empid
  let APIAD =
    "http://localhost:3000/getemployeename/jsondata/empid/" + $empid; //+ "1";
  const OUTCLASS = "./";

  // console.log(`$empid=${$empid}`);
  // console.log(`getUrl=${APIAD}`);
  alert("kore!!!");
  // switch

  // Js = 2 === 1 ? new JsonC("./json/empl.json") : new JsonC(APIAD);
  //	cataloges3 =  1 === 1 ? getJSON():Js.getJSON();

  //Jsonファイルを読み込む
  const getJSONA = () => {
    cataloges3 = 2 === 1 ? "" : Js.getJSON();
  };

  //------------------------------------------------------------------------------

  /*
    HTMLにデータ貼る
    */
  //社員の数分行を追加
  //画面matrixデータ詰め
  let _point = 0;
  const set2form = () => {
    $doc.getElementById("empname").textContent =
      cataloges3.empname != "null"
        ? //set empname
          ($doc.getElementById("empname").textContent = cataloges3.empname)
        : "null";
  };
  //------------------------------------------------------------------------------

  const setIvent = () => {
    index = 0;
    
    while (atagsLength > index) {
      //click event
      $atags[index].addEventListener("click", (e) => {
        console.log("e=" + e.target);
        e.preventDefault();
        let $this = e.target;
        console.log("index=" + index);
        console.log("e.target=" + $this);
        sendData($this);
      });
      index++;
    }
  };
  //------------------------------------------------------------------------------

  const sendData = (etarget) => {
    // サーバへリクエストを送る
    let APIAD2 = sendUrl;
    let clickNo = etarget.dataset.nav;

    console.log(etarget.dataset);
    console.log(`$empid=${$empid}`);

    APIAD2 = APIAD2.replace("empValue", $empid);
    APIAD2 = APIAD2.replace("situaValue", clickNo);

    Js = new JsonC(APIAD2);

    let tmpMsg  = Js.getJSON();
    $msg.textContent = tmpMsg.empname;
  };
  //------------------------------------------------------------------------------

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
  // document.onload = () => {
  const getJSONB = () => {
    // ここに読み込みが完了したら実行したい処理を記述する
    $empid = $doc.getElementById("empid").value;
    APIAD = "http://localhost:3000/getemployeename/jsondata/empid/" + $empid; //+ "1";

    console.log(`$doc=${$doc}`);
    console.log(`$empid=${$empid}`);
    console.log(`getUrl=${APIAD}`);

    alert(`$empid=${$empid}`);
    alert(`getUrl=${APIAD}`);

    Js = 2 === 1 ? new JsonC("./json/empl.json") : new JsonC(APIAD);
  };

  getJSONB(); 
  getJSONA();

  set2form();
  setIvent();
})();