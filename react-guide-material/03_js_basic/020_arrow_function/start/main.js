function fn(number) {
  return number * 2;
}
//関数は()が必要
console.log(fn(2));


const fn = function fn(number) {
  return number * 2;
}

const fn = (number) => {
  return number * 2;
}

//複数処理がある場合は{}省略できない
const fncArrow = number => {
  console.log(number);
  return number * 2;
};

//引数が1個の場合は()省略できる
const fnArrow = number => number * 2;
console.log(fnArrow(2));

//戻り値がobjectの場合。アロー関数は{}の中に関数の中身をかくため、オブジェクトを返すときはオブジェクトリテラルが必要
const fnArrowObj = number => ({ result: number * 2 })
