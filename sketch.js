var bg, bgImg;
var player, shooterImg, shooter_shooting;
var zumbiImg, zumbi;
var p1, np1, playerz1;
var score = 0;
var balaImg, bala;

//AULA 47 - CRIADO NESTA AULA
var parede1, parede2, parede3, parede4, parede5, parede6, parede7, parede8, parede9, parede10,parede11, parede12, parede13, parede14;
var vida = 3;
var tiroSom, zumbiSom;


function preload(){

  bgImg = loadImage("assets/bg.jpeg");
  
  shooterImg = loadImage("assets/shooter_1.png");

  shooter_shooting = loadImage("assets/shooter_3.png");

  zumbiImg = loadImage("assets/zombie.png");

  p1 = loadImage("assets/p1.png"); 

  p2 = loadImage("assets/p2.png");

  balaImg = loadImage("assets/bala.png");

  //AULA 47 - PRÉ CARREGAR IMAGEM CORAÇÃO
  coracao1Img = loadImage("assets/heart_1.png");
  coracao2Img = loadImage("assets/heart_2.png")
  coracao3Img = loadImage("assets/heart_3.png")

  //AULA 47 - PRÉ CARREGAR SONS
  tiroSom = loadSound("assets/tiro.mp3")
  zumbiSom = loadSound("assets/zumbi.mp3")


}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bg = createSprite(displayWidth/2+25,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 3
  player.debug = true
  player.setCollider("rectangle",0,0,30,30)

  zumbi = createSprite(displayWidth-200, displayHeight-300, 50, 50);
  zumbi.addImage(zumbiImg)
  zumbi.scale = 0.1
  zumbi.debug = true
  zumbi.setCollider("rectangle",0,0,500,500)

  bala = createSprite(player.x+45,player.y-25 ,100,100)
  bala.addImage(balaImg)
  bala.scale = 0.1
  bala.debug = true
  bala.setCollider("rectangle",0,0,450,450)
  bala.visible = false;

  np1 = createSprite(displayWidth-1400, displayHeight-300, 50, 90);
  np1.addImage(p1)
  np1.scale = 2
  np1.debug = true
  np1.setCollider("rectangle",0,0,70,70)
  np1.visible = false;

  //AULA 47 - SUBTRAÇÃO USANDO A IMAGEM DO CORAÇÃO
  coracao1 = createSprite(displayWidth-1525, displayHeight-750, 50, 90);
  coracao1.addImage(coracao3Img)
  coracao1.scale = 0.2

  coracao2 = createSprite(displayWidth-1545, displayHeight-750, 50, 90);
  coracao2.addImage(coracao2Img)
  coracao2.scale = 0.2

  coracao3 = createSprite(displayWidth-1565, displayHeight-750, 50, 90);
  coracao3.addImage(coracao1Img)
  coracao3.scale = 0.2

  //AULA 47 - LABIRINTO
  parede1 = createSprite(displayWidth-900, displayHeight-880, 15,400)
  parede2 = createSprite(displayWidth-900, displayHeight-300, 15,400)
  parede3 = createSprite(displayWidth-600, displayHeight-570, 15,200)
  parede4 = createSprite(displayWidth-400, displayHeight-570, 200,15)
  parede5 = createSprite(displayWidth-850, displayHeight-676, 200,15)
  parede6 = createSprite(displayWidth-850, displayHeight-500, 200,15)
  parede7 = createSprite(displayWidth-700, displayHeight-880, 400,15)
  parede8 = createSprite(displayWidth-700, displayHeight-300, 400,15)
  parede9 = createSprite(displayWidth-500, displayHeight-300, 15,200)
  parede10 = createSprite(displayWidth-500, displayHeight-870, 15,200)

  //AULA 47 - PAREDES DO JOGO
  parede11 = createSprite(displayWidth-960, displayHeight-900, 1950,15)

  parede12 = createSprite(displayWidth-960, displayHeight-100, 1950,15)

  parede13 = createSprite(displayWidth-1600, displayHeight-700, 15 ,1200)

  parede14 = createSprite(displayWidth-5, displayHeight-700, 15,1200)

  //parede11.shapeColor = "red"

}
createEdgeSprites()
function draw() {
  background(0); 
  
  textSize(25)
  fill("white")
  text("Score: " + score, 20, 50);

  //AULA 47- PONTUAÇÃO DA VIDA 
  textSize(25)
  fill("white")
  text("Life: " + vida, 20, 100);
  

  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
    zumbi.velocityY = -6;
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
    player.y = player.y+30
    zumbi.velocityY = +6;
  }
  if(keyDown("RIGHT_ARROW")||touches.length>0){
    player.x = player.x+30
    zumbi.velocityX = +6;
  }
  if(keyDown("LEFT_ARROW")||touches.length>0){
    player.x = player.x-30
    zumbi.velocityX = -6;
  }

  if(keyDown("UP_ARROW")||touches.length>0){
    np1.y = player.y-30
    zumbi.velocityY = -6;
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
    np1.y = player.y+30
    zumbi.velocityY = +6;
  }
  if(keyDown("RIGHT_ARROW")||touches.length>0){
    np1.x = player.x+30
    zumbi.velocityX = +6;
  }
  if(keyDown("LEFT_ARROW")||touches.length>0){
    np1.x = player.x-30
    zumbi.velocityX = -6;
  }

  if(keyWentDown("a")){
    //AULA 47 - INSERÇÃO SOM DE TIRO
    tiroSom.play();

    np1.addImage(p2)
    zumbi.velocityX = -5
    bala = createSprite(player.x+45,player.y-25)
    bala.addImage(balaImg)
    bala.scale = 0.03
    bala.velocityX = 8
    bala.debug = true
    bala.setCollider("rectangle",0,0,50,50)
    

  }else if(keyWentUp("a")){
    np1.addImage(p1)
    //zumbi.velocityX = 0; - AULA 47 - REMOVIDO PARA ELE NÃO PARAR MAIS
    
  }

  if(keyWentDown("space")){
    //AULA 47 - INSERÇÃO SOM DE TIRO
    tiroSom.play();

    player.addImage(shooter_shooting)
    zumbi.velocityX = -4
    bala = createSprite(player.x+45,player.y-25)
    bala.addImage(balaImg)
    bala.scale = 0.03
    bala.velocityX = 8
    bala.debug = true
    bala.setCollider("rectangle",0,0,50,50)
    
  }
  else if(keyWentUp("space")){
    player.addImage(shooterImg)
    zumbi.velocityX = 0;
    
  }

  if(bala.isTouching(zumbi)){
    //AULA 47 - SOM DO ZUMBI AO LEVAR TIRO
    zumbiSom.play();

    zumbi.destroy();
    bala.destroy();
    zumbi = createSprite(displayWidth-200, displayHeight-800, 50, 50);
    zumbi.addImage(zumbiImg)
    zumbi.scale = 0.1
    zumbi.debug = true
    zumbi.setCollider("rectangle",0,0,500,500)
    zumbi.velocityX = -5
    score = score + 1;
  }

  //AULA 47 - ATUALIZAÇÃO DA 46 - O TOUCHING FOI TROCADO E COLOCADO OUTRA CONDIÇÃO PARA SUBTRAIR VIDA
  if(zumbi.isTouching(player)){
    vida = vida - 1;

    zumbi.x = displayWidth-200;
  }

  //AULA 47 - CONDIÇÃO PARA REMOÇÃO DOS CORAÇÕES
  if( vida == 2){
    coracao1.destroy()
  }

  if( vida == 1){
    coracao2.destroy()
  }

  //AULA 47 - CONDIÇÃO DE TOQUE DO ZUMBI NO NOVO PLAYER
  if(zumbi.isTouching(np1)){
    vida = vida - 1;

    zumbi.x = displayWidth-200;
  }
  
  //AULA 47 - CRIADO OUTRA CONDIÇÃO QUE AO CHEGAR EM 0 A VIDA, É CRIADO O OUTRO ZUMBI
  if(vida === 0){
    zumbi.destroy()
    player.destroy();

    //REMOÇÃO DA ÚLTIMA IMAGEM DO CORAÇÃO
    coracao3.destroy()

    zumbi = createSprite(displayWidth-200, displayHeight-500, 50, 50);
    zumbi.addImage(zumbiImg)
    zumbi.scale = 0.1
    zumbi.debug = true
    zumbi.setCollider("rectangle",0,0,300,300);
    zumbi.velocityX = -5
    
    np1.visible = true

    //AULA 47 - VIDA SENDO RENOVADA
    vida = 3;

    //AULA 47 - CRIAÇÃO DO CORAÇÃO NOVAMENTE
    coracao1 = createSprite(displayWidth-1525, displayHeight-750, 50, 90);
    coracao1.addImage(coracao3Img)
    coracao1.scale = 0.2

    coracao2 = createSprite(displayWidth-1545, displayHeight-750, 50, 90);
    coracao2.addImage(coracao2Img)
    coracao2.scale = 0.2

    coracao3 = createSprite(displayWidth-1565, displayHeight-750, 50, 90);
    coracao3.addImage(coracao1Img)
    coracao3.scale = 0.2

    
  }

  //AULA 47 - PAREDES DO LABIRINTO
  zumbi.bounceOff(parede1)
  zumbi.bounceOff(parede2)
  zumbi.bounceOff(parede3)
  zumbi.bounceOff(parede4)
  zumbi.bounceOff(parede5)
  zumbi.bounceOff(parede6)
  zumbi.bounceOff(parede7)
  zumbi.bounceOff(parede8)
  zumbi.bounceOff(parede9)
  zumbi.bounceOff(parede10)

  // AULA 47 - PAREDE DA TELA DO JOGO
  zumbi.bounceOff(parede11)
  zumbi.bounceOff(parede12)
  zumbi.bounceOff(parede13)
  zumbi.bounceOff(parede14)


  np1.bounceOff(parede1)
  np1.bounceOff(parede2)
  np1.bounceOff(parede3)
  np1.bounceOff(parede4)
  np1.bounceOff(parede5)
  np1.bounceOff(parede6)
  np1.bounceOff(parede7)
  np1.bounceOff(parede8)
  np1.bounceOff(parede9)
  np1.bounceOff(parede10)

  // AULA 47 - PAREDE DA TELA DO JOGO
  np1.bounceOff(parede11)
  np1.bounceOff(parede12)
  np1.bounceOff(parede13)
  np1.bounceOff(parede14)

  player.bounceOff(parede1)
  player.bounceOff(parede2)
  player.bounceOff(parede3)
  player.bounceOff(parede4)
  player.bounceOff(parede5)
  player.bounceOff(parede6)
  player.bounceOff(parede7)
  player.bounceOff(parede8)
  player.bounceOff(parede9)
  player.bounceOff(parede10)

  // AULA 47 - PAREDE DA TELA DO JOGO
  player.bounceOff(parede11)
  player.bounceOff(parede12)
  player.bounceOff(parede13)
  player.bounceOff(parede14)

  drawSprites();

}



