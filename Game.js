class Game{
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      fighter1 = createSprite(50,50);
      //.addImage("1",1_img);
      fighter2 = createSprite(1210,50);
      //.addImage("2",2_img);
      fighter3 = createSprite(50,650);
      //.addImage("3",3_img);
      fighter4 = createSprite(1210,650);
      //.addImage("4",4_img);
      fighters = [fighter1,fighter2,fighter3,fighter4];
    }
  
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
   
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        //image(name of background img , 0,-displayHeight*4,displayWidth, displayHeight*5);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x;
        var y;

        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
          x = displayWidth - allPlayers[plr].xDistance
          y = displayHeight - allPlayers[plr].yDistance
         fighters[index-1].x = x;
         fighters[index-1].y = y;
          // console.log(index, player.index);
        }
        if(keyIsDown("w") && player.index !== null){
          player.ydistance -=10
          player.update();
        }

        if(keyIsDown("s") && player.index !== null){
          player.ydistance +=10
          player.update();
        }


      
      drawSprites();
    }
}
  
} 