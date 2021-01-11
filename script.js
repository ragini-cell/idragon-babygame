Document.onkeydown = function(e){
    console.log("key", e.keyCode)
    if(e.keyCode==38){
        dino = document.querySelector('dino');
        setTimeout(() =>{
            dino.classList.remove('animatedino')
        }, 450);
    }
    
}
setInterval(() => {
    dino = Document.querySelector('.dino');
    ganeover = Document.querySelector('.gameover')
    main = Document.querySelector('.main');

    dx = window.getComputedStyle(dino, null).getPropertyValue('left');
    dy = window.getComputedStyle(dino, null).getPropertyValue('top');
    mx = window.getComputedStyle(dino, null).getPropertyValue('left');
    mx = window.getComputedStyle(dino, null).getPropertyValue('top');

    offsetx = math.abs(dx-mx);
    offsetx = math.abs(dy-my);
},100);
