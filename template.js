//Node.jsで問題を解く時のテンプレート
//標準入力を読み込む

// inputに入力データ全体が入る
function Main(input) {
	// 行ごとに配列にする
	input = input.split("\n");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));