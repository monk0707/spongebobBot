let cntVariable = document.querySelector('.countVariable');
const cntImage = document.querySelector(".spongebobImg");
// const btn = document.querySelector(".button");

let cnt = cntVariable.innerHTML - '0';

let count = 0;


cntImage.addEventListener("click",()=>{
    console.log('count var type is ,',typeof(count));
    console.log('cnt variable is ',count);
    count++;
    console.log('cnt variable is ',count);
    cntVariable.innerHTML = cnt + count;
});