//AULA 45 - DECOMPOSIÇÃO DO JOGO PARTE 1
/*
1 - INSERIR ZUMBI
2 - CASO O JOGADOR APONTE PARA O ZUMBI ELE ANDA NA DIREÇÃO DELE
3 - CASO O JOGADOR NÃO APONTE MAIS, ELE IRÁ PARAR. 
4 - FAZER COLISÃO ENTRE O JOGADOR E CRIAR NOVO ZUMBI
5 - FAZER O NOVO ZUMBI ANDAR AUTOMATICAMENTE
6 - COLOCAR NOVO PERSONAGEM NO LUGAR
7 - ADICIONAR MOVIMENTO DE ESQUERDA E DIREITA NO PLAYER
*/

//AULA 46 - DECOMPOSIÇÃO DO JOGO PARTE 2
/*
1 - PONTUAÇÃO
2 - NOVO JOGADOR SE MEXER
3 - JOGADOR ANTIGO E NOVO FAZER ATIRAR
4 - INSERIR ITENS NO JOGO DE RECARGA DE BALA
5 - FAZER OS ZUMBIS ANDAREM NA DIREÇÃO DO PLAYER
6 - ATIRAR E DESTRUIR O ZUMBI
6 - CAUSAR DESTRUIÇÃO DA BALA AO TOCAR NO ZUMBI
*/

//AULA 47 - DECOMPOSIÇÃO DO JOGO PARTE 3
/*
1 - FAZER O PLAYER MORRER APÓS 3 TENTATIVAS
2 - FAZERMOS O DESIGN DA PERSONAGEM DAWN
3 - INSERIR OUTROS ELEMENTOS
4 - CRIAR LABIRINTO COMO BARREIRA
5 - INSERIR AUDIO
*/