console.log('Start')
const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach((button)=>{
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        const clr=e.target.id

        body.style.backgroundColor=clr;
        if(clr=='white' || clr=='yellow'){
            body.style.color='black';
        }
        else{
            body.style.color='white';
        }
    });
});