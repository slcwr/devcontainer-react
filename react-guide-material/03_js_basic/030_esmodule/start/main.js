import { hello,User } from "./module.js";
//defaultのexportの時は一つだけなので名前を変えれる。{}で囲まない。
import functionB from "./module.js"; 

hello();
functionB();
const user = new User('Tom');
user.hello();

