// 非同期処理（Promise）
let a = 0;

init();
async function init() {
    try {
        //resolveの引数が、resultに格納される
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                a = 1;
                //rejectの場合は、eに結果が渡される
                reject(a)
            }, 2000);
        })
            console.log(a);
    } catch(e) {
        console.log('catchが実行',e);
    }


// }).catch((c) => {
//     console.log('catchが実行', c)
// })
}
