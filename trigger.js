/**
 * triggers
 * 注意!: 如果在sheet內測試時都沒有運作，請重新整理sheet讓他讀取資料
 * @see https://developers.google.com/apps-script/guides/triggers
 */

//[]
/**
 * 當文件開啟時，會自動執行一次 onOpen(e)
 * @param {Event} e The onOpen event.
 */
function onOpen(e){
  init();
}
/**
 * The event handler triggered when installing the add-on.
 * @param {Event} e The onInstall event.
 */
function onInstall(e) {
  onOpen(e);
}
// /**
//  * The event handler triggered when editing the spreadsheet.
//  * @param {Event} e The onEdit event.
//  */
// function onEdit(e) {
//   // Set a comment on the edited cell to indicate when it was changed.
//   const range = e.range;
//   range.setNote('Last modified: ' + new Date());
// }
// /**
//  * The event handler triggered when the selection changes in the spreadsheet.
//  * @param {Event} e The onSelectionChange event.
//  */
// function onSelectionChange(e) {
//   const ss = SpreadsheetApp.getActiveSpreadsheet();
//   const sheet = ss.getActiveSheet();
//   const sName = sheet.getSheetName();
//   const sCol = sheet.getActiveCell().getColumn();
//   const sRow = sheet.getActiveCell().getRow();
//   const nCol = 10;
//   const nRow = ss.getSheetByName("採購清單_test").getRange("B1:B").getValues().filter(String).length; //取得已經有輸入資料的row長度
//   var pRow = ss.getRangeByName("上次選定列");
//   if(sName == "採購清單_test"){
//     console.log(nRow);
//     if(pRow.getValue() != sRow && sRow >= 3 && sRow <= nRow && sCol < nCol){ //選定不同列 and 在有商品名稱的範圍 and 沒超過圖表: 才處理圖片
//       sheet.getRange("K17").setValue(`${sRow}/${nRow}`);
//       changeImage(sheet.getRange("K15"), sheet.getRange(sRow, 2).getNote());  //更換圖片
//     }
//     pRow.setValue(sRow);
//   }
// }

// function changeImage(_range=SpreadsheetApp.getActiveRange(), _imageUrl=String){
//   _range.setValue(`=image("${_imageUrl}",1)`);  //輸出圖片
// }

// function _test(){
//   const rangeList = SpreadsheetApp.getActiveSpreadsheet().getActiveRangeList().getRanges();
  
//   for(let range of rangeList){
//     console.log(`${range}: ${range.getValue()}`);
//   }
// }