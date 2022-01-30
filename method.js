//よく使うメソッド集

//=================配列の操作=====================//
const arr=["1","2","3","4"]

//配列において、一部を切り出す
//a番目からb番目まで切り出す
arr.slice(a,b)

//a番目から、b個切り出す
arr.splice(a,b)
// a番目からb個の配列をcに置き換える
arr.splice(a,b,c)
// a番目のあとにcを追加する（抜き出すものは０個）
arr.splice(a,0,c)

//全ての要素が条件を満たすかどうか判断する(true/false)
//条件をisBelowThresholdに記述する
const isBelowThreshold = (currentValue) => currentValue < 40;
array1.every(isBelowThreshold);

//aと一致する要素が「何番目にあるか」探索する（bから探索する）
arr.indexOf(a,[b])
//aと一致する要素が「あるかどうか」を探索する（bから探索する）
arr.includes(a,[b])



//配列の中身を数値へ変換する(10進数)
const arr2= arr.map( v => parseInt( v, 10 ) )

//（（なくても可）初期値[a]から始まり、）要素一つ一つに関数を実行する
//直前の結果がpreviousValueに入る

//！！！要素の全ての数を足し合わせるときによく使う！！！
const reducer = (previousValue, currentValue) => previousValue + currentValue;
arr2.reduce(reducer, [a])



//=================文字列の操作=====================//
const word="abcd";

//文字列において、a番目からb個切り出す
word.substring(a,b);
//文字数
word.length


//=================数値の操作=====================//
const number=1000;
//小数点以下を切り捨てる
Math.floor(number/3);
//文字列へ変換する
number.toString();
//全探索の方法for()配列の中の要素を足し合わせたり