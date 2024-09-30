const randomColor= function(){
    const hex="0123456789ABCDEF"
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let rand=Math.floor(Math.random()*16);
        color+=hex[rand];
    }
    return color;
}
const changeColor=()=>{
    document.body.style.backgroundColor=randomColor();
}
let x;
function fun(){
    if(!x)
        x=setInterval(changeColor,1000);
}
// fun();

document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(x);
    x=null;
})
document.querySelector('#start').addEventListener('click',fun);
