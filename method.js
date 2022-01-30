//よく使うメソッド集

//場合の数は、愚直に計算する
const arr=["1","2","3","4"]

//配列において、一部を切り出す
//a番目から、b個切り出す
arr.splice(a,b)
//a番目からb番目まで切り出す
arr.slice(a,b)
// a番目からb個の配列をcに置き換える
arr.splice(a,b,c)
// a番目のあとにcを追加する（抜き出すものは０個）
arr.splice(a,0,c)

//全ての要素が条件を満たすかどうか判断する
//条件をisBelowThresholdに記述する
const isBelowThreshold = (currentValue) => currentValue < 40;
//配列の全ての要素が条件に一致するかどうか、true/falseで返す
array1.every(isBelowThreshold);

//aと一致する要素が何番目にあるか探索する（bから探索する）
arr.indexOf(a,[b])
//aと一致する要素があるかどうかを探索する（bから探索する）
arr.includes(a,[b])


const word="abcd";
//文字列において、a番目からb個切り出す
word.substring(a,b);
//文字数
word.length


const number=1000;
//小数点以下を切り捨てる
Math.floor(number/3);
//全探索の方法for()配列の中の要素を足し合わせたり