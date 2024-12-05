const nums = [3, 1, 4, 1, 5, 10, 2, 6];

//配列の要素を展開して渡すときのスプレット演算子
const result = Math.max(...nums);
console.log(result);


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
//スプレッド演算子によって配列が展開されて別の配列となる
let newArr = [...arr1];
//コピー元を見ているため変更が元の配列にも反映される
let newArr1 = arr1;
let newArr2 = [...arr1,10 ];
newArr.push(4)
console.log(newArr2,arr1);

const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj };
newObj.name = 'John';

console.log(newObj, obj);

const restA = (...argA) => console.log(argA);
//残余引数をargAにまとめて表示させている。引数の個数が決まっていない場合使うと便利
restA(1, 3, 4)

//nには1が入る
const restB = (n, ...argB) => console.log(argB);
restB(1, 3, 4)
