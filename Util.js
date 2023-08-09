//classe base
class obj{
    constructor(x,y,w,h,attrib){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.attrib = attrib
    }

    dir = 0

    des_obj(){
        let img = new Image()
        img.src = this.attrib
        des.drawImage(img,this.x,this.y,this.w,this.h)
}
    }

class F1 extends obj{
    dir = 0
    pts = 0
    vida = 3


    mover(){
        this.x += this.dir
        if(this.x <= 12){
            this.x = 10
        }else if(this.x >= 524){
            this.x = 524
        }
    }

    colid(objeto){
        if((this.x < objeto.x + objeto.width)&&
            (this.x + this.w > objeto.x)&&
            (this.y < objeto.y + objeto.h)&&
            (this.y + this.h > objeto.y)){
            return true       
        }else{
            return false
        }

    }

    point(objeto){
        if(objeto.y > 601){
            return true
        }
    }

}

class Car extends obj{
    mover(){
        this.y += 4

        if(this.y >= 610){
        this.y = -100

        this.x = (Math.random() * (540 - 2 + 1) + 2)
        }
    }

    recomeca(){
        this.y = -100
        this.x = (Math.random() * (540 - 2 + 1) + 2)    
    }

}

class Est_l extends obj{
    des_obj(){
    des.beginPath()   // Para iniciar objeto e poder tornar objeto
    des.lineWidth = '5'  //Espessura da linha
    des.fillStyle = this.attrib  //Cor da pintura
    des.strokeStyle = 'white'  //Cor da linha
    des.rect(this.x,this.y,this.w,this.h)
    des.closePath() //Para fechar e poder tornar um objeto
    des.stroke()  //Risca linha
    des.fill()  //Pinta Área
    }
}
class Est_c extends obj{

    des_obj(){
    des.beginPath()   // Para iniciar objeto e poder tornar objeto
    des.lineWidth = '5'  //Espessura da linha
    des.fillStyle = this.attrib  //Cor da pintura
    des.strokeStyle = 'yellow'  //Cor da linha
    des.rect(this.x,this.y,this.w,this.h)
    des.closePath() //Para fechar e poder tornar um objeto
    des.stroke()  //Risca linha
    des.fill()  //Pinta Área
    }

    mover(){
        this.y += 3
        if(this.y >=610){
            this.y= -60
        }

    }
}




//classe carro

//classe estrada

//classe texto
class Text{
    des_text(text,x,y,cor,font){
        des.fillStyle = cor
        des.lineWidth = '5'
        des.font = font
        des.fillText(text,x,y)
    }
}