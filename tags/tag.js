window.onload = function () {
    // ローカルストレージ対応判定
     if(!localStorage) {
         console.log("Error: Local storage not supported");
     } else {
         console.log("OK: Local storage supported!");
     }
}
