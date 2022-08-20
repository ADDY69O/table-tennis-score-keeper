const p1={
    score: 0,
    button:document.querySelector('#btn1'),
    display:document.querySelector('#p1score')

}
const p2={
    score: 0, 
    button:document.querySelector('#btn2'),
    display:document.querySelector('#p2score')

}


const b3=document.querySelector('#btn3');



let totalscore=3;



function update(player,opponent){
    if(!gameover ){
        player.score+=1;
    
        if(player.score===totalscore){
            gameover=true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
    
        player.display.textContent=player.score;


}
}


const totalscorechange=document.querySelector('#playerss');
let gameover=false;
p1.button.addEventListener("click",()=>{
update(p1,p2)
    
})
p2.button.addEventListener("click",()=>{
    update(p2,p1);
 })





 b3.addEventListener("click",reset)

totalscorechange.addEventListener('change',function(){
    totalscore=parseInt(this.value);
reset();


})

function reset(){
    gameover=false;

    for(let p of[p1,p2]){

        p.score=0;
      
          p.display.textContent=p.score;
         
      
          p.display.classList.remove('has-text-danger');
          p.display.classList.remove('has-text-success');
       
          p.button.disabled=false;
         

    }

 
    

}





