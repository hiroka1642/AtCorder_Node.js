// inputに入力データ全体が入る
function Main(input) {
  // 行ごとに配列にする
  input = input.split("\n");
  const arr = input[0].split(" ");
  const N = arr[0];
  const A = arr[1];
  const B = arr[2];
  const isBelowThreshold = (currentValue) => currentValue <=B;
  let result = 0;
  //N以下の数字
  for (let i = 1; i <= N; i++) {
    const num = i.toString();
    const Num = num.split("");
    //B以上の数字があればreturnする
    if (
      Num.every(isBelowThreshold)===true
    )  {
      let sum = 0;
      for (let l = 0; l < Num.length; l++) {
        sum = sum + Number(Num[l]);
        if(sum>B){
          return;
        }
      }
      if (A <= sum && sum <= B) {
        result += sum;
      }
    }
  }
  console.log(result);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));