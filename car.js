//leitura do canvas
let des = document.getElementById('des').getContext('2d')

//definição das instancias
const f1 = new F1(260,460,45,100, 'assets/img/poke.png')
const c1 = new Car(100,100,45,100, 'assets/img/bola.png')
// const c2 = new Car(150,400,45,100, 'assets/img/chari.png')
// const c3 = new Car(450,600,45,100, 'assets/img/chari.png')
const bg1 = new Est_l(10,2,8,600,'white')
const bg2 = new Est_l(580,2,8,600,'white')
const bg3_1 = new Est_c(291,0,8,80,'yellow')
const bg3_2 = new Est_c(291,320,8,80,'yellow')

let texto_game_over = new Text()
let jogar = true


//definição de textos
const t1 = new Text()
const t2 = new Text()
const t3 = new Text()
const t4 = new Text()

//definição d instancia de som
const som1 = new Audio('assets/audio/motor_11.wav')
som1.volume = 1.0
som1.loop = true 

const som2 = new Audio('assets/audio/batida_carro_.mp3')
som2.volume = 1.0



//controle de movimentação
document.addEventListener('keydown',(event)=>{
    if(event.key === 'a'){
        f1.dir -=5
    }else if(event.key === 'd'){
        f1.dir +=5 
    }
    som1.play()
})


document.addEventListener('keyup',(event)=>{
    if(event.key === 'a'){
        f1.dir = 0 
    }else if(event.key === 'd'){
        f1.dir = 0
    }
})
//game over
    function game_over(){
    if(F1.vida <=0){
        jogar = false
    }
    }



//pontos
    function pontos(){
        if(f1.point(c1)){
            f1.pts += 1
            console.log(f1.pts)
        }
    }
    // function pontos(){
    //     if(f1.point(c2)){
    //         f1.pts += 1
    //         console.log(f1.pts)
    //     }
    // }

    // function pontos(){
    //     if(f1.point(c3)){
    //         f1.pts += 1
    //         console.log(f1.pts)
    //     }
    // }

//colisão
function colisao(){
    if(f1.colid(c1)){
        c1.recomeca()
        f1.vida -=1
    }
}
//desenha
function desenha(){
    bg3_1.des_obj()
    bg3_2.des_obj()
    bg2.des_obj()
    bg1.des_obj()
    if(jogar){
        c1.des_obj()
        // c2.des_obj()
        // c3.des_obj()
        t1.des_text('Pontos:',40,40,'yellow','20px Times')
        t2.des_text('vidas:',450,40,'orange','20px Times')
        t3.des_text(f1.pts,103,40,'yellow','20px Times')
        t4.des_text(f1.vida,500,40,'orange','20px Times')
        f1.des_obj()
    }else{
        texto_game_over.des_text('Perdeu',128,350,'orange','50px','Times')
    }
    }

//atualiza
function atualiza(){
    bg3_1.mover()
    bg3_2.mover()
    if(jogar){
        c1.mover()
        // c2.mover()
        // c3.mover()
        f1.mover()
        pontos()
        colisao()
        game_over
    }
}

//principal
function main(){
    des.clearRect(0,0,600,600)
    atualiza()
    desenha()
    requestAnimationFrame(main)
}

main()
