document.querySelector('h1');
console.dir(h1Element);
console.log(h1Element.textContent);
h1Element.textContent = '変更後のタイトル'

const btnl = document.querySelector('button');
btnEl.addEventListener('click',(e) => {
    console.log(e.target);
    console.log('hello')
})